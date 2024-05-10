import { Core } from '@walletconnect/core'
import { Web3Wallet } from '@walletconnect/web3wallet'

const core = new Core({
  projectId: '53ecd7eb036d1e6129fc398d423094f9'
})

export const web3wallet = await Web3Wallet.init({
  core, // <- pass the shared `core` instance
  metadata: {
    name: 'Demo app',
    description: 'Demo Client as Wallet/Peer',
    url: 'www.walletconnect.com',
    icons: []
  }
})

const Wallet = () => {
    return (  
<div>
    {2+3}
</div>

    );
}
 
export default Wallet;
