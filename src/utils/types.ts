/* eslint-disable no-unused-vars */
export interface ILink {
  name: string;
  href: string;
}

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
