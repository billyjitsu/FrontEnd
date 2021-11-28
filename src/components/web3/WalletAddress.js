import { ethers } from "ethers";
import styled from "styled-components";
import { useState, useEffect } from "react";
import useStore from "../../store";
import { Button } from "../Button";
import { HelperText } from "../HelperText";

const Address = styled.p`
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const WalletAddress = () => {
  const [error, setError] = useState();
  const [account, setAccount] = useState();
  const [shortenedAddress, setShortenedAddress] = useState();
  const [wrongNetwork, setWrongNetwork] = useState(false);
  const networkChainId = 4; //currently set to rinkeby
  let address = useStore((state) => state?.walletAddress);
  const addAddress = useStore((state) => state.addWalletAddress);

  //on page load, check if user has metamask, and check if there is wallet address saved
  useEffect(() => {}, []);

  //connects user to metamask to add address
  const connectWalletHandler = async () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
    } else {
      setError(true);
    }
  };

  const accountChangeHandler = (newAccount) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setAccount(newAccount);
    console.log(newAccount, "accounch");
    addAddress(newAccount);
    shortenAddress(newAccount);
    const network = provider.getNetwork();
    const chainId = network.chainId;
    if (chainId !== networkChainId) {
      setWrongNetwork(true);
    }
  };

  //connects to the right network
  const connectToXDai = async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${networkChainId}` }],
    });
    setWrongNetwork(false);
  };

  const shortenAddress = (newAccount) => {
    let startChunk = newAccount.substring(0, 5);
    let endChunk = newAccount.substring(newAccount.length - 5);
    setShortenedAddress(`${startChunk}...${endChunk}`);
  };

  return (
    <>
      {!account && (
        <Button onClick={connectWalletHandler}>Connect Wallet</Button>
      )}
      {wrongNetwork && <Button onClick={connectToXDai}>Connect to xDai</Button>}
      {!wrongNetwork && <Address>{shortenedAddress}</Address>}
    </>
  );
};

export default WalletAddress;
