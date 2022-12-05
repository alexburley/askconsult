import MePage from "@components/pages/user/me";
import AuthHelper from "frontend/helpers/auth";

export default MePage;
export const getServerSideProps = AuthHelper.withPageAuthRequired();
