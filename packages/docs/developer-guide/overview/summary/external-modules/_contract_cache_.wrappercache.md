# WrapperCache

Kit ContractWrappers factory & cache.

Provides access to all contract wrappers for celo core contracts

## Hierarchy

* **WrapperCache**

## Index

### Constructors

* [constructor](../classes/_contract_cache_.wrappercache.md#constructor)

### Properties

* [kit](../classes/_contract_cache_.wrappercache.md#kit)

### Methods

* [getAccounts](../classes/_contract_cache_.wrappercache.md#getaccounts)
* [getAttestations](../classes/_contract_cache_.wrappercache.md#getattestations)
* [getBlockchainParameters](../classes/_contract_cache_.wrappercache.md#getblockchainparameters)
* [getContract](../classes/_contract_cache_.wrappercache.md#getcontract)
* [getDoubleSigningSlasher](../classes/_contract_cache_.wrappercache.md#getdoublesigningslasher)
* [getDowntimeSlasher](../classes/_contract_cache_.wrappercache.md#getdowntimeslasher)
* [getElection](../classes/_contract_cache_.wrappercache.md#getelection)
* [getEscrow](../classes/_contract_cache_.wrappercache.md#getescrow)
* [getExchange](../classes/_contract_cache_.wrappercache.md#getexchange)
* [getGasPriceMinimum](../classes/_contract_cache_.wrappercache.md#getgaspriceminimum)
* [getGoldToken](../classes/_contract_cache_.wrappercache.md#getgoldtoken)
* [getGovernance](../classes/_contract_cache_.wrappercache.md#getgovernance)
* [getLockedGold](../classes/_contract_cache_.wrappercache.md#getlockedgold)
* [getMultiSig](../classes/_contract_cache_.wrappercache.md#getmultisig)
* [getReserve](../classes/_contract_cache_.wrappercache.md#getreserve)
* [getSortedOracles](../classes/_contract_cache_.wrappercache.md#getsortedoracles)
* [getStableToken](../classes/_contract_cache_.wrappercache.md#getstabletoken)
* [getValidators](../classes/_contract_cache_.wrappercache.md#getvalidators)

## Constructors

### constructor

+ **new WrapperCache**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md)\): [_WrapperCache_](../classes/_contract_cache_.wrappercache.md)

_Defined in_ [_contractkit/src/contract-cache.ts:80_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L80)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |

**Returns:** [_WrapperCache_](../classes/_contract_cache_.wrappercache.md)

## Properties

### kit

• **kit**: [_ContractKit_](../classes/_kit_.contractkit.md)

_Defined in_ [_contractkit/src/contract-cache.ts:82_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L82)

## Methods

### getAccounts

▸ **getAccounts**\(\): _Promise‹_[_AccountsWrapper_](../classes/_wrappers_accounts_.accountswrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:84_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L84)

**Returns:** _Promise‹_[_AccountsWrapper_](../classes/_wrappers_accounts_.accountswrapper.md)_‹››_

### getAttestations

▸ **getAttestations**\(\): _Promise‹_[_AttestationsWrapper_](../classes/_wrappers_attestations_.attestationswrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:87_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L87)

**Returns:** _Promise‹_[_AttestationsWrapper_](../classes/_wrappers_attestations_.attestationswrapper.md)_‹››_

### getBlockchainParameters

▸ **getBlockchainParameters**\(\): _Promise‹_[_BlockchainParametersWrapper_](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:90_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L90)

**Returns:** _Promise‹_[_BlockchainParametersWrapper_](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md)_‹››_

### getContract

▸ **getContract**&lt;**C**&gt;\(`contract`: C, `address?`: undefined \| string\): _Promise‹WrapperCacheMap\[C\] extends undefined \| null ? never : WrapperCacheMap\[C\]›_

_Defined in_ [_contractkit/src/contract-cache.ts:148_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L148)

Get Contract wrapper

**Type parameters:**

▪ **C**: [_ValidWrappers_](_contract_cache_.md#validwrappers)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `contract` | C |
| `address?` | undefined \| string |

**Returns:** _Promise‹WrapperCacheMap\[C\] extends undefined \| null ? never : WrapperCacheMap\[C\]›_

### getDoubleSigningSlasher

▸ **getDoubleSigningSlasher**\(\): _Promise‹_[_DoubleSigningSlasherWrapper_](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:93_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L93)

**Returns:** _Promise‹_[_DoubleSigningSlasherWrapper_](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md)_‹››_

### getDowntimeSlasher

▸ **getDowntimeSlasher**\(\): _Promise‹_[_DowntimeSlasherWrapper_](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:96_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L96)

**Returns:** _Promise‹_[_DowntimeSlasherWrapper_](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md)_‹››_

### getElection

▸ **getElection**\(\): _Promise‹_[_ElectionWrapper_](../classes/_wrappers_election_.electionwrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:99_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L99)

**Returns:** _Promise‹_[_ElectionWrapper_](../classes/_wrappers_election_.electionwrapper.md)_‹››_

### getEscrow

▸ **getEscrow**\(\): _Promise‹_[_EscrowWrapper_](../classes/_wrappers_escrow_.escrowwrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:105_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L105)

**Returns:** _Promise‹_[_EscrowWrapper_](../classes/_wrappers_escrow_.escrowwrapper.md)_‹››_

### getExchange

▸ **getExchange**\(\): _Promise‹_[_ExchangeWrapper_](../classes/_wrappers_exchange_.exchangewrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:108_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L108)

**Returns:** _Promise‹_[_ExchangeWrapper_](../classes/_wrappers_exchange_.exchangewrapper.md)_‹››_

### getGasPriceMinimum

▸ **getGasPriceMinimum**\(\): _Promise‹_[_GasPriceMinimumWrapper_](../classes/_wrappers_gaspriceminimum_.gaspriceminimumwrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:114_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L114)

**Returns:** _Promise‹_[_GasPriceMinimumWrapper_](../classes/_wrappers_gaspriceminimum_.gaspriceminimumwrapper.md)_‹››_

### getGoldToken

▸ **getGoldToken**\(\): _Promise‹_[_GoldTokenWrapper_](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:117_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L117)

**Returns:** _Promise‹_[_GoldTokenWrapper_](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md)_‹››_

### getGovernance

▸ **getGovernance**\(\): _Promise‹_[_GovernanceWrapper_](../classes/_wrappers_governance_.governancewrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:120_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L120)

**Returns:** _Promise‹_[_GovernanceWrapper_](../classes/_wrappers_governance_.governancewrapper.md)_‹››_

### getLockedGold

▸ **getLockedGold**\(\): _Promise‹_[_LockedGoldWrapper_](../classes/_wrappers_lockedgold_.lockedgoldwrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:123_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L123)

**Returns:** _Promise‹_[_LockedGoldWrapper_](../classes/_wrappers_lockedgold_.lockedgoldwrapper.md)_‹››_

### getMultiSig

▸ **getMultiSig**\(`address`: string\): _Promise‹_[_MultiSigWrapper_](../classes/_wrappers_multisig_.multisigwrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:126_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L126)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** _Promise‹_[_MultiSigWrapper_](../classes/_wrappers_multisig_.multisigwrapper.md)_‹››_

### getReserve

▸ **getReserve**\(\): _Promise‹_[_ReserveWrapper_](../classes/_wrappers_reserve_.reservewrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:132_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L132)

**Returns:** _Promise‹_[_ReserveWrapper_](../classes/_wrappers_reserve_.reservewrapper.md)_‹››_

### getSortedOracles

▸ **getSortedOracles**\(\): _Promise‹_[_SortedOraclesWrapper_](../classes/_wrappers_sortedoracles_.sortedoracleswrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:135_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L135)

**Returns:** _Promise‹_[_SortedOraclesWrapper_](../classes/_wrappers_sortedoracles_.sortedoracleswrapper.md)_‹››_

### getStableToken

▸ **getStableToken**\(\): _Promise‹_[_StableTokenWrapper_](../classes/_wrappers_stabletokenwrapper_.stabletokenwrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:138_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L138)

**Returns:** _Promise‹_[_StableTokenWrapper_](../classes/_wrappers_stabletokenwrapper_.stabletokenwrapper.md)_‹››_

### getValidators

▸ **getValidators**\(\): _Promise‹_[_ValidatorsWrapper_](../classes/_wrappers_validators_.validatorswrapper.md)_‹››_

_Defined in_ [_contractkit/src/contract-cache.ts:141_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L141)

**Returns:** _Promise‹_[_ValidatorsWrapper_](../classes/_wrappers_validators_.validatorswrapper.md)_‹››_

