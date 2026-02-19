import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { projects, projectUpdates } from '@/db/schema';
import { eq } from 'drizzle-orm';

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const params = await context.params;
    const projectId = Number.parseInt(params.id, 10);

    if (Number.isNaN(projectId)) {
      return NextResponse.json(
        {
          error: 'Valid project ID is required',
          code: 'INVALID_PROJECT_ID',
        },
        { status: 400 }
      );
    }

    const project = await db
      .select()
      .from(projects)
      .where(eq(projects.id, projectId))
      .limit(1);

    if (project.length === 0) {
      return NextResponse.json(
        {
          error: 'Project not found',
          code: 'PROJECT_NOT_FOUND',
        },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { title, description, created_by } = body;

    const trimmedTitle = title?.trim();
    if (!trimmedTitle) {
      return NextResponse.json(
        {
          error: 'Title is required',
          code: 'MISSING_TITLE',
        },
        { status: 400 }
      );
    }

    const newUpdate = await db
      .insert(projectUpdates)
      .values({
        projectId,
        title: trimmedTitle,
        description: description?.trim() || null,
        createdBy: created_by?.trim() || null,
        createdAt: new Date(),
      })
      .returning();

    return NextResponse.json(newUpdate[0], { status: 201 });
  } catch (error) {
    console.error('POST project update error:', error);
    return NextResponse.json(
      {
        error:
          'Internal server error: ' +
          (error instanceof Error ? error.message : 'Unknown error'),
      },
      { status: 500 }
    );
  }
}
