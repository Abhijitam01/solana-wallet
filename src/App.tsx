import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { Airdrop } from './Airdrop';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { ShowSolBalance } from './balance';

function App() {
  return (
     <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/TEE_WA8ro1pyWkSyz64UA"}>
         <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
                    <WalletMultiButton></WalletMultiButton>
                       <WalletDisconnectButton></WalletDisconnectButton>
                      hit heir
                      <Airdrop></Airdrop>
                      <ShowSolBalance></ShowSolBalance>
            </WalletModalProvider>
         </WalletProvider>
     </ConnectionProvider>
  )
}

export default App
