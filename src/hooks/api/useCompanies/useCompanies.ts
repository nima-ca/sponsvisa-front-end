import { useInfiniteQuery } from "@tanstack/react-query";
import { CompaniesQueries, companies } from "./companies";
import { UseCompanies } from "./useCompanies.types";

const COMPANIES_LIMIT = 20;

export const useCompanies = (
  queries: Omit<CompaniesQueries, `page`> | undefined = {
    country: ``,
    searchQuery: ``,
    limit: `${COMPANIES_LIMIT}`,
  },
): UseCompanies => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) => companies({ ...queries, page: pageParam }),
    queryKey: [`companies`],
    getNextPageParam: (lastPage, allPages) => {
      const hasMore =
        lastPage.totalCount > allPages.length * +(queries.limit as string);

      const nextPage = hasMore ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });
};
