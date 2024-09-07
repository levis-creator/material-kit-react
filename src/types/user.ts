export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  userEmail?: string;
  token?: string;
  userName?: string;
  [key: string]: unknown;
}
