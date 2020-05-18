# DefaultWallet

## Hierarchy

* **DefaultWallet**

## Implements

* [Wallet](../interfaces/_wallets_wallet_.wallet.md)

## Index

### Methods

* [addAccount](../classes/_wallets_default_wallet_.defaultwallet.md#addaccount)
* [getAccounts](../classes/_wallets_default_wallet_.defaultwallet.md#getaccounts)
* [hasAccount](../classes/_wallets_default_wallet_.defaultwallet.md#hasaccount)
* [signPersonalMessage](../classes/_wallets_default_wallet_.defaultwallet.md#signpersonalmessage)
* [signTransaction](../classes/_wallets_default_wallet_.defaultwallet.md#signtransaction)
* [signTypedData](../classes/_wallets_default_wallet_.defaultwallet.md#signtypeddata)

## Methods

### addAccount

▸ **addAccount**\(`privateKey`: string\): _void_

_Defined in_ [_contractkit/src/wallets/default-wallet.ts:18_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/default-wallet.ts#L18)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `privateKey` | string |

**Returns:** _void_

### getAccounts

▸ **getAccounts**\(\): [_Address_](_base_.md#address)_\[\]_

_Defined in_ [_contractkit/src/wallets/default-wallet.ts:28_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/default-wallet.ts#L28)

**Returns:** [_Address_](_base_.md#address)_\[\]_

### hasAccount

▸ **hasAccount**\(`address?`: undefined \| string\): _boolean_

_Defined in_ [_contractkit/src/wallets/default-wallet.ts:32_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/default-wallet.ts#L32)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address?` | undefined \| string |

**Returns:** _boolean_

### signPersonalMessage

▸ **signPersonalMessage**\(`address`: string, `data`: string\): _Promise‹string›_

_Defined in_ [_contractkit/src/wallets/default-wallet.ts:53_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/default-wallet.ts#L53)

Sign a personal Ethereum signed message. The address must be provided it must match the address calculated from the private key.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | string | Address of the account to sign with |
| `data` | string | Hex string message to sign |

**Returns:** _Promise‹string›_

Signature hex string \(order: rsv\)

### signTransaction

▸ **signTransaction**\(`txParams`: Tx\): _Promise‹EncodedTransaction›_

_Defined in_ [_contractkit/src/wallets/default-wallet.ts:40_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/default-wallet.ts#L40)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `txParams` | Tx |

**Returns:** _Promise‹EncodedTransaction›_

### signTypedData

▸ **signTypedData**\(`address`: [Address](_base_.md#address), `typedData`: [EIP712TypedData](../interfaces/_utils_sign_typed_data_utils_.eip712typeddata.md)\): _Promise‹string›_

_Defined in_ [_contractkit/src/wallets/default-wallet.ts:78_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/default-wallet.ts#L78)

Sign an EIP712 Typed Data message. The signing address will be calculated from the private key. The address must be provided it must match the address calculated from the private key.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | [Address](_base_.md#address) | Address of the account to sign with |
| `typedData` | [EIP712TypedData](../interfaces/_utils_sign_typed_data_utils_.eip712typeddata.md) | - |

**Returns:** _Promise‹string›_

Signature hex string \(order: rsv\)

