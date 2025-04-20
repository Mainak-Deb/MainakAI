// app/api/contact/route.ts
import {NextRequest, NextResponse} from 'next/server';

export async function POST (request: NextRequest) {
  try {
    const body = await request.json ();
    const {query} = body;

    // ✅ You can process or store the data here
    console.log ('Received contact form data:', query);

    return NextResponse.json ({success: true, message: 'Message received!'});
  } catch (error) {
    return NextResponse.json (
      {success: false, error: 'Invalid request'},
      {status: 400}
    );
  }
}
