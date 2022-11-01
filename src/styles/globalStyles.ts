import { css } from '@emotion/react';

export const globalStyle = () => css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html {
    width: 540px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid red;
  }

  button,
  input,
  select {
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }
`;
