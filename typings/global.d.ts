import type { RootState } from '../src/store';

declare global {
  export type State = RootState;

  declare const ENV: string;
}
