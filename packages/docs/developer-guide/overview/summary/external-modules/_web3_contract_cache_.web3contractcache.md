# Web3ContractCache

Native Web3 contracts factory and cache.

Exposes accessors to all `CeloContract` web3 contracts.

Mostly a private cache, kit users would normally use a contract wrapper

## Hierarchy

* **Web3ContractCache**

## Index

### Constructors

* [constructor](../classes/_web3_contract_cache_.web3contractcache.md#constructor)

### Properties

* [kit](../classes/_web3_contract_cache_.web3contractcache.md#kit)

### Methods

* [getAccounts](../classes/_web3_contract_cache_.web3contractcache.md#getaccounts)
* [getAttestations](../classes/_web3_contract_cache_.web3contractcache.md#getattestations)
* [getBlockchainParameters](../classes/_web3_contract_cache_.web3contractcache.md#getblockchainparameters)
* [getContract](../classes/_web3_contract_cache_.web3contractcache.md#getcontract)
* [getDoubleSigningSlasher](../classes/_web3_contract_cache_.web3contractcache.md#getdoublesigningslasher)
* [getDowntimeSlasher](../classes/_web3_contract_cache_.web3contractcache.md#getdowntimeslasher)
* [getElection](../classes/_web3_contract_cache_.web3contractcache.md#getelection)
* [getEpochRewards](../classes/_web3_contract_cache_.web3contractcache.md#getepochrewards)
* [getEscrow](../classes/_web3_contract_cache_.web3contractcache.md#getescrow)
* [getExchange](../classes/_web3_contract_cache_.web3contractcache.md#getexchange)
* [getFeeCurrencyWhitelist](../classes/_web3_contract_cache_.web3contractcache.md#getfeecurrencywhitelist)
* [getFreezer](../classes/_web3_contract_cache_.web3contractcache.md#getfreezer)
* [getGasPriceMinimum](../classes/_web3_contract_cache_.web3contractcache.md#getgaspriceminimum)
* [getGoldToken](../classes/_web3_contract_cache_.web3contractcache.md#getgoldtoken)
* [getGovernance](../classes/_web3_contract_cache_.web3contractcache.md#getgovernance)
* [getLockedGold](../classes/_web3_contract_cache_.web3contractcache.md#getlockedgold)
* [getMultiSig](../classes/_web3_contract_cache_.web3contractcache.md#getmultisig)
* [getRandom](../classes/_web3_contract_cache_.web3contractcache.md#getrandom)
* [getRegistry](../classes/_web3_contract_cache_.web3contractcache.md#getregistry)
* [getReserve](../classes/_web3_contract_cache_.web3contractcache.md#getreserve)
* [getSortedOracles](../classes/_web3_contract_cache_.web3contractcache.md#getsortedoracles)
* [getStableToken](../classes/_web3_contract_cache_.web3contractcache.md#getstabletoken)
* [getTransferWhitelist](../classes/_web3_contract_cache_.web3contractcache.md#gettransferwhitelist)
* [getValidators](../classes/_web3_contract_cache_.web3contractcache.md#getvalidators)

## Constructors

### constructor

+ **new Web3ContractCache**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md)\): [_Web3ContractCache_](../classes/_web3_contract_cache_.web3contractcache.md)

_Defined in_ [_contractkit/src/web3-contract-cache.ts:68_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L68)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |

**Returns:** [_Web3ContractCache_](../classes/_web3_contract_cache_.web3contractcache.md)

## Properties

### kit

• **kit**: [_ContractKit_](../classes/_kit_.contractkit.md)

_Defined in_ [_contractkit/src/web3-contract-cache.ts:70_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L70)

## Methods

### getAccounts

▸ **getAccounts**\(\): _Promise‹Accounts‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:71_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L71)

**Returns:** _Promise‹Accounts‹››_

### getAttestations

▸ **getAttestations**\(\): _Promise‹Attestations‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:74_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L74)

**Returns:** _Promise‹Attestations‹››_

### getBlockchainParameters

▸ **getBlockchainParameters**\(\): _Promise‹BlockchainParameters‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:77_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L77)

**Returns:** _Promise‹BlockchainParameters‹››_

### getContract

▸ **getContract**&lt;**C**&gt;\(`contract`: C, `address?`: undefined \| string\): _Promise‹ContractCacheMap\[C\] extends undefined \| null ? never : ContractCacheMap\[C\]›_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:144_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L144)

Get native web3 contract wrapper

**Type parameters:**

▪ **C**: _keyof typeof ContractFactories_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `contract` | C |
| `address?` | undefined \| string |

**Returns:** _Promise‹ContractCacheMap\[C\] extends undefined \| null ? never : ContractCacheMap\[C\]›_

### getDoubleSigningSlasher

▸ **getDoubleSigningSlasher**\(\): _Promise‹DoubleSigningSlasher‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:80_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L80)

**Returns:** _Promise‹DoubleSigningSlasher‹››_

### getDowntimeSlasher

▸ **getDowntimeSlasher**\(\): _Promise‹DowntimeSlasher‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:83_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L83)

**Returns:** _Promise‹DowntimeSlasher‹››_

### getElection

▸ **getElection**\(\): _Promise‹Election‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:86_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L86)

**Returns:** _Promise‹Election‹››_

### getEpochRewards

▸ **getEpochRewards**\(\): _Promise‹EpochRewards‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:89_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L89)

**Returns:** _Promise‹EpochRewards‹››_

### getEscrow

▸ **getEscrow**\(\): _Promise‹Escrow‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:92_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L92)

**Returns:** _Promise‹Escrow‹››_

### getExchange

▸ **getExchange**\(\): _Promise‹Exchange‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:95_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L95)

**Returns:** _Promise‹Exchange‹››_

### getFeeCurrencyWhitelist

▸ **getFeeCurrencyWhitelist**\(\): _Promise‹FeeCurrencyWhitelist‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:98_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L98)

**Returns:** _Promise‹FeeCurrencyWhitelist‹››_

### getFreezer

▸ **getFreezer**\(\): _Promise‹Freezer‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:101_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L101)

**Returns:** _Promise‹Freezer‹››_

### getGasPriceMinimum

▸ **getGasPriceMinimum**\(\): _Promise‹GasPriceMinimum‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:104_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L104)

**Returns:** _Promise‹GasPriceMinimum‹››_

### getGoldToken

▸ **getGoldToken**\(\): _Promise‹GoldToken‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:107_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L107)

**Returns:** _Promise‹GoldToken‹››_

### getGovernance

▸ **getGovernance**\(\): _Promise‹Governance‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:110_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L110)

**Returns:** _Promise‹Governance‹››_

### getLockedGold

▸ **getLockedGold**\(\): _Promise‹LockedGold‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:113_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L113)

**Returns:** _Promise‹LockedGold‹››_

### getMultiSig

▸ **getMultiSig**\(`address`: string\): _Promise‹MultiSig‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:116_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L116)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** _Promise‹MultiSig‹››_

### getRandom

▸ **getRandom**\(\): _Promise‹Random‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:119_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L119)

**Returns:** _Promise‹Random‹››_

### getRegistry

▸ **getRegistry**\(\): _Promise‹Registry‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:122_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L122)

**Returns:** _Promise‹Registry‹››_

### getReserve

▸ **getReserve**\(\): _Promise‹Reserve‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:125_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L125)

**Returns:** _Promise‹Reserve‹››_

### getSortedOracles

▸ **getSortedOracles**\(\): _Promise‹SortedOracles‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:128_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L128)

**Returns:** _Promise‹SortedOracles‹››_

### getStableToken

▸ **getStableToken**\(\): _Promise‹StableToken‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:131_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L131)

**Returns:** _Promise‹StableToken‹››_

### getTransferWhitelist

▸ **getTransferWhitelist**\(\): _Promise‹TransferWhitelist‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:134_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L134)

**Returns:** _Promise‹TransferWhitelist‹››_

### getValidators

▸ **getValidators**\(\): _Promise‹Validators‹››_

_Defined in_ [_contractkit/src/web3-contract-cache.ts:137_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/web3-contract-cache.ts#L137)

**Returns:** _Promise‹Validators‹››_

