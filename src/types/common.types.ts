export interface ILink {
  name: string;
  href: string;
}

export interface CoreResponse {
  success: boolean;
  errors?: string[];
}

export interface PaginatedCoreResponse extends CoreResponse {
  totalCount: number;
}
