import TRPCClient from "frontend/helpers/api/trpc";
import AuthHelper from "frontend/helpers/auth";
import { SiteStoreProvider } from "frontend/helpers/site-store";
import { AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "styled-components";

import ResetStyle from "../frontend/styles/reset-style";
import { GlobalTheme } from "../frontend/styles/themes";

// eslint-disable-next-line react/prop-types
const AskConsultNextApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={GlobalTheme}>
        <ResetStyle />
        <SiteStoreProvider>
          <AuthHelper.UserProvider>
            <Component {...pageProps} />
          </AuthHelper.UserProvider>
        </SiteStoreProvider>
      </ThemeProvider>
    </>
  );
};

export default TRPCClient.withTRPC(AskConsultNextApp);
