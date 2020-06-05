import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';

const db = require('dotenv');

db.connect({
  API_KEY: process.env.SHOPIFY_API_KEY,
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const config = {
      apiKey: API_KEY,
      shopOrigin: Cookies.get('shopOrigin'),
      forceRedirect: true,
    };
    return (
      <>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <AppProvider i18n={translations}>
            <Component {...pageProps} />
          </AppProvider>
        </Provider>
      </>
    );
  }
}

export default MyApp;
