import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  tokenIds: [""],
  addTokenOwned: (token) =>
    set((state) => ({ tokenIds: [...state.tokenIds, token] })),
  walletAddress: "",
  addWalletAddress: (address) => set((state) => ({ walletAddress: address })),
  nftsToMint: 1,
  addNFTsToMint: (num) => set((state) => ({ nftsToMint: num })),
});

store = devtools(store);
store = persist(store);

const useStore = create(store);

export default useStore;
