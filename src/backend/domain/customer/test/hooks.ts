import CustomerDomainFactory from "@domain/customer/customer-domain-factory";
import { CustomerDomainMock } from "@domain/customer/test/customer-domain-mock";

export const useCustomerDomainMock = () => {
  const customerDomain = {
    mock: null,
  };
  beforeEach(() => {
    const mock = CustomerDomainMock();
    jest.spyOn(CustomerDomainFactory, "instance").mockReturnValue(mock);
    customerDomain.mock = mock;
  });
  return customerDomain;
};
