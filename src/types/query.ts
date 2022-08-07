import type {
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

export type QueryOptions<Returns, E extends Error = Error> = Omit<UseQueryOptions<Returns, E>, 'queryKey'>;
export type QueryResult<Returns, E extends Error = Error> = UseQueryResult<Returns, E>;
export type InfiniteQueryOptions<Returns, E extends Error = Error> = Omit<
  UseInfiniteQueryOptions<Returns, E>,
  'queryKey'
>;
export type InfiniteQueryResult<Returns, E extends Error = Error> = UseInfiniteQueryResult<Returns, E>;
export type MutationOptions<Params, Returns, E extends Error = Error> = UseMutationOptions<Returns, E, Params>;
export type MutationResult<Params, Returns, E extends Error = Error> = UseMutationResult<Returns, E, Params>;
