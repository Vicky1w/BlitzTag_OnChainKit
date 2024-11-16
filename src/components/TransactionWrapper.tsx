'use client';
import React, { Component } from 'react';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import type {
  TransactionError,
  TransactionResponse,
} from '@coinbase/onchainkit/transaction';
import type { Address, ContractFunctionParameters } from 'viem';
import {
  BASE_SEPOLIA_CHAIN_ID,
  mintABI,
  mintContractAddress,
} from '../constants';

interface TransactionWrapperProps {
  address: Address;
}

interface TransactionWrapperState {
  transactionInProgress: boolean;
}

class TransactionWrapper extends Component<TransactionWrapperProps, TransactionWrapperState> {
  constructor(props: TransactionWrapperProps) {
    super(props);
    this.state = {
      transactionInProgress: false,
    };
  }

  // Handling transaction error
  handleError = (err: TransactionError) => {
    console.error('Transaction error:', err);
    this.setState({ transactionInProgress: false });
  };

  // Handling transaction success
  handleSuccess = (response: TransactionResponse) => {
    console.log('Transaction successful', response);
    this.setState({ transactionInProgress: false });
  };

  render() {
    const { address } = this.props;
    const contracts: ContractFunctionParameters[] = [
      {
        address: mintContractAddress,
        abi: mintABI,
        functionName: 'mint',
        args: [address],
      },
    ];

    return (
      <div className="flex w-full max-w-[450px]">
        <Transaction
          contracts={contracts}
          chainId={BASE_SEPOLIA_CHAIN_ID}
          onError={this.handleError}
          onSuccess={this.handleSuccess}
          className="w-full max-w-[450px]"
        >
          <TransactionButton
            className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg w-full 
                         max-w-xs sm:w-48 font-semibold text-lg sm:text-xl
                         border border-white/20 shadow-lg
                         hover:bg-white/20 transition-all duration-300
                         hover:scale-105 active:scale-95"
            disabled={this.state.transactionInProgress}
          />
          <TransactionStatus>
            <TransactionStatusLabel />
            <TransactionStatusAction />
          </TransactionStatus>
        </Transaction>
      </div>
    );
  }
}

export default TransactionWrapper;
