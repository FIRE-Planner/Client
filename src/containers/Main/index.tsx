import { css } from '@emotion/react';
import Link from 'next/link';

import Date from './Date';

import Icon from '@components/Icon';

const container = css`
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100vh;

  nav {
    margin: 0 8px;
  }
`;

const icons = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    padding: 6px;
  }
`;

const MainContainer = () => {
  return (
    <div css={container}>
      <header>
        <nav>
          <ul css={icons}>
            <li>
              <Icon iconName="search" size="medium" />
            </li>
            <h1>가계부</h1>
            <li>
              {/* <Icon iconName="star" size="medium" /> */}
              <Link href="/signin">
                <Icon iconName="logout" size="medium" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <main>
        <Date />
      </main> */}
      {/* <footer
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 'auto',
        }}
      >
        <Link href="/signin">Go to Login</Link>
        <Link href="/signup">Go to Signup</Link>
      </footer> */}
    </div>
  );
};

export default MainContainer;
