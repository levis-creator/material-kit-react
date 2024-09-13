export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  userEmail?: string;
  token?: string;
  userName?: string;
  role: Role[];
  [key: string]: unknown;
}
export enum Role {
  ADMIN = 'Admin',
  FACILITATOR = 'Facilitator',
  SUPER_ADMIN = 'super_admin',
}
