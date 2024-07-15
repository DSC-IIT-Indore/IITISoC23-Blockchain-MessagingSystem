# ChatApp Solidity Smart Contract

## Overview
This project implements a decentralized chat application on the Ethereum blockchain using Solidity. Users can create accounts, add friends, send messages, and read messages securely on the blockchain.

## Features
- **Account Management:**
  - Users can create accounts with unique usernames.
  - Each user is represented by their Ethereum address.
  
- **Friend Management:**
  - Users can add friends using their Ethereum addresses.
  - Mutual friendships are automatically established.

- **Messaging System:**
  - Users can send messages to their friends.
  - Messages are stored securely on the blockchain.

- **User Interaction:**
  - Check if a user exists.
  - Retrieve usernames of registered users.
  - View and manage friends list.
  - Send and read messages with friends.



## Usage
1. Deploy the `ChatApp` contract on an Ethereum-compatible blockchain using Solidity compiler and deployer.
2. Interact with the contract methods using a web3.js or ethers.js client-side application.
3. Ensure proper gas management and security practices when interacting with the Ethereum blockchain.

1. Compile contracts and deploy using Hardhat:
   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network localhost
   ```
2. Run the application:
   ```bash
   npx run dev
