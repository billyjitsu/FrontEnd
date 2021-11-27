import styled from "styled-components";
import Logo from "../assets/1hiveFullLogo.svg";
import { navLinks } from "../data/navLinks";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${(p) => p.theme.colors.greenLightest + `40`};
  p {
    margin: 0;
    padding-right: 0.5rem;
  }
  img {
    height: 1.5rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    min-height: 1rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  li {
    margin-right: 0.5rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    li {
      margin-right: 0.2rem;
    }
  }
`;

const DisappearOnMobile = styled(LinkContainer)`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <DisappearOnMobile>
        {navLinks.length !== 0 &&
          navLinks.map((link) => (
            <li key={navLinks.siteName}>
              <a
                href={link.url}
                rel={"noreferrer"}
                target="_blank"
                key={navLinks.siteName}
              >
                {link.siteName}
              </a>
            </li>
          ))}
      </DisappearOnMobile>
      <LinkContainer>
        <p>Built by</p>{" "}
        <a href="https://1Hive.org" rel={"noreferrer"} target="_blank">
          <img src={Logo} alt="1hive-full-logo" />
        </a>
      </LinkContainer>
    </FooterContainer>
  );
}
