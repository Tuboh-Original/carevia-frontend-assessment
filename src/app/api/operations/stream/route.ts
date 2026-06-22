import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src/app/api/operations/mock-data.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileData);

    // Simulate an unstable API environment that occasionally drops (15% chance)
    // This forces their custom error interceptor / toast mechanism to run
    if (Math.random() < 0.15) {
      return new NextResponse(
        JSON.stringify({ error: "Internal Gateway Timeout Connection Dropped" }), 
        { status: 504 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to parse system telemetry parameters" }), 
      { status: 500 }
    );
  }
}
