import { ethers } from "ethers";
import { useState, useEffect } from "react";
import useStore from "../../store";
import { Button } from "../Button";

const WalletAddress = () => {
  const [account, setAccount] = useState("");
  const [wrongNetwork, setWrongNetwork] = useState(false);
  const networkChainId = 4;
  let address = useStore((state) => state?.walletAddress);
  const addAddress = useStore((state) => state.addWalletAddress);

  useEffect(() => {
    const checkForEthereum = () => {
      const { ethereum } = window;
      if (!ethereum) {
        alert(
          "Make sure you have metamask! Download at: https://metamask.io/download.html"
        );
        return;
      }
    };

    checkForEthereum();
    checkForWalletAddress();
  }, []);

  const checkForWalletAddress = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(address, "fromz");
    if (address === "") {
      let address = await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      console.log("address", address);
      setAccount(address[0]);
      addAddress(address[0]);

      const network = await provider.getNetwork();
      const chainId = network.chainId;
      if (chainId !== networkChainId) {
        setWrongNetwork(true);
      }
    }
  };

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let address = await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    setAccount(address);
    const network = await provider.getNetwork();
    const chainId = network.chainId;
    if (chainId !== networkChainId) {
      setWrongNetwork(true);
    }
  };

  const connectToXDai = async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${networkChainId}` }],
    });
    setWrongNetwork(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!account ? (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      ) : wrongNetwork ? (
        <Button onClick={connectToXDai}>Connect to xDai</Button>
      ) : (
        <Button onClick={scrollToTop}>Mint NFTs</Button>
      )}
    </>
  );
};

export default WalletAddress;
