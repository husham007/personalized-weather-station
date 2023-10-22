import jwtDecode from "jwt-decode"; // Import the jwt-decode library

export function extractUserInfoFromToken(token) {
  try {
    const decoded = jwtDecode(token);
    return decoded; // This will contain the user information from the token
  } catch (error) {
    // Token is invalid or has expired
    return null;
  }
}
