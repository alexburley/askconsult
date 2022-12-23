import Form from "@components/library/forms/form";
import FormField from "@components/library/forms/form-field";
import { Button, FormLabel } from "@mui/material";
import { Formik } from "formik";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 36px;
  width: 60%;
  margin: 0 auto;
`;

const FormSectionHeader = styled.h3`
  padding: 16px 0px;
`;

const StyledSubmitButton = styled(Button)`
  margin-top: ${(p) => p.theme.space.medium};
  color: white;
  && {
    font-weight: bold;
    background-color: ${(p) => p.theme.colors.primary.light};
    min-width: 80px;
    max-width: 160px;
    margin: 8px auto;

    &:hover {
      background-color: ${(p) => p.theme.colors.primary.dark};
    }
  }
`;

const PayPage = () => {
  const onSubmit = () => {
    console.log("SUBMIT");
  };
  return (
    <FormContainer>
      <Formik
        initialValues={{
          cardholderName: "MR J SMITH",
          cardNumber: "5555 5555 5555 4444",
          expiryDate: "12/24",
          securityCode: "567",
          billingAddressLine1: "Apartment 2",
          billingAddressLine2: "Flat 10, Raspberry Road",
          billingPostcode: "A17 2PB",
          billingCity: "Walsingham",
          billingRegion: "County Durham",
          billingCountry: "United Kingdom",
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <FormSectionHeader>Payment</FormSectionHeader>
          <FormLabel htmlFor="cardholderName">Cardholder Name</FormLabel>
          <FormField id="cardholderName" name="cardholderName" />
          <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
          <FormField id="cardNumber" name="cardNumber" />
          <FormLabel htmlFor="expiryDate">Expiry</FormLabel>
          <FormField id="expiryDate" name="expiryDate" />
          <FormLabel htmlFor="securityCode">CVC</FormLabel>
          <FormField id="securityCode" name="securityCode" />
          <FormSectionHeader>Billing Address</FormSectionHeader>
          <FormLabel htmlFor="billingAddressLine1">Address Line 1</FormLabel>
          <FormField id="billingAddressLine1" name="billingAddressLine1" />
          <FormLabel htmlFor="billingAddressLine2">Address Line 2</FormLabel>
          <FormField id="billingAddressLine2" name="billingAddressLine2" />
          <FormLabel htmlFor="billingPostcode">Postcode</FormLabel>
          <FormField id="billingPostcode" name="billingPostcode" />
          <FormLabel htmlFor="billingCity">City</FormLabel>
          <FormField id="billingCity" name="billingCity" />
          <FormLabel htmlFor="billingRegion">Region</FormLabel>
          <FormField id="billingRegion" name="billingRegion" />
          <FormLabel htmlFor="billingCountry">Country</FormLabel>
          <FormField id="billingCountry" name="billingCountry" />
          <StyledSubmitButton>Submit</StyledSubmitButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default PayPage;
