import { css } from '@emotion/react';
import Link from 'next/link';

const container = css`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <div css={container}>
      <h1>Home</h1>
      <Link href="/signin">Go to Login</Link>
      <Link href="/signup">Go to Signup</Link>
    </div>
  );
};

export default Home;
