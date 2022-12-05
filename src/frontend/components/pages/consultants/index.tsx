import ConsultantItem from "@components/contextual/consultant-item";
import PageWrapper from "@components/contextual/page-wrapper";
import Link from "@components/library/link";
import TextField from "@components/library/text-field";
import TRPCClient from "@helpers/api/trpc";
import { BP_PHONE_INT, BP_TABLET } from "@styles/themes";
import { useSiteStore } from "frontend/helpers/site-store";
import WindowHelper from "frontend/helpers/window";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import Autocomplete from "../../library/autocomplete";

const IndexHeader = styled.div`
  padding: 64px 16px 8px 16px;
  width: 60%;
  margin: 0 auto;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media (max-width: ${BP_TABLET}) {
    flex-direction: column-reverse;
    align-items: center;
    margin-left: auto;
    gap: 32px;
  }
`;

const Search = styled(Autocomplete)`
  flex: 2 1 auto;
  min-width: 240px;
  max-width: 320px;
  margin-left: auto;

  @media (max-width: ${BP_TABLET}) {
    margin-left: unset;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const HeaderContainer = styled.span`
  padding: 0px 8px;
`;

const FiltersWrapper = styled.div`
  display: flex;
`;

const FiltersContainer = styled.div`
  display: flex;
`;

const ConsultantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
`;

const ConsultantsIndexPage = () => {
  const { search, setSearch } = useSiteStore();
  const { width } = WindowHelper.useWindowSize();
  const [consultants, setConsultants] = useState([]);
  const c = TRPCClient.consultants.listConsultants.useQuery();
  useEffect(() => {
    c.data && setConsultants(c.data.result);
  }, [c.data]);
  const occupations = useMemo(() => {
    return consultants.map(({ occupation }) => occupation).sort();
  }, [consultants]);
  return (
    <PageWrapper>
      <IndexHeader>
        <FiltersWrapper>
          {!(width < BP_PHONE_INT) && (
            <HeaderWrapper>
              <HeaderContainer>
                <b>Showing:</b>
              </HeaderContainer>
            </HeaderWrapper>
          )}
          <FiltersContainer>
            <HeaderWrapper>
              <Link href="#">
                <HeaderContainer>Featured</HeaderContainer>
              </Link>
            </HeaderWrapper>
            <HeaderWrapper>
              <Link href="#">
                <HeaderContainer>Popular</HeaderContainer>
              </Link>
            </HeaderWrapper>
            <HeaderWrapper>
              <Link href="#">
                <HeaderContainer>New</HeaderContainer>
              </Link>
            </HeaderWrapper>
          </FiltersContainer>
        </FiltersWrapper>
        <Search
          onChange={(_event, value: string) => {
            setSearch(search);
            if (occupations.includes(value)) {
              setSearch(value);
            } else if (!value) {
              setSearch(null);
            }
          }}
          options={occupations}
          value={search}
          renderInput={(params) => <TextField {...params} label="Occupation" />}
          freeSolo
        />
      </IndexHeader>
      <ConsultantsWrapper>
        {c.data &&
          c.data.result
            .filter(({ occupation }) => !search || occupation === search)
            .map((c) => <ConsultantItem key={c.id} consultant={c} />)}
      </ConsultantsWrapper>
    </PageWrapper>
  );
};

export default ConsultantsIndexPage;
