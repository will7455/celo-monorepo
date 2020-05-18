# LedgerWallet

## Hierarchy

* **LedgerWallet**

## Implements

* [Wallet](../interfaces/_wallets_wallet_.wallet.md)

## Index

### Constructors

* [constructor](../classes/_wallets_ledger_wallet_.ledgerwallet.md#constructor)

### Properties

* [baseDerivationPath](../classes/_wallets_ledger_wallet_.ledgerwallet.md#basederivationpath)
* [derivationPathIndexes](../classes/_wallets_ledger_wallet_.ledgerwallet.md#derivationpathindexes)

### Methods

* [getAccounts](../classes/_wallets_ledger_wallet_.ledgerwallet.md#getaccounts)
* [hasAccount](../classes/_wallets_ledger_wallet_.ledgerwallet.md#hasaccount)
* [init](../classes/_wallets_ledger_wallet_.ledgerwallet.md#init)
* [signPersonalMessage](../classes/_wallets_ledger_wallet_.ledgerwallet.md#signpersonalmessage)
* [signTransaction](../classes/_wallets_ledger_wallet_.ledgerwallet.md#signtransaction)
* [signTypedData](../classes/_wallets_ledger_wallet_.ledgerwallet.md#signtypeddata)

## Constructors

### constructor

+ **new LedgerWallet**\(`derivationPathIndexes`: number\[\], `baseDerivationPath`: string\): [_LedgerWallet_](../classes/_wallets_ledger_wallet_.ledgerwallet.md)

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:43_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L43)

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `derivationPathIndexes` | number\[\] | Array.from\(Array\(ADDRESS\_QTY\).keys\(\)\) | number array of "address\_index" for the base derivation path. Default: Array\[0..9\]. Example: \[3, 99, 53\] will retrieve the derivation paths of \[`${baseDerivationPath}/3`, `${baseDerivationPath}/99`, `${baseDerivationPath}/53`\] |
| `baseDerivationPath` | string | CELO\_BASE\_DERIVATION\_PATH | base derivation path. Default: "44'/52752'/0'/0" |

**Returns:** [_LedgerWallet_](../classes/_wallets_ledger_wallet_.ledgerwallet.md)

## Properties

### baseDerivationPath

• **baseDerivationPath**: _string_

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:54_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L54)

base derivation path. Default: "44'/52752'/0'/0"

### derivationPathIndexes

• **derivationPathIndexes**: _number\[\]_

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:53_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L53)

number array of "address\_index" for the base derivation path. Default: Array\[0..9\]. Example: \[3, 99, 53\] will retrieve the derivation paths of \[`${baseDerivationPath}/3`, `${baseDerivationPath}/99`, `${baseDerivationPath}/53`\]

## Methods

### getAccounts

▸ **getAccounts**\(\): [_Address_](_base_.md#address)_\[\]_

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:118_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L118)

**Returns:** [_Address_](_base_.md#address)_\[\]_

### hasAccount

▸ **hasAccount**\(`address?`: undefined \| string\): _boolean_

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:123_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L123)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address?` | undefined \| string |

**Returns:** _boolean_

### init

▸ **init**\(`transport`: any\): _Promise‹void›_

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:67_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L67)

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `transport` | any | Transport to connect the ledger device |

**Returns:** _Promise‹void›_

### signPersonalMessage

▸ **signPersonalMessage**\(`address`: string, `data`: string\): _Promise‹string›_

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:162_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L162)

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | string | Address of the account to sign with |
| `data` | string | Hex string message to sign |

**Returns:** _Promise‹string›_

Signature hex string \(order: rsv\)

### signTransaction

▸ **signTransaction**\(`txParams`: Tx\): _Promise‹EncodedTransaction›_

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:132_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L132)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `txParams` | Tx |

**Returns:** _Promise‹EncodedTransaction›_

### signTypedData

▸ **signTypedData**\(`address`: [Address](_base_.md#address), `typedData`: [EIP712TypedData](../interfaces/_utils_sign_typed_data_utils_.eip712typeddata.md)\): _Promise‹string›_

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:189_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L189)

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | [Address](_base_.md#address) | Address of the account to sign with |
| `typedData` | [EIP712TypedData](../interfaces/_utils_sign_typed_data_utils_.eip712typeddata.md) | - |

**Returns:** _Promise‹string›_

Signature hex string \(order: rsv\)

