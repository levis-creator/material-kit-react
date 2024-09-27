import { NextResponse } from 'next/server';

export const DELETE = async (request: Request) => {
  try {
    // Parse the incoming request body
    const body = await request.json();

    // Make a request to the external API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cohort/multi`, {
      method: 'DELETE',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    // Check if the response is successful
    if (response.status !== 204) {
      // Handle HTTP errors
      const errorResponse = await response.json();
      return NextResponse.json(
        { error: errorResponse.message || 'Unknown error occurred' },
        { status: response.status }
      );
    }

    // Parse the response JSON
    const data = await response.json();
    console.log(data);
    // Return the successful response
    return NextResponse.json(data);
  } catch (error: Error | any) {
    // Handle other errors (e.g., network issues)
    console.log(error);
    return NextResponse.json({ error: error.message || 'Unknown error occurred' }, { status: 500 });
  }
};
