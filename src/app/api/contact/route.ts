import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { appendToGoogleSheet } from '@/lib/google-sheets';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Trim inputs
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    // Validate name
    if (!trimmedName) {
      return NextResponse.json(
        { 
          error: 'Name is required',
          code: 'MISSING_NAME' 
        },
        { status: 400 }
      );
    }

    // Validate email
    if (!trimmedEmail) {
      return NextResponse.json(
        { 
          error: 'Email is required',
          code: 'MISSING_EMAIL' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!trimmedEmail.includes('@')) {
      return NextResponse.json(
        { 
          error: 'Invalid email format',
          code: 'INVALID_EMAIL_FORMAT' 
        },
        { status: 400 }
      );
    }

    // Validate message
    if (!trimmedMessage) {
      return NextResponse.json(
        { 
          error: 'Message is required',
          code: 'MISSING_MESSAGE' 
        },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    // Insert into database
    const newSubmission = await db.insert(contactSubmissions)
      .values({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        submittedAt: timestamp,
        syncedToSheets: false
      })
      .returning();

    // Write to Google Sheets
    try {
      const rowData = [[timestamp, trimmedName, trimmedEmail, trimmedMessage]];
      await appendToGoogleSheet(rowData);
      
      // Update sync status in database
      await db.update(contactSubmissions)
        .set({ syncedToSheets: true })
        .where(eq(contactSubmissions.id, newSubmission[0].id));
      
      newSubmission[0].syncedToSheets = true;
    } catch (sheetError) {
      console.error('Failed to write to Google Sheets:', sheetError);
      // Continue - data is still saved in database
    }

    return NextResponse.json(newSubmission[0], { status: 201 });

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
      },
      { status: 500 }
    );
  }
}
