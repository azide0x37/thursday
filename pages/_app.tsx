import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Thursday Gaming</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/maskable_icon.png" />
        <meta name="theme-color" content="#317EFB" />
        <meta name="title" content="Thursday Gaming" />
        <meta name="description" content="A batteries included game night scheduler.
Organize and schedule your gaming sessions on your schedule. Thursday includes every feature you need for game nights to go off without a hitch!"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thursday.games/" />
        <meta property="og:title" content="Thursday Gaming" />
        <meta property="og:description" content="A batteries included game night scheduler.
Organize and schedule your gaming sessions on your schedule. Thursday includes every feature you need for game nights to go off without a hitch!"/>
        <meta property="og:image" content="/img-20200109-134204-1578701390405.jpeg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.thursday.games/" />
        <meta property="twitter:title" content="Thursday Gaming" />
        <meta property="twitter:description" content="A batteries included game night scheduler.
Organize and schedule your gaming sessions on your schedule. Thursday includes every feature you need for game nights to go off without a hitch!"/>
        <meta property="twitter:image" content="/img-20200109-134204-1578701390405.jpeg" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});