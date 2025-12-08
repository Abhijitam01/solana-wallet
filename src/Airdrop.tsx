import { useWallet } from "@solana/wallet-adapter-react"
import { Connection, clusterApiUrl } from "@solana/web3.js"

export function Airdrop() {

    const wallet = useWallet()

    async function sendAirdropToUser() {
        
        if (!wallet.publicKey) return alert("Wallet not connected");
        const input = document.getElementById("publicKey") as HTMLInputElement ;
        const amount = Number(input.value)
        const airdropConnection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        await airdropConnection.requestAirdrop(wallet.publicKey ,amount * 1000000000)
    }
    return <div>
              <input id="publicKey" type="text" placeholder="amoun tin sol"></input>
              <button onClick={sendAirdropToUser}>Send Airdrop</button>
           </div>
}



