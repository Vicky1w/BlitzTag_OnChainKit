'use client';
import { useState } from 'react';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import Swap from 'src/components/Swap';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import CompanyLogin from 'src/components/CompanyLogin';

export default function Page() {
  const { address } = useAccount();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  // Toggle login modal
  const toggleLoginModal = () => {
    setLoginModalOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col  h-full w-full max-w-7xl mx-auto px-4 py-8 bg-gradient-to-br from-indigo-300 via-pink-300 to-yellow-300">
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-8">
        <a
          href={ONCHAINKIT_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <OnchainkitSvg />
        </a>
        <div className="flex items-center gap-6">
          <SignupButton />
          {!address && <LoginButton onClick={toggleLoginModal} />}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center w-full max-w-6xl gap-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
            Welcome to Blitztag
          </h1>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Transaction Tile */}
          <div className="flex justify-center items-center w-full bg-gradient-to-r from-purple-400 to-pink-400 p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:bg-purple-500">
            {/* <div className="text-center"> */}
              {address ? (
                <TransactionWrapper address={address} />
              ) : (
                <WalletWrapper text="Transact" />
              )}
            {/* </div> */}
          </div>

          {/* Explore Features Tile */}
          <div className="flex justify-center items-center w-full bg-gradient-to-r from-yellow-400 to-orange-400 p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:bg-yellow-500">
          <div className="flex items-center gap-4">
            <button
              className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg w-full 
                         max-w-xs sm:w-48 font-semibold text-lg sm:text-xl
                         border border-white/20 shadow-lg
                         hover:bg-white/20 transition-all duration-300
                         hover:scale-105 active:scale-95"
              onClick={toggleLoginModal}
              type="button"
            >
              Login
            </button>
          </div>
          </div>

          {/* Learn More Tile */}
          <div className="flex justify-center items-center w-full bg-gradient-to-r from-teal-400 to-green-400 p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:bg-teal-500">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800">Learn More</h3>
              <p className="text-lg text-gray-700 mt-2">Read the documentation to get started quickly.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-500">
            <h2 className="text-2xl font-semibold text-center text-purple-700">Login</h2>
            <p className="text-center text-gray-600 mt-3">Please log in to access your wallet and transactions.</p>
            <div className="flex justify-center gap-6 mt-8">
              <button
                onClick={toggleLoginModal}
                className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function WalletComponents() {
  const { signMessage } = useSignMessage();
 
  return (
    <ConnectWallet onConnect={() => {signMessage({ message })}} />
  );
}