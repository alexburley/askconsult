import AskDomainFactory from "../ask-domain-factory";
import { AskDomainMock } from "./ask-domain-mock";

export const useConsultantsDomainMock = () => {
  const consultantsDomain = {
    mock: null,
  };
  beforeEach(() => {
    const mock = AskDomainMock();
    jest.spyOn(AskDomainFactory, "instance").mockReturnValue(mock);
    consultantsDomain.mock = mock;
  });
  return consultantsDomain;
};
