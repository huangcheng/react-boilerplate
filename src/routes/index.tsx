import type { RouteObject } from 'react-router';

import { load } from 'utils/route';

const routes: RouteObject[] = [
  {
    element: load('Home'),
    path: '/',
  },
];

export default routes;
