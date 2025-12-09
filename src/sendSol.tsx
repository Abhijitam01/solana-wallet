import { useConnection , useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL , PublicKey , SystemProgram , Transaction } from "@solana/web3.js";


export function SendToken() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendToken() {
        let to = document.getElementById("to") as HTMLInputElement ;
        let toSend = to.value ;

        let something = document.getElementById("amount") as HTMLInputElement ;
        let amount = Number(something.value) ;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey : wallet.publicKey,
            toPubkey: new PublicKey(toSend),
            lamports : amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction , connection);
        alert("Sent " + amount + "SOL to " + toSend);
    }

    return <div>
        <input id="to" type="text" placeholder="to"></input>
        <input id="something" type="text" placeholder="Amount"></input>
        <button onClick={sendToken}>
            Send
        </button>
    </div>
}