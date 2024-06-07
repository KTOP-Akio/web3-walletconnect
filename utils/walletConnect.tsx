import { Core } from '@walletconnect/core'
import { Web3Wallet } from '@walletconnect/web3wallet'

const core = new Core({
  projectId: '137d05aa0d467945e86e00c7d0f05943'
})

const metadata = {
  name: 'walletconnect',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const web3wallet = await Web3Wallet.init({
  core, // <- pass the shared 'core' instance
  metadata
})