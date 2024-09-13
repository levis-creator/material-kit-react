class HttpReq {
  private baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  private success = false;
  // this will automatically add data to the database
  async postData(endpoint: string, data: any) {
    try {
      const response = await fetch(`${this.baseUrl}/api/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        return {
          status: response.status,
          success: false,
          message: errorResponse.message,
          data: null,
        };
      }

      // Optionally handle the response
      const result = await response.json();
      return {
        status: response.status,
        success: true,
        message: null,
        data: result,
      };
    } catch (error) {
      console.error('Error:', error);
    }
  }
  // this will retrieve data from the database
  async getData(endpoint: string, params: Record<string, any> = {}): Promise<any> {
    try {
      // Convert params object to URL query string
      const queryString = new URLSearchParams(params).toString();
      const url = `${this.baseUrl}/api/${endpoint}${queryString ? `?${queryString}` : ''}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        // Optionally, you can parse the error response to provide more details
        const errorResponse = await response.json();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorResponse.message || 'Unknown error'}`);
      }

      // Optionally handle the response
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error in getData:', error);
      // Optionally rethrow the error or return a standardized error object
      throw error;
    }
  }
}
export const httpReq = new HttpReq();
