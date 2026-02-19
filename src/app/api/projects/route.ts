import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { projects } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const clientId = searchParams.get('client_id');

    const results = await db
      .select()
      .from(projects)
      .where(clientId ? eq(projects.clientId, clientId) : undefined)
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      description,
      client_id,
      status,
      progress_percentage,
      start_date,
      estimated_completion,
    } = body;

    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'Name is required and cannot be empty', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (
      progress_percentage !== undefined &&
      (progress_percentage < 0 || progress_percentage > 100)
    ) {
      return NextResponse.json(
        {
          error: 'Progress percentage must be between 0 and 100',
          code: 'INVALID_PROGRESS_PERCENTAGE',
        },
        { status: 400 }
      );
    }

    const insertData: {
      name: string;
      description?: string;
      clientId?: string;
      status: string;
      progressPercentage: number;
      startDate?: Date;
      estimatedCompletion?: Date;
      createdAt: Date;
      updatedAt: Date;
    } = {
      name: name.trim(),
      description: description?.trim(),
      clientId: client_id,
      status: status || 'planning',
      progressPercentage:
        progress_percentage !== undefined ? progress_percentage : 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    if (start_date) {
      insertData.startDate = new Date(start_date);
    }

    if (estimated_completion) {
      insertData.estimatedCompletion = new Date(estimated_completion);
    }

    const newProject = await db.insert(projects).values(insertData).returning();

    return NextResponse.json(newProject[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const body = await request.json();

    const existingProject = await db
      .select()
      .from(projects)
      .where(eq(projects.id, parseInt(id)))
      .limit(1);

    if (existingProject.length === 0) {
      return NextResponse.json(
        { error: 'Project not found', code: 'PROJECT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const {
      name,
      description,
      client_id,
      status,
      progress_percentage,
      start_date,
      estimated_completion,
      actual_completion,
    } = body;

    if (name !== undefined && name.trim() === '') {
      return NextResponse.json(
        { error: 'Name cannot be empty', code: 'INVALID_NAME' },
        { status: 400 }
      );
    }

    if (
      progress_percentage !== undefined &&
      (progress_percentage < 0 || progress_percentage > 100)
    ) {
      return NextResponse.json(
        {
          error: 'Progress percentage must be between 0 and 100',
          code: 'INVALID_PROGRESS_PERCENTAGE',
        },
        { status: 400 }
      );
    }

    const updateData: {
      name?: string;
      description?: string;
      clientId?: string;
      status?: string;
      progressPercentage?: number;
      startDate?: Date;
      estimatedCompletion?: Date;
      actualCompletion?: Date;
      updatedAt: Date;
    } = {
      updatedAt: new Date(),
    };

    if (name !== undefined) updateData.name = name.trim();
    if (description !== undefined) updateData.description = description.trim();
    if (client_id !== undefined) updateData.clientId = client_id;
    if (status !== undefined) updateData.status = status;
    if (progress_percentage !== undefined)
      updateData.progressPercentage = progress_percentage;
    if (start_date !== undefined) updateData.startDate = new Date(start_date);
    if (estimated_completion !== undefined)
      updateData.estimatedCompletion = new Date(estimated_completion);
    if (actual_completion !== undefined)
      updateData.actualCompletion = new Date(actual_completion);

    const updatedProject = await db
      .update(projects)
      .set(updateData)
      .where(eq(projects.id, parseInt(id)))
      .returning();

    return NextResponse.json(updatedProject[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const existingProject = await db
      .select()
      .from(projects)
      .where(eq(projects.id, parseInt(id)))
      .limit(1);

    if (existingProject.length === 0) {
      return NextResponse.json(
        { error: 'Project not found', code: 'PROJECT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deletedProject = await db
      .delete(projects)
      .where(eq(projects.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Project deleted successfully',
        project: deletedProject[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
