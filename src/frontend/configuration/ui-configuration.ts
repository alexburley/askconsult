const configuration = {
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  TRPC_BASE_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
};
export type UITestConfiguration = typeof configuration;
export default configuration;
