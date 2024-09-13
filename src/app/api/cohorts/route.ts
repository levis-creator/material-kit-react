import Error from 'next/error';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  try {
    // Get the base URL from environment variables
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiBaseUrl) {
      return NextResponse.json({ error: 'API base URL is not defined' }, { status: 500 });
    }

    // Construct the URL for the external API endpoint
    const apiUrl = `${apiBaseUrl}/api/cohort`; // Replace with your actual endpoint

    // Make a request to the external API
    const response = await fetch(apiUrl, {
      method: 'GET',
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
    // Log the error for debugging (in a real application, use a logging service)
    console.error('Error in GET handler:', error);

    // Handle other errors (e.g., network issues)
    return NextResponse.json({ error: error.message || 'Unknown error occurred' }, { status: 500 });
  }
};
export const POST = async (request: Request) => {
  try {
    // Parse the incoming request body
    const body = await request.json();

    // Make a request to the external API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cohort`, {
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
