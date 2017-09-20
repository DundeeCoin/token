//const argv = require('minimist')(process.argv.slice(2));
const Web3 = require("web3")
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
console.log(web3)

let bip39 = require("bip39")
let hdkey = require('ethereumjs-wallet/hdkey')
let mnemonic = "adult decade sing mule reject spy clever end give door know neither"
let hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic))
// Set to m/44'/60'/0' for ledger nano s hardware wallet compatibilty
let wallet_hdpath = "m/44'/60'/0'/0/"
//wallet_hdpath = "m/44'/60'/0'"
let wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet()
//let address = "0x" + wallet.getAddress().toString("hex")

// Create 10 accounts from mnemonic if not already existing
for (let i = 0; i < 10; i++) {
  if (typeof web3.eth.accounts[i] === 'undefined') {
    let wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet()
    web3.personal.importRawKey(wallet.getPrivateKey().toString("hex"), '')
    console.log('Created account at position ' + i)
  } else {
    console.log('Account ' + i + ' already exists.')
  }
}



