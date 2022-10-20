import React from "react";
import { createClient, configureChains, allChains } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";

import MetaMask, { isMetaMask } from "./MetaMask";
import Injected from "./Injected";
import WalletConnect from "./WalletConnect";
import Rainbow from "./Rainbow";
import Coinbase from "./Coinbase";
import Trust from "./Trust";

const { provider } = configureChains(allChains, [publicProvider()]);

const needsInjectedWallet =
  typeof window !== "undefined" &&
  window.ethereum &&
  !isMetaMask(window.ethereum) &&
  !window.ethereum.isCoinbaseWallet;
// &&
// !window.ethereum.isBraveWallet;
// TODO: Consider adding brave native wallet support (for icon)

export const wallets = needsInjectedWallet
  ? [Injected, MetaMask, Rainbow, Coinbase, Trust, WalletConnect]
  : [MetaMask, Rainbow, Coinbase, Trust, WalletConnect];

// this is never referenced but is needed!
export const wagmiClient = createClient({
  connectors: wallets.map((wallet) => wallet.connector),
  provider,
});

export default wallets;
