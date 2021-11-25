import styled from "styled-components";
import Logo from "../assets/1hiveFullLogo.svg";
import { Button } from "./Button";

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  list-style: none;
  li {
    text-decoration: none;
    padding-right: 0.5rem;
  }
  a {
    color: ${(p) => p.theme.colors.greyDark};
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => p.theme.colors.greenLightest + `40`};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 0.5rem 0;
`;

const NavButton = styled(Button)`
  margin-right: 1rem;
`;

export default function Nav() {
  return (
    <header>
      <NavContainer>
        <SocialLinks>
          <li>
            <a
              href="https://twitter.com/1HiveOrg"
              rel={"noreferrer"}
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/4fm7pgB"
              rel={"noreferrer"}
              target="_blank"
            >
              Discord
            </a>
          </li>
        </SocialLinks>
        <img src={Logo} alt="1hive-full-logo" />
        <NavButton>Connect Wallet</NavButton>
      </NavContainer>
    </header>
  );
}
