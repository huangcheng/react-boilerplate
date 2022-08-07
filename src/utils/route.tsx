import { lazy, Suspense } from 'react';

import type { ComponentType } from 'react';

type ESModule<T> = T & { default: T };

export const load = (page: string): JSX.Element => {
  const Component = lazy(
    (): Promise<ESModule<ComponentType>> => import(`../pages/${page}`) as unknown as Promise<ESModule<ComponentType>>,
  );

  return (
    <Suspense fallback={<div />}>
      <Component />
    </Suspense>
  );
};
