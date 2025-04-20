// app/api/contact/route.ts
import {NextRequest, NextResponse} from 'next/server';
import { OpenAIClient } from '../_functions/OpenAiClient';

export async function POST (request: NextRequest) {
  try {
    const body = await request.json ();
    const {query} = body;

    // ✅ You can process or store the data here
    console.log('Received contact form data:', query);
    const ocli = new OpenAIClient();
    const dataResponse = await ocli.getFunctionCalls(query);
    console.log(dataResponse)

    const aiResponse = await ocli.getSummary(query,dataResponse)

    return NextResponse.json({success: true, message: aiResponse});
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {success: false, error: 'Invalid request'},
      {status: 400}
    );
  }
}
