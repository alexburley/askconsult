import Image from "@components/library/image";
import { BaseProps } from "frontend/types/types";
import styled from "styled-components";

import Headshot from "../../../../../public/images/headshot-example.jpg";

const Avatar = styled.div`
  min-width: 200px;
  min-height: 200px;
  width: 200px;
  height: 200px;
  margin: ${(p) => p.theme.space.medium} 0px;
  img {
    border-radius: 8px;
  }
`;

interface ConsultantAvatarProps extends BaseProps {
  avatarURL: string;
}
const ConsultantAvatar = ({
  className,
  id,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  avatarURL,
}: ConsultantAvatarProps) => {
  return (
    <Avatar className={className} id={id}>
      <Image src={Headshot} alt="headshot"></Image>
    </Avatar>
  );
};

export default ConsultantAvatar;
