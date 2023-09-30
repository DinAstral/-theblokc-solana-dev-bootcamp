import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
const connection = new Web3.Connection(Web3.clusterApiUrl('devnet')) //connects to the wallet
const PRIVATE_KEY = '4eHCoFz2fVKJHvYH6apxXzrxvBTo4WKDVdG2hhZSk4QWAHaiLRcmoksnLeyof96vnqNXG1tVMmTtej1eb8Qp1aaw'
async function main (){
    const signer = Web3.Keypair.fromSecretKey(base58.decode(PRIVATE_KEY))
    const transaction = new Web3.Transaction()

    const sendSolTransaction = Web3.SystemProgram.transfer({
        fromPubkey: new Web3.PublicKey('qFUogCutdYtUXhHzEmBPxbSsLG1kEaph7tKtRN3y7gw'),
        toPubkey: new Web3.PublicKey('6PjvhDLKk777of3h1HizBxqnnWYG4Rj9Rm7CgRNgW1Vq'),
        lamports: 0.1 * Web3.LAMPORTS_PER_SOL,
    })
    transaction.add(sendSolTransaction)
    const txHash = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [signer]
    )
    console.log('txHash / txSignature', txHash)
}

main()