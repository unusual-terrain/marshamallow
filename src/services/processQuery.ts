import type { AuthData } from ".";

import axios from "axios";

export const processQuery = async (
  query: string,
  authData: AuthData | null
): Promise<string> => {
  if (!authData) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await axios.post(
      "http://localhost:8001/query/",
      {
        query: query,
        accessToken: authData.userData.AccessToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.response;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail || "Unknown server error");
    }
    throw new Error("Network error or server unreachable");
  }
};
