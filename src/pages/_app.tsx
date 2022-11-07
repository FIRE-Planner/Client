import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { globalStyle } from '@styles/globalStyles';
import AppLayout from '@layouts/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </AppLayout>
  );
}
