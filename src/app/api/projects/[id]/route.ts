import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { projects, projectUpdates } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const projectId = Number.parseInt(params.id, 10);

    if (Number.isNaN(projectId)) {
      return NextResponse.json(
        { error: 'Valid project ID is required', code: 'INVALID_ID' },
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
        { error: 'Project not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const updates = await db
      .select()
      .from(projectUpdates)
      .where(eq(projectUpdates.projectId, projectId))
      .orderBy(desc(projectUpdates.createdAt));

    return NextResponse.json({
      ...project[0],
      updates,
    });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const projectId = Number.parseInt(params.id, 10);

    if (Number.isNaN(projectId)) {
      return NextResponse.json(
        { error: 'Valid project ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const existingProject = await db
      .select()
      .from(projects)
      .where(eq(projects.id, projectId))
      .limit(1);

    if (existingProject.length === 0) {
      return NextResponse.json(
        { error: 'Project not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const {
      name,
      description,
      status,
      progressPercentage,
      estimatedCompletion,
      actualCompletion,
    } = body;

    if (name !== undefined && name.trim() === '') {
      return NextResponse.json(
        { error: 'Name cannot be empty', code: 'INVALID_NAME' },
        { status: 400 }
      );
    }

    if (progressPercentage !== undefined) {
      if (
        typeof progressPercentage !== 'number' ||
        progressPercentage < 0 ||
        progressPercentage > 100
      ) {
        return NextResponse.json(
          {
            error: 'Progress percentage must be between 0 and 100',
            code: 'INVALID_PROGRESS',
          },
          { status: 400 }
        );
      }
    }

    const updates: {
      name?: string;
      description?: string;
      status?: string;
      progressPercentage?: number;
      estimatedCompletion?: Date | null;
      actualCompletion?: Date | null;
      updatedAt: Date;
    } = {
      updatedAt: new Date(),
    };

    if (name !== undefined) updates.name = name.trim();
    if (description !== undefined) updates.description = description?.trim();
    if (status !== undefined) updates.status = status;
    if (progressPercentage !== undefined) updates.progressPercentage = progressPercentage;

    if (estimatedCompletion !== undefined) {
      const estimatedDate = estimatedCompletion ? new Date(estimatedCompletion) : null;
      if (estimatedDate && Number.isNaN(estimatedDate.getTime())) {
        return NextResponse.json(
          { error: 'Invalid estimated completion date', code: 'INVALID_ESTIMATE' },
          { status: 400 }
        );
      }
      updates.estimatedCompletion = estimatedDate;
    }

    if (actualCompletion !== undefined) {
      const actualDate = actualCompletion ? new Date(actualCompletion) : null;
      if (actualDate && Number.isNaN(actualDate.getTime())) {
        return NextResponse.json(
          { error: 'Invalid actual completion date', code: 'INVALID_ACTUAL' },
          { status: 400 }
        );
      }
      updates.actualCompletion = actualDate;
    }

    const updated = await db
      .update(projects)
      .set(updates)
      .where(eq(projects.id, projectId))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json(
        { error: 'Failed to update project', code: 'UPDATE_FAILED' },
        { status: 500 }
      );
    }

    return NextResponse.json(updated[0]);
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const projectId = Number.parseInt(params.id, 10);

    if (Number.isNaN(projectId)) {
      return NextResponse.json(
        { error: 'Valid project ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const existingProject = await db
      .select()
      .from(projects)
      .where(eq(projects.id, projectId))
      .limit(1);

    if (existingProject.length === 0) {
      return NextResponse.json(
        { error: 'Project not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(projects)
      .where(eq(projects.id, projectId))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json(
        { error: 'Failed to delete project', code: 'DELETE_FAILED' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Project deleted successfully',
      project: deleted[0],
    });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
