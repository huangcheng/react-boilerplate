import type { ReducersMapObject } from '@reduxjs/toolkit';

import globalReducer from './global';

import type { GlobalState } from './global';

type State = {
  global: GlobalState;
};

const reducer: ReducersMapObject<State> = {
  global: globalReducer,
};

export default reducer;
