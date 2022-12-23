import PageWrapper from "@components/contextual/page-wrapper";

export type HomeProps = Record<string, unknown>;

const HomePage = (props_: HomeProps) => {
  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    </PageWrapper>
  );
};

export default HomePage;
