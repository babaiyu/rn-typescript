// Handle Response
export async function handleResponse(response: Response) {
  const text = await response.text();
  const data = text && JSON.parse(text);
  return data;
}

// Function hit API
export async function userJSON() {
  const USER_JSON = 'https://jsonplaceholder.typicode.com/users';
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await fetch(USER_JSON, headers);
  return handleResponse(response);
}
