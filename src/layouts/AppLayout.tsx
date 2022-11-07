import { css } from '@emotion/react';
import { ReactNode } from 'react';

const layout = css`
  width: 540px;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  background: white;
`;

interface IProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return <div css={layout}>{children}</div>;
};

export default AppLayout;
