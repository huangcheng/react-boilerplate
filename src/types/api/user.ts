import type { APIResponse, RequestParams } from '../';

export type User = {
  email: string;
  id: number;
  name: string;
  phone: string;
};

export interface FetchUserResponse extends APIResponse {
  user: User;
}

export interface FetchUserParams extends RequestParams {
  id: number;
}
