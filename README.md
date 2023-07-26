Team details-
1) Darshil Patel
2) Satvik Desai
3) Arunbha Dhal
4) Debasish Padhy
5) Swaraj Khair

Mentor details-
1) Krish Agrawal
2) Sujal Mishra

This is a blockchain messaging system that acts as a decentralized communication platform built on the principles of blockchain technology.

To install the dependencies required to deploy this app, you need to install the following packages in 'package.json' by typing the following in the terminal:
  "npm i ethers@5.7.2 next@12.3.1 react@18.2.0 react-dom@18.2.0 web3modal@1.9.9 hardhat@2.12.0"
  
To run the system, follow the undergiven steps:
  1)type "npx hardhat node" in terminal
  2)Simultaneoulsy split the terminal and type "npx hardhat run scripts/deploy.js --network localhost" in the other terminal
  3)Move ChatApp.json from 'artifacts/contracts' to 'context'
  3)Type "npm run dev"

To add the local hardhat network to the Metamask Wallet, register the following:
  Network Name- localhost
  New RPC URL - "http://127.0.0.1:8545"
  Chain ID - "1337"
  Currency Symbol - "ETH"
  
