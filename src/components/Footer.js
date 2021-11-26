import styled from "styled-components";
import Logo from "../assets/1hiveFullLogo.svg";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem 2rem;
  background: ${(p) => p.theme.colors.greenLightest + `40`};
  width: 100%;
  p {
    margin: 0;
    padding-right: 0.5rem;
  }
  img {
    height: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>Built by</p> <img src={Logo} alt="1hive-full-logo" />
    </FooterContainer>
  );
}
