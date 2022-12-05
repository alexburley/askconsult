import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

import type { AppRouter } from "../../backend/adapters/inbound/trpc";

const TRPC = ({ TRPC_BASE_URL }: { TRPC_BASE_URL: string }) =>
  createTRPCNext<AppRouter>({
    config({ ctx }) {
      return {
        links: [
          httpBatchLink({
            // The server needs to know your app's full url
            url: `${TRPC_BASE_URL}/api/trpc`,
            /**
             * Set custom request headers on every request from tRPC
             * @link https://trpc.io/docs/v10/header
             */
            headers() {
              if (ctx?.req) {
                return {
                  ...ctx.req.headers,
                  "X-SSR-Request": "1",
                };
              }
              return {};
            },
          }),
        ],
        /**
         * @link https://tanstack.com/query/v4/docs/reference/QueryClient
         **/
        // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
      };
    },
    ssr: true,
  });

export default TRPC;
