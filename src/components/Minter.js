import styled from "styled-components";
import { Button } from "./Button";

const Mint = styled.div`
  background: ${(p) => p.theme.colors.rainbow};
  border-radius: 4rem;
  padding: 0.5rem;
`;

const MintNumInput = styled.input.attrs((props) => ({
  type: "number",
}))`
  border-radius: 50px 0px 0px 50px;
  outline: none;
  padding: 0.75rem 1rem;
  border: solid 2px ${(p) => p.theme.colors.salmonLight};
  placeholder {
    font-family: "Ubuntu", sans-serif;
  }
  :hover,
  :active,
  :focus {
    outline: none;
    border: solid 2px ${(p) => p.theme.colors.salmonBase};
  }
  margin-right: 1rem;
`;

const MintButton = styled(Button)`
  border-radius: 0px 50px 50px 0px;
  background-color: ${(p) => p.theme.colors.greenBase};
  :hover {
    background-color: ${(p) => p.theme.colors.greenLight};
  }
`;

const Minter = () => {
  return (
    <Mint>
      <MintNumInput placeholder="# of NFTs"></MintNumInput>
      <MintButton>Mint NFTs</MintButton>
    </Mint>
  );
};

export default Minter;
