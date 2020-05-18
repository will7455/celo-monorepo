# CeloProvider

## Hierarchy

* **CeloProvider**

## Index

### Constructors

* [constructor](../classes/_providers_celo_provider_.celoprovider.md#constructor)

### Properties

* [existingProvider](../classes/_providers_celo_provider_.celoprovider.md#existingprovider)
* [wallet](../classes/_providers_celo_provider_.celoprovider.md#wallet)

### Methods

* [addAccount](../classes/_providers_celo_provider_.celoprovider.md#addaccount)
* [getAccounts](../classes/_providers_celo_provider_.celoprovider.md#getaccounts)
* [isLocalAccount](../classes/_providers_celo_provider_.celoprovider.md#islocalaccount)
* [send](../classes/_providers_celo_provider_.celoprovider.md#send)
* [stop](../classes/_providers_celo_provider_.celoprovider.md#stop)

## Constructors

### constructor

+ **new CeloProvider**\(`existingProvider`: provider, `wallet`: [Wallet](../interfaces/_wallets_wallet_.wallet.md)\): [_CeloProvider_](../classes/_providers_celo_provider_.celoprovider.md)

_Defined in_ [_contractkit/src/providers/celo-provider.ts:27_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L27)

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `existingProvider` | provider | - |
| `wallet` | [Wallet](../interfaces/_wallets_wallet_.wallet.md) | new DefaultWallet\(\) |

**Returns:** [_CeloProvider_](../classes/_providers_celo_provider_.celoprovider.md)

## Properties

### existingProvider

• **existingProvider**: _provider_

_Defined in_ [_contractkit/src/providers/celo-provider.ts:29_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L29)

### wallet

• **wallet**: [_Wallet_](../interfaces/_wallets_wallet_.wallet.md)

_Defined in_ [_contractkit/src/providers/celo-provider.ts:27_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L27)

## Methods

### addAccount

▸ **addAccount**\(`privateKey`: string\): _void_

_Defined in_ [_contractkit/src/providers/celo-provider.ts:35_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L35)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `privateKey` | string |

**Returns:** _void_

### getAccounts

▸ **getAccounts**\(\): _Promise‹string\[\]›_

_Defined in_ [_contractkit/src/providers/celo-provider.ts:43_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L43)

**Returns:** _Promise‹string\[\]›_

### isLocalAccount

▸ **isLocalAccount**\(`address?`: undefined \| string\): _boolean_

_Defined in_ [_contractkit/src/providers/celo-provider.ts:49_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L49)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address?` | undefined \| string |

**Returns:** _boolean_

### send

▸ **send**\(`payload`: JsonRpcPayload, `callback`: Callback‹JsonRpcResponse›\): _void_

_Defined in_ [_contractkit/src/providers/celo-provider.ts:56_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L56)

Send method as expected by web3.js

**Parameters:**

| Name | Type |
| :--- | :--- |
| `payload` | JsonRpcPayload |
| `callback` | Callback‹JsonRpcResponse› |

**Returns:** _void_

### stop

▸ **stop**\(\): _void_

_Defined in_ [_contractkit/src/providers/celo-provider.ts:134_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L134)

**Returns:** _void_

