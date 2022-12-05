import { Form as FormikForm } from "formik";
import styled from "styled-components";

const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space.medium};
`;

export default Form;
