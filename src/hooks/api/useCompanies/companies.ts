import { PaginatedCoreResponse } from "@src/types/common.types";
import api from "@src/utils/axios";

export interface Company {
  id: number;
  name: string;
  description: string;
  country: string;
  city: string | null;
  website: string;
  linkedIn: string | null;
  supportsSponsorshipProgram: string;
  createdAt: string;
  userId: 2;
  isApproved: boolean;
  countryName: string;
}

export interface CompaniesResponse extends PaginatedCoreResponse {
  items: Company[];
}

export interface CompaniesQueries {
  page?: string;
  limit?: string;
  searchQuery?: string;
  country?: string;
}

export const companies = async ({
  country,
  limit,
  page,
  searchQuery,
}: CompaniesQueries): Promise<CompaniesResponse> => {
  const response = await api.get<CompaniesResponse>(`/company`, {
    params: { country, limit, page, searchQuery },
  });
  return response.data;
};
