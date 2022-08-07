import type { AxiosRequestHeaders, Method } from 'axios';

import type { Action as MockAction } from 'apis/user';

export type Action = MockAction;

export interface APIResponse {
  message?: string;
  msg?: string;
  ret_code?: number;
  total_count?: number;
}

export interface RequestParams {
  action?: Action;
  current?: number;
  limit?: number;
  method?: Method;
  offset?: number;
  owner: string;
  project_id?: string;
  reverse?: number;
  service?: string;
  sort_key?: string;
  status?: string[];
  // tags?: string[];
  users?: string[];
  verbose?: 0 | 1 | 2;
  zone: string;
}

export interface APIRequest<T extends RequestParams> {
  headers?: AxiosRequestHeaders;
  method?: Method;
  params: T;
  payload?: Record<string, unknown>;
  url?: string;
}
