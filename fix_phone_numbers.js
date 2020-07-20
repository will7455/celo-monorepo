const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')
const LocalWallet = require('@celo/contractkit/lib/wallets/local-wallet').LocalWallet
const BigNumber = require('bignumber.js')
const utils = require('@celo/utils/lib/account')
const bip39 = require('bip39')
const { isIdentifierStart } = require('typescript')
const { generateKeys } = utils

const DEFAULT_TESTNET = 'rc1'
// 'alfajores', 'baklava' 'integration'

async function main() {
  const provider = new Web3.providers.HttpProvider(
    `https://${DEFAULT_TESTNET}-forno.celo-testnet.org`
  )
  const web3 = new Web3(provider)

  const account = await generateKeys('SEED PHRASE', undefined, undefined, bip39)

  const privateKey = '0x' + account.privateKey
  const wallet = new LocalWallet()
  wallet.addAccount(privateKey)
  const contractKit = ContractKit.newKitFromWeb3(web3, wallet)
  contractKit.defaultAccount = web3.eth.accounts.privateKeyToAccount(privateKey).address
  console.log(contractKit.defaultAccount)

  const attestations = await contractKit.contracts.getAttestations()

  var identifier = web3.utils.soliditySha3({
    type: 'string',
    value: 'tel://PHONE_SALT',
  })
  console.log(await attestations.lookupIdentifiers([identifier]))

  // await (await attestations.revoke(isIdentifierStart, contractKit.defaultAccount)).sendAndWaitForReceipt()

  console.log(await attestations.lookupIdentifiers([identifier]))
}
main()
