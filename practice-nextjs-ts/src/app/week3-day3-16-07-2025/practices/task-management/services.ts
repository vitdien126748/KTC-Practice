export interface User {
  id: string;
  username: string;
  password: string;
  access_token?: string;
  refresh_token?: string;
}
export const baseUrl = "https://server.aptech.io";
