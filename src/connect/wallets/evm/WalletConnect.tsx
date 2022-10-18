import React from "react";
import { tw } from "twind";
import { allChains } from "@wagmi/core";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";

import { WagmiWallet, WALLET_ICON_SIZE, WalletIconProps } from "../../wallets";
import { isIOS } from "../../utils/device";

const color = "#3B99FC";

const Icon = ({
  height = WALLET_ICON_SIZE,
  width = WALLET_ICON_SIZE,
}: WalletIconProps) => (
  <svg
    className={tw`rounded-lg`}
    height={height}
    width={width}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect height={28} width={28} fill={color} />
    <path
      d="M8.38969 10.3739C11.4882 7.27538 16.5118 7.27538 19.6103 10.3739L19.9832 10.7468C20.1382 10.9017 20.1382 11.1529 19.9832 11.3078L18.7076 12.5835C18.6301 12.6609 18.5045 12.6609 18.4271 12.5835L17.9139 12.0703C15.7523 9.9087 12.2477 9.9087 10.0861 12.0703L9.53655 12.6198C9.45909 12.6973 9.3335 12.6973 9.25604 12.6198L7.98039 11.3442C7.82547 11.1893 7.82547 10.9381 7.98039 10.7832L8.38969 10.3739ZM22.2485 13.012L23.3838 14.1474C23.5387 14.3023 23.5387 14.5535 23.3838 14.7084L18.2645 19.8277C18.1096 19.9827 17.8584 19.9827 17.7035 19.8277C17.7035 19.8277 17.7035 19.8277 17.7035 19.8277L14.0702 16.1944C14.0314 16.1557 13.9686 16.1557 13.9299 16.1944C13.9299 16.1944 13.9299 16.1944 13.9299 16.1944L10.2966 19.8277C10.1417 19.9827 9.89053 19.9827 9.73561 19.8278C9.7356 19.8278 9.7356 19.8277 9.7356 19.8277L4.61619 14.7083C4.46127 14.5534 4.46127 14.3022 4.61619 14.1473L5.75152 13.012C5.90645 12.857 6.15763 12.857 6.31255 13.012L9.94595 16.6454C9.98468 16.6841 10.0475 16.6841 10.0862 16.6454C10.0862 16.6454 10.0862 16.6454 10.0862 16.6454L13.7194 13.012C13.8743 12.857 14.1255 12.857 14.2805 13.012C14.2805 13.012 14.2805 13.012 14.2805 13.012L17.9139 16.6454C17.9526 16.6841 18.0154 16.6841 18.0541 16.6454L21.6874 13.012C21.8424 12.8571 22.0936 12.8571 22.2485 13.012Z"
      fill="white"
    />
  </svg>
);

const iOS = isIOS();

const wallet = new WagmiWallet({
  connector: new WalletConnectConnector({
    chains: allChains,
    options: {
      // on iOS, enable built-in WalletConnect selection modal
      qrcode: iOS,
    },
  }),
  color,
  Icon,
  // on iOS, disable custom QR code
  ...(iOS
    ? {}
    : {
        getQRCodeURI: async (provider: any) => {
          return provider.connector.uri;
        },
      }),
});

export default wallet;
