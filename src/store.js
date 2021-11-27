import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  tokenIds: [""],
  addTokenOwned: (token) =>
    set((state) => ({ tokenIds: [...state.tokenIds, token] })),
  walletAddress: "",
  addWalletAddress: (address) => set((state) => ({ walletAddress: address })),
});

const useStore = create(devtools(store));

export default useStore;
