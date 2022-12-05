import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class AskConsultDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
    } finally {
      sheet.seal();
    }
  }
}
