import styled, { css } from "styled-components";
import Logo from "../assets/1hiveFullLogo.svg";
import { Button } from "./Button";
import { navLinks } from "../data/navLinks";

export const SocialLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
  list-style: none;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    display: none;
    padding-left: 1rem;
  }
  li {
    text-decoration: none;
    padding-right: 0.5rem;
  }
  a {
    color: ${(p) => p.theme.colors.greyDark};
    :hover {
      color: ${(p) => p.theme.colors.greyMedium};
    }
  }

  img {
    height: 2rem;
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      height: 1rem;
      margin-left: 1rem;
    }
  }
  ${(props) =>
    props.footer &&
    css`
      padding: 0.5rem 1rem;
    `}

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => p.theme.colors.creamLightest + `60`};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0.5rem 0;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    justify-content: space-between;
  }
`;

const NavButton = styled(Button)`
  margin-right: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-right: 1rem;
  }
`;

export default function Nav() {
  return (
    <header>
      <NavContainer>
        <SocialLinks>
          {navLinks.length !== 0 &&
            navLinks.map((link) => (
              <li>
                <a href={link.url} rel={"noreferrer"} target="_blank">
                  {link.siteName}
                </a>
              </li>
            ))}
        </SocialLinks>
        <img src={Logo} alt="1hive-full-logo" />
        <NavButton>Connect Wallet</NavButton>
      </NavContainer>
    </header>
  );
}
