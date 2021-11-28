import { useEffect, useState } from "react";
import { ethers } from "ethers";
import styled from "styled-components";
import { Button } from "../Button";
import NFT from "../../utils/NFT.json";
import useStore from "../../store";
import { contractAddress } from "../../data/contract";

const Notification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colors.creamLightest + 40};
  border-radius: 16px;
  padding: 1rem;
  p {
    margin: 0 0 1rem 0;
  }
`;

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
  const [loading, setLoading] = useState(false);
  const [nftMinted, setNFTMinted] = useState(false);
  const [txn, setTxn] = useState();

  const handleChange = (e) => {
    setNumToMint(e.target.value);
    addNFTNum(e.target.value);
  };

  useEffect(() => {
    const setupEventListener = async () => {
      try {
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const connectedContract = new ethers.Contract(
            contractAddress,
            NFT.abi,
            signer
          );

          // This will essentially "capture" our event when our contract throws it.
          connectedContract.on("MintedNFT", (from) => {
            setNFTMinted(true);
          });
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    setupEventListener();
  }, []);

  const mintTokens = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          contractAddress,
          NFT.abi,
          signer
        );

        console.log("Going to pop wallet now to pay gas...");
        let payment = String(numToMint * 0.1);
        let totalGas = String(numToMint * 3000000);
        let nftTxn = await connectedContract.mint(numToMint, {
          gasLimit: totalGas,
          value: ethers.utils.parseEther(payment),
        });
        setLoading(true);
        console.log("Mining...please wait.");
        await nftTxn.wait();
        setLoading(false);
        setTxn(nftTxn.hash);
        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {nftMinted && (
        <Notification>
          <p>Your NFTs have been minted!</p>
          <a
            href={`https://rinkeby.etherscan.io/tx/${txn}`}
            rel={"noreferrer"}
            target="_blank"
          >
            <Button>View transaction</Button>
          </a>
        </Notification>
      )}
      {loading && (
        <Notification>
          <p>
            Your tokens are minting. Please wait a few minutes. This message
            will be replaced with your transaction once minted.
          </p>
        </Notification>
      )}
      {!nftMinted && (
        <Mint>
          <MintNumInput
            placeholder="# of NFTs"
            min="1"
            max="10"
            name="mintTotal"
            onChange={handleChange}
            value={numToMint}
          ></MintNumInput>
          <MintButton onClick={mintTokens}>Mint NFTs</MintButton>
        </Mint>
      )}
    </>
  );
};

export default Minter;
