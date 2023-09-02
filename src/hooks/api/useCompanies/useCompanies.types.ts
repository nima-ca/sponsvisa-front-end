import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { CompaniesResponse } from "./companies";

export type UseCompanies = UseInfiniteQueryResult<CompaniesResponse, unknown>;
