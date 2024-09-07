import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  try {
    // Parse the incoming request body
    const body = await request.json();

    // Make a request to the external API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    // Check if the response is successful
    if (!response.ok) {
      // Handle HTTP errors
      const errorResponse = await response.json();
      return NextResponse.json(
        { error: errorResponse.message || 'Unknown error occurred' },
        { status: response.status }
      );
    }

    // Parse the response JSON
    const data = await response.json();

    // Return the successful response
    return NextResponse.json(data);
  } catch (error: Error | any) {
    // Handle other errors (e.g., network issues)
    return NextResponse.json({ error: error.message || 'Unknown error occurred' }, { status: 500 });
  }
};
