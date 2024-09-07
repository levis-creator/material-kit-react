class HttpReq {
  private baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
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
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Optionally handle the response
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
export const httpReq = new HttpReq();
