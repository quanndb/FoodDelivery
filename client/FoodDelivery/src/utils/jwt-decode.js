import { jwtDecode } from "jwt-decode";

export const decodeAccessToken = (token) => {
  const accessToken = localStorage.accessToken;
  if (token) return jwtDecode(accessToken);
  if (accessToken) return jwtDecode(accessToken);
  return null;
};
