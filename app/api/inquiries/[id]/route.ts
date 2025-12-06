import { NextRequest, NextResponse } from 'next/server';
import { sql } from '../../../../lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await params;
    const id = parseInt(idParam);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid inquiry ID' },
        { status: 400 }
      );
    }

    const result = await sql`
      SELECT * FROM inquiries
      WHERE id = ${id}
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Inquiry not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ inquiry: result[0] }, { status: 200 });
  } catch (error) {
    console.error('Error fetching inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to fetch inquiry' },
      { status: 500 }
    );
  }
}

