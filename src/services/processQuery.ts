import type { AuthData } from ".";

export const processQuery = async (
  query: string,
  authData: AuthData | null
): Promise<string> => {
  if (!authData) {
    throw new Error("User not authenticated");
  }

  const encoded = btoa(`${authData.uid}:${authData.password}`);

  const response = await fetch("http://localhost:8001/query/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${encoded}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Unknown server error");
  }

  return data.response;
};