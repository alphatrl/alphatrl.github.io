/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const { renderPage } = ctx;

    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        {
          <Head>
            {/*@ts-ignore*/}
            {this.props.styleTags}

            <link
              href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swa["
              rel="preload"
              as="style"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swa["
              rel="stylesheet"
            />
          </Head>
        }
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
