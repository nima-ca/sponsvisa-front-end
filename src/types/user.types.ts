/* eslint-disable no-unused-vars */
export enum UserRole {
  ADMIN = `ADMIN`,
  USER = `USER`,
}
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isVerified: boolean;
}

export type UserAccess = UserRole | `ANY`;
