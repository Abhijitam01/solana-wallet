import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
                    <WalletMultiButton />
                      <WalletDisconnectButton />
                         hi their
                         hi their to 
            </WalletModalProvider>
        </WalletProvider>
     </ConnectionProvider>
    </>
  )
}

export default App
