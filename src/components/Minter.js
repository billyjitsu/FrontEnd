import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Mint = styled.form`
  background: ${(p) => p.theme.colors.rainbow};
  border-radius: 50px;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;

const MintNumInput = styled.input.attrs((props) => ({
  type: "number",
}))`
  max-width: 6rem;
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
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0.5rem 0.75rem;
    font-weight: 400;
    white-space: nowrap;
    margin-right: 0.5rem;
  }
`;

const MintButton = styled(Button)`
  border-radius: 0px 50px 50px 0px;
  padding: 0.75rem 1.5rem;
  background-color: ${(p) => p.theme.colors.greenBase};
  :hover {
    background-color: ${(p) => p.theme.colors.greenLight};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0.7rem 1rem;
    font-weight: 400;
    white-space: nowrap;
  }
`;

const Minter = () => {
  const [mintTotal, setMintTotal] = useState(1);

  const handleChange = (e) => {
    setMintTotal(e.target.value);
  };

  return (
    <Mint>
      <MintNumInput
        placeholder="# of NFTs"
        min="1"
        name="mintTotal"
        onChange={handleChange}
      ></MintNumInput>
      <MintButton>Mint NFTs</MintButton>
    </Mint>
  );
};

export default Minter;
