import React, { useEffect } from "react";
import { tw } from "twind";

import { Wallet } from "./wallets";
import InjectedWallet from "./wallets/evm/Injected";

import PoweredByPicket from "./PoweredByPicket";
import { setTheme } from "./utils/theme";

interface SuccessScreenProps {
  displayAddress: string;
  selectedWallet: Wallet;
  hasTokenOwnershipRequirements: boolean;
}

const SuccessScreen = ({
  displayAddress,
  // default to injected wallet if we end up here with no selected wallet
  selectedWallet = InjectedWallet,
  hasTokenOwnershipRequirements = false,
}: SuccessScreenProps) => {

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <main 
    className="main">
      <h1
        className={tw`mb-6 text-xl dark:text-white font-semibold break-words text-center px-7`}
      >
        Welcome {displayAddress}
      </h1>
      <div
        className={tw`flex-1 flex flex-col min-h-[350px] ${
          hasTokenOwnershipRequirements ? "space-y-4" : "space-y-0"
        } mt-0 mb-0`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // default color to Picket purple
          className={tw`pt-0 h-full w-full text-[${
            selectedWallet?.color || "#5469d4"
          }]`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <div
          className={tw`flex items-center ${
            hasTokenOwnershipRequirements
              ? "flex-row space-x-4"
              : "flex-col text-center space-y-2"
          }`}
        >
          <div className={tw`w-7 h-7`}>
            <selectedWallet.Icon />
          </div>
          <p
            className={tw`text-sm sm:text-base font-base w-45 text-gray-400 break-normal ${
              hasTokenOwnershipRequirements ? "text-left" : "text-center"
            }`}
          >
            You have successfully authenticated
            {selectedWallet && selectedWallet.name
              ? ` with ${selectedWallet.name}`
              : ""}
          </p>
        </div>
        {hasTokenOwnershipRequirements && (
          <div className={tw`flex flex-row items-center space-x-4`}>
            <div
              className={tw`w-7 h-7 bg-[${selectedWallet.color}] rounded-full flex justify-center items-center`}
            >
              <svg
                // scaled to wallet icon size (28/24 -> 1.166667)
                width="18.67"
                height="16.33"
                viewBox="0 0 16 14"
                fill="#FAFAFA"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.99961 0.997559C3.91897 0.997559 0.599609 3.24076 0.599609 5.99756V8.567C0.599609 9.47388 1.00148 10.322 1.70273 10.8932C2.79273 11.782 4.12593 12.4076 5.58593 12.7364C6.36094 12.9108 7.1703 13.0033 7.99969 13.0033C8.82908 13.0033 9.63905 12.9108 10.4135 12.7364C11.8728 12.4077 13.2059 11.7821 14.2967 10.8932C14.9979 10.322 15.3998 9.47386 15.3998 8.567V5.99756C15.3998 3.24076 12.0804 0.997559 7.99977 0.997559H7.99961ZM2.93273 10.7944C2.68023 10.6331 2.4371 10.46 2.20774 10.2725C1.69462 9.85436 1.39961 9.23249 1.39961 8.56689V8.25439C1.79023 8.77377 2.31086 9.24127 2.93273 9.63689V10.7944ZM5.26649 11.8319C4.73023 11.6806 4.21711 11.4844 3.73337 11.2462V10.0794C4.20649 10.3062 4.72087 10.4956 5.26649 10.6431V11.8319ZM7.59961 12.1944C7.07649 12.1744 6.56398 12.115 6.06649 12.02V10.8231C6.55961 10.9131 7.07212 10.9706 7.59961 10.99V12.1944ZM9.93273 12.02C9.43523 12.1156 8.92211 12.175 8.39961 12.1944V10.99C8.92711 10.9712 9.44023 10.9137 9.93273 10.8231V12.02ZM14.5996 8.56687C14.5996 9.2325 14.3046 9.85438 13.7915 10.2725C13.5621 10.46 13.319 10.6325 13.0665 10.7943V10.5975C13.0665 10.3768 12.8871 10.1975 12.6665 10.1975C12.4459 10.1975 12.2665 10.3768 12.2665 10.5975V11.2462C11.7827 11.485 11.269 11.6806 10.7334 11.8318V10.6425C12.4108 10.19 13.7871 9.33497 14.6003 8.25431L14.5996 8.56687ZM10.2652 9.9425C10.2558 9.94438 10.2465 9.94625 10.2371 9.94875C9.53833 10.1094 8.78459 10.1975 7.99965 10.1975C7.2147 10.1975 6.46152 10.1094 5.7622 9.94875C5.75283 9.94625 5.74345 9.94438 5.73408 9.9425C3.2072 9.35313 1.39968 7.80746 1.39968 5.99754C1.39968 3.68122 4.36032 1.79754 7.99968 1.79754C11.639 1.79754 14.5997 3.68122 14.5997 5.99754C14.5997 7.80746 12.7922 9.35322 10.2653 9.9425H10.2652Z" />
                <path d="M11.7779 5.23265C11.7141 5.00766 11.5154 4.83328 11.2479 4.7664L9.72097 4.38577L8.53534 3.50141C8.23971 3.28078 7.75971 3.28078 7.46409 3.50141L6.27846 4.38577L4.75096 4.7664C4.48345 4.83327 4.28532 5.00765 4.22158 5.23265C4.16533 5.43078 4.22158 5.64141 4.37221 5.7964L5.36971 6.82265L5.37846 7.61766C5.38096 7.79517 5.46346 7.95829 5.6122 8.07766C5.80784 8.23454 6.09908 8.29641 6.3722 8.23953L7.96033 7.90704C7.98471 7.90141 8.01408 7.90141 8.03971 7.90704L9.62783 8.23953C9.69534 8.25328 9.76346 8.26078 9.83096 8.26078C10.0385 8.26078 10.2403 8.19641 10.3878 8.07829C10.5366 7.95891 10.6191 7.79579 10.6216 7.61829L10.6303 6.82328L11.6278 5.79702C11.7785 5.64202 11.8347 5.43077 11.7778 5.23266L11.7779 5.23265ZM9.98777 6.33515C9.8884 6.43765 9.83215 6.56952 9.8309 6.7064L9.82277 7.46014C9.81277 7.45952 9.80215 7.45827 9.79152 7.45639L8.20402 7.1239C8.13714 7.11015 8.06839 7.10265 8.00028 7.10265C7.93152 7.10265 7.86277 7.10952 7.79653 7.1239L6.20903 7.45639C6.19778 7.45889 6.18778 7.46014 6.17715 7.46014L6.16903 6.70577C6.16715 6.5689 6.11153 6.43702 6.01215 6.33453L5.18402 5.48328L6.48278 5.15953C6.57903 5.13516 6.6659 5.09516 6.74028 5.03953L7.93841 4.14517C7.96528 4.13079 8.03528 4.13079 8.05716 4.14267L9.26028 5.04017C9.33403 5.09517 9.4209 5.13579 9.51778 5.15954L10.8153 5.48454L9.98777 6.33515Z" />
                <path d="M10.33 2.48209C10.1157 2.42772 9.89816 2.55772 9.8444 2.77209C9.79003 2.98646 9.92003 3.20397 10.1338 3.25773C12.0869 3.75147 13.3994 4.85273 13.3994 5.99773C13.3994 6.35273 13.2744 6.70648 13.0281 7.04835C12.7794 7.39334 12.42 7.71085 11.96 7.99272C11.7719 8.10772 11.7125 8.35459 11.8275 8.54272C11.9031 8.66584 12.0344 8.73397 12.1694 8.73397C12.2406 8.73397 12.3125 8.71522 12.3775 8.67522C12.9288 8.33771 13.3656 7.94834 13.6769 7.51646C14.0238 7.03522 14.1994 6.52459 14.1994 5.99771C14.1994 4.45646 12.6806 3.07643 10.3299 2.48203L10.33 2.48209Z" />
              </svg>
            </div>
            <p
              className={tw`text-sm sm:text-base font-base w-45 text-gray-400 break-normal`}
            >
              Your wallet holds the necessary tokens
            </p>
          </div>
        )}
      </div>
      <PoweredByPicket />
    </main>
  );
};

export default SuccessScreen;
