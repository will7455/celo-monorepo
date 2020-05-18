# Wallet

## Hierarchy

* **Wallet**

## Implemented by

* [DefaultWallet](../classes/_wallets_default_wallet_.defaultwallet.md)
* [LedgerWallet](../classes/_wallets_ledger_wallet_.ledgerwallet.md)

## Index

### Properties

* [getAccounts](_wallets_wallet_.wallet.md#getaccounts)
* [hasAccount](_wallets_wallet_.wallet.md#hasaccount)
* [signPersonalMessage](_wallets_wallet_.wallet.md#signpersonalmessage)
* [signTransaction](_wallets_wallet_.wallet.md#signtransaction)
* [signTypedData](_wallets_wallet_.wallet.md#signtypeddata)

## Properties

### getAccounts

• **getAccounts**: _function_

_Defined in_ [_contractkit/src/wallets/wallet.ts:6_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/wallet.ts#L6)

#### Type declaration:

▸ \(\): [_Address_](../external-modules/_base_.md#address)_\[\]_

### hasAccount

• **hasAccount**: _function_

_Defined in_ [_contractkit/src/wallets/wallet.ts:7_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/wallet.ts#L7)

#### Type declaration:

▸ \(`address?`: [Address](../external-modules/_base_.md#address)\): _boolean_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address?` | [Address](../external-modules/_base_.md#address) |

### signPersonalMessage

• **signPersonalMessage**: _function_

_Defined in_ [_contractkit/src/wallets/wallet.ts:10_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/wallet.ts#L10)

#### Type declaration:

▸ \(`address`: [Address](../external-modules/_base_.md#address), `data`: string\): _Promise‹string›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) |
| `data` | string |

### signTransaction

• **signTransaction**: _function_

_Defined in_ [_contractkit/src/wallets/wallet.ts:8_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/wallet.ts#L8)

#### Type declaration:

▸ \(`txParams`: Tx\): _Promise‹EncodedTransaction›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `txParams` | Tx |

### signTypedData

• **signTypedData**: _function_

_Defined in_ [_contractkit/src/wallets/wallet.ts:9_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/wallet.ts#L9)

#### Type declaration:

▸ \(`address`: string, `typedData`: [EIP712TypedData](_utils_sign_typed_data_utils_.eip712typeddata.md)\): _Promise‹string›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |
| `typedData` | [EIP712TypedData](_utils_sign_typed_data_utils_.eip712typeddata.md) |

