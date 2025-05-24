import axios from "axios";
export interface UserData {
  PersonNumber: string;
  Username: string;
  DisplayName: string;
  PersonId: string;
  AccessToken: string;
}

export const processLogin = async (
  uid: string,
  password: string
): Promise<UserData> => {
  try {
    const token = btoa(`${uid}:${password}`); // Base64 encode username:password

    const response = await axios.post(
      "http://localhost:8002/auth/login",
      {}, // Optional body – use `{}` or actual payload if needed
      {
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail || "Unknown server error");
    }
    throw new Error("Network error or server unreachable");
  }
};
