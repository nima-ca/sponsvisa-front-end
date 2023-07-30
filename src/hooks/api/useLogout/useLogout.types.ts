import { CoreResponse } from "@src/types/common.types";
import { UseMutationResult } from "@tanstack/react-query";

export type UseLogout = UseMutationResult<CoreResponse, unknown, void, unknown>;
