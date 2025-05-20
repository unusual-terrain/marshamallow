export const processQuery = async (query: string): Promise<string> => {
  const response = await fetch("http://localhost:8001/query/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Unknown server error");
  }

  return data.response;
};
