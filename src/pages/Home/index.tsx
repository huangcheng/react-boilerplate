import { css } from '@emotion/react';

export default function Home(): JSX.Element {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <h1>Home</h1>
    </div>
  );
}
