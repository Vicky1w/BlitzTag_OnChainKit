'use client';

import { useRouter } from 'next/navigation'; // Import useRouter
import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from '@coinbase/onchainkit/identity';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
} from '@coinbase/onchainkit/wallet';

type WalletWrapperParams = {
  text?: string;
  className?: string;
  withWalletAggregator?: boolean;
};

export default function WalletWrapper({
  className,
  text,
  withWalletAggregator = false,
}: WalletWrapperParams) {
  const router = useRouter(); // Initialize the router

  const handleWalletConnected = () => {
    // Navigate to the desired page on successful wallet connection
    router.push('/submit-details'); // Replace '/submit-details' with the target route
  };

  

  return (
    <>
      <Wallet>
        <ConnectWallet
          withWalletAggregator={withWalletAggregator}
          text={text}
          className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg w-full 
                         max-w-xs sm:w-48 font-semibold text-lg sm:text-xl
                         border border-white/20 shadow-lg
                         hover:bg-white/20 transition-all duration-300
                         hover:scale-105 active:scale-95"
          onConnect={handleWalletConnected} // Trigger navigation on successful connection
        >
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick={true}>
            <Avatar />
            <Name />
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownBasename />
          <WalletDropdownLink icon="wallet" href="https://wallet.coinbase.com">
            Go to Wallet Dashboard
          </WalletDropdownLink>
          <WalletDropdownFundLink />
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </>
  );
}
