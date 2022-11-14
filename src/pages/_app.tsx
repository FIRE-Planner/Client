import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import AppLayout from '@layouts/AppLayout';
import { globalStyle } from '@styles/globalStyles';

// eslint-disable-next-line react/function-component-definition
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </AppLayout>
  );
}
