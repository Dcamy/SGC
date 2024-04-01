import Web3 from 'web3';

// This is a simple example. You'll need error handling and edge cases.
export const connectWallet = async () => {
    if (window.ethereum) { // Check if MetaMask is installed
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' }); // Will open the MetaMask UI
            const web3 = new Web3(window.ethereum); // Create a new Web3 instance
            // You can now use the web3 instance to interact with the blockchain
        } catch (error) {
            console.error('User denied account access', error); // Handle errors like user rejection
        }
    } else {
        alert('Please install MetaMask to use this feature!'); // If MetaMask isn't installed
    }
};

// src/utils/web3Utils.js

// This function checks if the wallet is connected
export const isWalletConnected = async () => {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        return accounts.length > 0;
    } else {
        // If window.ethereum is not found, then a wallet is not connected
        return false;
    }
};
export const isWalletConnected = async () => {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        return accounts.length > 0;
    } else {
        // If window.ethereum is not found, then a wallet is not connected
        return false;
    }
};

