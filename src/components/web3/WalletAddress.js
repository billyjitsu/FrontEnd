import { ethers } from "ethers";
import { useState, useEffect } from "react";
import useStore from "../../store";
import { Button } from "../Button";

const WalletAddress = () => {
  const [account, setAccount] = useState("");
  const [wrongNetwork, setWrongNetwork] = useState(false);
  const networkChainId = 4; //currently set to rinkeby
  let address = useStore((state) => state?.walletAddress);
  const addAddress = useStore((state) => state.addWalletAddress);

  //on page load, check if user has metamask, and check if there is wallet address saved
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
  }, [account]);
  //checks for wallet address saved
  const checkForWalletAddress = async () => {
    if (address === "") {
      setAccount(null);
      console.log("address", account);
    }
  };
  //connects user to metamask to add address
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
    setAccount(address[0]);
    addAddress(address[0]);

    const network = await provider.getNetwork();
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

  //scrolls user to the area where mint input is
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {account === "" ? (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      ) : wrongNetwork ? (
        <Button onClick={connectToXDai}>Connect to xDai</Button>
      ) : (
        <Button onClick={scrollToTop}>Disconnect Wallet</Button>
      )}
    </>
  );
};

export default WalletAddress;
