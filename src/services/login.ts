
import axios from "axios";
export interface UserData {
    PersonNumber: string;
    Username: string;
    DisplayName: string;
    PersonId: string;
}



export const processLogin = async (uid: string, password: string): Promise<UserData> => {
  try {
    const response = await axios.get("http://localhost:8002/selfService/getMyDetails", 

      {
        auth: {
          username: uid,
          password: password
        },
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail || "Unknown server error");
    }
    throw new Error("Network error or server unreachable");
  }
};