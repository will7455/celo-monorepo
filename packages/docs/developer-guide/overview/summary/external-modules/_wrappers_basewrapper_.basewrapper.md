# BaseWrapper

Base ContractWrapper

## Type parameters

▪ **T**: _Contract_

## Hierarchy

* **BaseWrapper**

  ↳ [AccountsWrapper](../classes/_wrappers_accounts_.accountswrapper.md)

  ↳ [AttestationsWrapper](../classes/_wrappers_attestations_.attestationswrapper.md)

  ↳ [BlockchainParametersWrapper](../classes/_wrappers_blockchainparameters_.blockchainparameterswrapper.md)

  ↳ [DoubleSigningSlasherWrapper](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md)

  ↳ [ValidatorsWrapper](../classes/_wrappers_validators_.validatorswrapper.md)

  ↳ [DowntimeSlasherWrapper](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md)

  ↳ [ElectionWrapper](../classes/_wrappers_election_.electionwrapper.md)

  ↳ [EscrowWrapper](../classes/_wrappers_escrow_.escrowwrapper.md)

  ↳ [ExchangeWrapper](../classes/_wrappers_exchange_.exchangewrapper.md)

  ↳ [GasPriceMinimumWrapper](../classes/_wrappers_gaspriceminimum_.gaspriceminimumwrapper.md)

  ↳ [GoldTokenWrapper](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md)

  ↳ [GovernanceWrapper](../classes/_wrappers_governance_.governancewrapper.md)

  ↳ [LockedGoldWrapper](../classes/_wrappers_lockedgold_.lockedgoldwrapper.md)

  ↳ [MultiSigWrapper](../classes/_wrappers_multisig_.multisigwrapper.md)

  ↳ [ReserveWrapper](../classes/_wrappers_reserve_.reservewrapper.md)

  ↳ [SortedOraclesWrapper](../classes/_wrappers_sortedoracles_.sortedoracleswrapper.md)

  ↳ [StableTokenWrapper](../classes/_wrappers_stabletokenwrapper_.stabletokenwrapper.md)

  ↳ [ReleaseGoldWrapper](../classes/_wrappers_releasegold_.releasegoldwrapper.md)

## Index

### Constructors

* [constructor](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

### Properties

* [events](../classes/_wrappers_basewrapper_.basewrapper.md#events)

### Accessors

* [address](../classes/_wrappers_basewrapper_.basewrapper.md#address)

## Constructors

### constructor

+ **new BaseWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: T\): [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:19_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L19)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | T |

**Returns:** [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)

## Properties

### events

• **events**: _any_ = this.contract.events

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:33_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L33)

## Accessors

### address

• **get address**\(\): _string_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:23_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L23)

Contract address

**Returns:** _string_

