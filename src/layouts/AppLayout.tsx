import { css } from '@emotion/react';
import { ReactNode } from 'react';

const layout = css`
  max-width: 540px;
  margin: 0 auto;
`;

interface IProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return <div css={layout}>{children}</div>;
};

export default AppLayout;
