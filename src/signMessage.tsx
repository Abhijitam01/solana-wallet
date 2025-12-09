import { ed25519 } from "@noble/curves/ed25519.js";
import { useWallet } from "@solana/wallet-adapter-react";
import base58 from "bs58";
import React from "react";

export function SignMessage() {
    const { publicKey , SignMessage } = useWallet() ;

    async function onClick() {
        if(!publicKey) throw new Error('wallet not connected')
        if(!SignMessage) throw new Error('wallet dowes not supoort ther signig message')
        

        const message = document.getElementById("message") as HTMLInputElement ;
        const actualMessage = message.value ;
        const encodedMessage = new TextEncoder().encode(actualMessage);
        const signature = await SignMessage(encodedMessage) ;

        if(!ed25519.verify(signature , encodedMessage , publicKey.toBytes())) throw new Error('Message signature invalid');
        alert('success' , `Message Signature: ${base58.encode(signature)}`);

    };

    return (
        <div>
            <input id="message" type="text" placeholder="Message to be"></input>
            <button onClick={onClick}>
                Sign Message
            </button>
        </div>
    )
}