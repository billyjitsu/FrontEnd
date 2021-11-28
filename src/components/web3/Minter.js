import { useEffect, useState } from "react";
import { ethers } from "ethers";
import styled from "styled-components";
import { Button } from "../Button";
import NFT from "../../utils/NFT.json";
import useStore from "../../store";
import { contractAddress } from "../../data/contract";

const Mint = styled.form`
  background: ${(p) => p.theme.colors.rainbow};
  border-radius: 50px;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 0;

  /* @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: 100%;
  } */
`;

const MintNumInput = styled.input.attrs((props) => ({
  type: "number",
}))`
  max-width: 7rem;
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
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 0.5rem 0.75rem;
    font-weight: 400;
    white-space: nowrap;
    margin-right: 0.5rem;
    width: 75px;
  }
`;

const MintButton = styled(Button)`
  border-radius: 0px 50px 50px 0px;
  padding: 0.75rem 1.5rem;
  background-color: ${(p) => p.theme.colors.greenBase};
  :hover {
    background-color: ${(p) => p.theme.colors.greenLight};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 0.6rem 0.5rem;
    font-weight: 400;
    white-space: nowrap;
  }
`;

const Minter = ({ mintTotal }) => {
  const addNFTNum = useStore((state) => state.addNFTsToMint);
  const [numToMint, setNumToMint] = useState(1);

  const handleChange = (e) => {
    setNumToMint(e.target.value);
    addNFTNum(e.target.value);
  };

  return (
    <Mint>
      <MintNumInput
        placeholder="# of NFTs"
        min="1"
        max="10"
        name="mintTotal"
        onChange={handleChange}
        value={numToMint}
      ></MintNumInput>
      <MintButton>Mint NFTs</MintButton>
    </Mint>
  );
};

export default Minter;
