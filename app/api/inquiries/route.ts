import { NextRequest, NextResponse } from 'next/server';
import { sql, initDatabase } from '../../../lib/db';

// Initialize database on first request
let dbInitialized = false;

export async function POST(request: NextRequest) {
  try {
    if (!dbInitialized) {
      await initDatabase();
      dbInitialized = true;
    }

    const body = await request.json();
    const { email, name, company, phone, whatsapp, message, product_name } = body;

    // Validate required fields
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'Email, name, and message are required' },
        { status: 400 }
      );
    }

    // Insert inquiry into database
    const result = await sql`
      INSERT INTO inquiries (email, name, company, phone, whatsapp, message, product_name)
      VALUES (${email}, ${name}, ${company || null}, ${phone || null}, ${whatsapp || null}, ${message}, ${product_name || null})
      RETURNING id, created_at
    `;

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inquiry submitted successfully',
        id: result[0].id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to save inquiry' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!dbInitialized) {
      await initDatabase();
      dbInitialized = true;
    }

    const inquiries = await sql`
      SELECT * FROM inquiries
      ORDER BY created_at DESC
    `;

    return NextResponse.json({ inquiries }, { status: 200 });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch inquiries' },
      { status: 500 }
    );
  }
}

