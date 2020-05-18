# MultiSigWrapper

Contract for handling multisig actions

## Hierarchy

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)‹MultiSig›

  ↳ **MultiSigWrapper**

## Index

### Constructors

* [constructor](../classes/_wrappers_multisig_.multisigwrapper.md#constructor)

### Properties

* [events](../classes/_wrappers_multisig_.multisigwrapper.md#events)
* [getInternalRequired](../classes/_wrappers_multisig_.multisigwrapper.md#getinternalrequired)
* [getOwners](../classes/_wrappers_multisig_.multisigwrapper.md#getowners)
* [getRequired](../classes/_wrappers_multisig_.multisigwrapper.md#getrequired)
* [getTransactionCount](../classes/_wrappers_multisig_.multisigwrapper.md#gettransactioncount)
* [isowner](../classes/_wrappers_multisig_.multisigwrapper.md#isowner)

### Accessors

* [address](../classes/_wrappers_multisig_.multisigwrapper.md#address)

### Methods

* [getTransaction](../classes/_wrappers_multisig_.multisigwrapper.md#gettransaction)
* [getTransactions](../classes/_wrappers_multisig_.multisigwrapper.md#gettransactions)
* [submitOrConfirmTransaction](../classes/_wrappers_multisig_.multisigwrapper.md#submitorconfirmtransaction)

## Constructors

### constructor

+ **new MultiSigWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: MultiSig\): [_MultiSigWrapper_](../classes/_wrappers_multisig_.multisigwrapper.md)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:19_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L19)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | MultiSig |

**Returns:** [_MultiSigWrapper_](../classes/_wrappers_multisig_.multisigwrapper.md)

## Properties

### events

• **events**: _any_ = this.contract.events

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_events_](../classes/_wrappers_basewrapper_.basewrapper.md#events)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:33_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L33)

### getInternalRequired

• **getInternalRequired**: _function_ = proxyCall\( this.contract.methods.internalRequired, undefined, valueToBigNumber \)

_Defined in_ [_contractkit/src/wrappers/MultiSig.ts:58_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/MultiSig.ts#L58)

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getOwners

• **getOwners**: _function_ = proxyCall\(this.contract.methods.getOwners\)

_Defined in_ [_contractkit/src/wrappers/MultiSig.ts:56_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/MultiSig.ts#L56)

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getRequired

• **getRequired**: _function_ = proxyCall\(this.contract.methods.required, undefined, valueToBigNumber\)

_Defined in_ [_contractkit/src/wrappers/MultiSig.ts:57_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/MultiSig.ts#L57)

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getTransactionCount

• **getTransactionCount**: _function_ = proxyCall\(this.contract.methods.transactionCount, undefined, valueToInt\)

_Defined in_ [_contractkit/src/wrappers/MultiSig.ts:63_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/MultiSig.ts#L63)

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isowner

• **isowner**: _function_ = proxyCall\(this.contract.methods.isOwner\)

_Defined in_ [_contractkit/src/wrappers/MultiSig.ts:55_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/MultiSig.ts#L55)

#### Type declaration:

▸ \(`owner`: [Address](_base_.md#address)\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `owner` | [Address](_base_.md#address) |

## Accessors

### address

• **get address**\(\): _string_

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_address_](../classes/_wrappers_basewrapper_.basewrapper.md#address)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:23_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L23)

Contract address

**Returns:** _string_

## Methods

### getTransaction

▸ **getTransaction**\(`i`: number\): _Promise‹_[_TransactionData_](../interfaces/_wrappers_multisig_.transactiondata.md)_›_

_Defined in_ [_contractkit/src/wrappers/MultiSig.ts:65_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/MultiSig.ts#L65)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `i` | number |

**Returns:** _Promise‹_[_TransactionData_](../interfaces/_wrappers_multisig_.transactiondata.md)_›_

### getTransactions

▸ **getTransactions**\(\): _Promise‹_[_TransactionData_](../interfaces/_wrappers_multisig_.transactiondata.md)_\[\]›_

_Defined in_ [_contractkit/src/wrappers/MultiSig.ts:84_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/MultiSig.ts#L84)

**Returns:** _Promise‹_[_TransactionData_](../interfaces/_wrappers_multisig_.transactiondata.md)_\[\]›_

### submitOrConfirmTransaction

▸ **submitOrConfirmTransaction**\(`destination`: string, `txObject`: TransactionObject‹any›\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void› \|_ [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹string››_

_Defined in_ [_contractkit/src/wrappers/MultiSig.ts:32_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/MultiSig.ts#L32)

Allows an owner to submit and confirm a transaction. If an unexecuted transaction matching `txObject` exists on the multisig, adds a confirmation to that tx ID. Otherwise, submits the `txObject` to the multisig and add confirmation.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `destination` | string |
| `txObject` | TransactionObject‹any› |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void› \|_ [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹string››_

