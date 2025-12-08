import { useConnection , useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useEffect , useState } from "react";

export function ShowSolBalance() {
    const { connection } = useConnection();
    const wallet = useWallet() ;
    
    async function getBalance() 
    {
        if(wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance")!.innerHTML= (balance/LAMPORTS_PER_SOL).toString() ;
        }
    }

    useEffect(() => {
         getBalance();
    },[wallet.publicKey]);

    return <div>
        <p>SOL balance :</p>
        <div id="balance"></div>
    </div>
 }