import React from "react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

import { SolanaWalletAdpaterWallet } from "../../wallets";

const color = "#5520f4";

const wallet = new SolanaWalletAdpaterWallet({
  // @ts-ignore There is an incorrect type issue on Parcel build
  adapter: new PhantomWalletAdapter(),
  color,
});

export default wallet;
