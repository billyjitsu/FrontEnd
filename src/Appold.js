import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import NFT from "./utils/NFT.json";
import LoadingIndicator from "./components/LoadingIndicator";
import Layout from "./components/Layout";
import Nav from "./components/Nav";

// Constants
const OPENSEA_LINK = "https://testnets.opensea.io/collection/notthenfbeez-v3";
const TOTAL_MINT_COUNT = 300;
//const CONTRACT_ADDRESS = "0xf3696bB97D5105c5a0Dc03cA0A01B6203502fd7b";
const CONTRACT_ADDRESS = "0x01A357e99F60C362B041e4D406C8B08982220FAf";
const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [chainId, setChainId] = useState(
    window.ethereum.request({ method: "eth_chainId" })
  );
  const [mintTotal, setMintTotal] = useState(0);
  const [toMint, setToMint] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      <Nav />
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">The NFBeez</p>
          <p className="sub-text">
            A Collection of Bees. Each one unique. Mint yours now.
          </p>
          <p className="sub-text">
            Total Mints: {mintTotal}/{TOTAL_MINT_COUNT}
          </p>
          {currentAccount === ""
            ? renderNotConnectedContainer()
            : renderMintUI()}
        </div>

        {chainId === "0x4" ? null : (
          <div className="sub-text">
            <div>You are not connected to Rinkeby network.</div>
            <div>
              {" "}
              Please change the network you are connected to in your wallet.{" "}
            </div>
            <div>
              <button
                className="cta-button connect-wallet-button"
                onClick={changeNetwork}
              >
                Change to Rinkeby
              </button>
            </div>
          </div>
        )}

        <div>
          <img
            src="https://ipfs.io/ipfs/QmVumjMciDac8S4AeAzSSMLmsCWjuAYSZ2ePUEbEsjgMwd/1.gif"
            alt="IPFS"
            width="200"
          />
        </div>

        <div>
          <p className="sub-text">
            <a
              href={OPENSEA_LINK}
              target="_blank"
              rel="noreferrer"
            >{`🌊 View Collection on OpenSea`}</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default App;
