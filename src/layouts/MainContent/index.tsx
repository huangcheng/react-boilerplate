import type { ReactNode, ReactElement } from 'react';

type MainContentProps = {
  readonly children: ReactNode;
};

export default function MainContent({ children }: MainContentProps): ReactElement<MainContentProps> {
  return (
    <div id="main-container">
      <header />
      <main>{children}</main>
    </div>
  );
}
