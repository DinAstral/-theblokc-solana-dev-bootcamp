import * as Web3 from '@solana/web3.js'

async function main (){
    const publicKey = 'qFUogCutdYtUXhHzEmBPxbSsLG1kEaph7tKtRN3y7gw'
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))

    const balance = await connection.getBalance(new Web3.PublicKey(publicKey))
    const solBalance = balance / Web3.LAMPORTS_PER_SOL // to view your balance
    console.log('Balance', solBalance)
}

main()