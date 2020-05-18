# wrappers/BaseWrapper

## Index

### Classes

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)
* [CeloTransactionObject](../classes/_wrappers_basewrapper_.celotransactionobject.md)

### Interfaces

* [Filter](../interfaces/_wrappers_basewrapper_.filter.md)

### Type aliases

* [CeloTransactionParams](_wrappers_basewrapper_.md#celotransactionparams)

### Variables

* [stringToBuffer](_wrappers_basewrapper_.md#const-stringtobuffer)

### Functions

* [bufferToBytes](_wrappers_basewrapper_.md#const-buffertobytes)
* [bufferToString](_wrappers_basewrapper_.md#const-buffertostring)
* [bytesToString](_wrappers_basewrapper_.md#const-bytestostring)
* [identity](_wrappers_basewrapper_.md#const-identity)
* [proxyCall](_wrappers_basewrapper_.md#proxycall)
* [proxySend](_wrappers_basewrapper_.md#proxysend)
* [stringIdentity](_wrappers_basewrapper_.md#const-stringidentity)
* [stringToBytes](_wrappers_basewrapper_.md#const-stringtobytes)
* [toTransactionObject](_wrappers_basewrapper_.md#totransactionobject)
* [tupleParser](_wrappers_basewrapper_.md#tupleparser)
* [valueToBigNumber](_wrappers_basewrapper_.md#const-valuetobignumber)
* [valueToFixidityString](_wrappers_basewrapper_.md#const-valuetofixiditystring)
* [valueToFrac](_wrappers_basewrapper_.md#const-valuetofrac)
* [valueToInt](_wrappers_basewrapper_.md#const-valuetoint)
* [valueToString](_wrappers_basewrapper_.md#const-valuetostring)

## Type aliases

### CeloTransactionParams

Ƭ **CeloTransactionParams**: _Omit‹Tx, "data"›_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:239_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L239)

## Variables

### `Const` stringToBuffer

• **stringToBuffer**: _function_ = hexToBuffer

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:51_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L51)

#### Type declaration:

▸ \(`input`: string\): _Buffer_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | string |

## Functions

### `Const` bufferToBytes

▸ **bufferToBytes**\(`input`: Buffer\): _string \| number\[\]_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:61_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L61)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | Buffer |

**Returns:** _string \| number\[\]_

### `Const` bufferToString

▸ **bufferToString**\(`buf`: Buffer\): _string_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:53_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L53)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `buf` | Buffer |

**Returns:** _string_

### `Const` bytesToString

▸ **bytesToString**\(`input`: SolBytes\): _string_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:63_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L63)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | SolBytes |

**Returns:** _string_

### `Const` identity

▸ **identity**&lt;**A**&gt;\(`a`: A\): _A_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:68_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L68)

Identity Parser

**Type parameters:**

▪ **A**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `a` | A |

**Returns:** _A_

### proxyCall

▸ **proxyCall**&lt;**InputArgs**, **ParsedInputArgs**, **PreParsedOutput**, **Output**&gt;\(`methodFn`: Method‹ParsedInputArgs, PreParsedOutput›, `parseInputArgs`: function, `parseOutput`: function\): _function_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:137_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L137)

Creates a proxy to call a web3 native contract method.

There are 4 cases:

* methodFn
* parseInputArgs =&gt; methodFn
* parseInputArgs =&gt; methodFn =&gt; parseOutput
* methodFn =&gt; parseOutput

**Type parameters:**

▪ **InputArgs**: _any\[\]_

▪ **ParsedInputArgs**: _any\[\]_

▪ **PreParsedOutput**

▪ **Output**

**Parameters:**

▪ **methodFn**: _Method‹ParsedInputArgs, PreParsedOutput›_

Web3 methods function

▪ **parseInputArgs**: _function_

parseInputArgs function, tranforms arguments into `methodFn` expected inputs

▸ \(...`args`: InputArgs\): _ParsedInputArgs_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

▪ **parseOutput**: _function_

parseOutput function, transforms `methodFn` output into proxy return

▸ \(`o`: PreParsedOutput\): _Output_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `o` | PreParsedOutput |

**Returns:** _function_

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

▸ **proxyCall**&lt;**InputArgs**, **PreParsedOutput**, **Output**&gt;\(`methodFn`: Method‹InputArgs, PreParsedOutput›, `x`: undefined, `parseOutput`: function\): _function_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:147_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L147)

**Type parameters:**

▪ **InputArgs**: _any\[\]_

▪ **PreParsedOutput**

▪ **Output**

**Parameters:**

▪ **methodFn**: _Method‹InputArgs, PreParsedOutput›_

▪ **x**: _undefined_

▪ **parseOutput**: _function_

▸ \(`o`: PreParsedOutput\): _Output_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `o` | PreParsedOutput |

**Returns:** _function_

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

▸ **proxyCall**&lt;**InputArgs**, **ParsedInputArgs**, **Output**&gt;\(`methodFn`: Method‹ParsedInputArgs, Output›, `parseInputArgs`: function\): _function_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:152_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L152)

**Type parameters:**

▪ **InputArgs**: _any\[\]_

▪ **ParsedInputArgs**: _any\[\]_

▪ **Output**

**Parameters:**

▪ **methodFn**: _Method‹ParsedInputArgs, Output›_

▪ **parseInputArgs**: _function_

▸ \(...`args`: InputArgs\): _ParsedInputArgs_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

**Returns:** _function_

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

▸ **proxyCall**&lt;**InputArgs**, **Output**&gt;\(`methodFn`: Method‹InputArgs, Output›\): _function_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:156_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L156)

**Type parameters:**

▪ **InputArgs**: _any\[\]_

▪ **Output**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `methodFn` | Method‹InputArgs, Output› |

**Returns:** _function_

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### proxySend

▸ **proxySend**&lt;**InputArgs**, **ParsedInputArgs**, **Output**&gt;\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), ...`sendArgs`: ProxySendArgs‹InputArgs, ParsedInputArgs, Output›\): _function_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:217_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L217)

Creates a proxy to send a tx on a web3 native contract method.

There are 2 cases:

* call methodFn \(no pre or post parsing\)
* preParse arguments & call methodFn

**Type parameters:**

▪ **InputArgs**: _any\[\]_

▪ **ParsedInputArgs**: _any\[\]_

▪ **Output**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `...sendArgs` | ProxySendArgs‹InputArgs, ParsedInputArgs, Output› |

**Returns:** _function_

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### `Const` stringIdentity

▸ **stringIdentity**\(`x`: string\): _string_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:69_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L69)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `x` | string |

**Returns:** _string_

### `Const` stringToBytes

▸ **stringToBytes**\(`input`: string\): _string \| number\[\]_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:59_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L59)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | string |

**Returns:** _string \| number\[\]_

### toTransactionObject

▸ **toTransactionObject**&lt;**O**&gt;\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `txo`: TransactionObject‹O›, `defaultParams?`: Omit‹Tx, "data"›\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹O›_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:231_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L231)

**Type parameters:**

▪ **O**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `txo` | TransactionObject‹O› |
| `defaultParams?` | Omit‹Tx, "data"› |

**Returns:** [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹O›_

### tupleParser

▸ **tupleParser**&lt;**A0**, **B0**&gt;\(`parser0`: Parser‹A0, B0›\): _function_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:75_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L75)

Tuple parser Useful to map different input arguments

**Type parameters:**

▪ **A0**

▪ **B0**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `parser0` | Parser‹A0, B0› |

**Returns:** _function_

▸ \(...`args`: \[A0\]\): _\[B0\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | \[A0\] |

▸ **tupleParser**&lt;**A0**, **B0**, **A1**, **B1**&gt;\(`parser0`: Parser‹A0, B0›, `parser1`: Parser‹A1, B1›\): _function_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:76_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L76)

**Type parameters:**

▪ **A0**

▪ **B0**

▪ **A1**

▪ **B1**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `parser0` | Parser‹A0, B0› |
| `parser1` | Parser‹A1, B1› |

**Returns:** _function_

▸ \(...`args`: \[A0, A1\]\): _\[B0, B1\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | \[A0, A1\] |

▸ **tupleParser**&lt;**A0**, **B0**, **A1**, **B1**, **A2**, **B2**&gt;\(`parser0`: Parser‹A0, B0›, `parser1`: Parser‹A1, B1›, `parser2`: Parser‹A2, B2›\): _function_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:80_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L80)

**Type parameters:**

▪ **A0**

▪ **B0**

▪ **A1**

▪ **B1**

▪ **A2**

▪ **B2**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `parser0` | Parser‹A0, B0› |
| `parser1` | Parser‹A1, B1› |
| `parser2` | Parser‹A2, B2› |

**Returns:** _function_

▸ \(...`args`: \[A0, A1, A2\]\): _\[B0, B1, B2\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | \[A0, A1, A2\] |

▸ **tupleParser**&lt;**A0**, **B0**, **A1**, **B1**, **A2**, **B2**, **A3**, **B3**&gt;\(`parser0`: Parser‹A0, B0›, `parser1`: Parser‹A1, B1›, `parser2`: Parser‹A2, B2›, `parser3`: Parser‹A3, B3›\): _function_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:85_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L85)

**Type parameters:**

▪ **A0**

▪ **B0**

▪ **A1**

▪ **B1**

▪ **A2**

▪ **B2**

▪ **A3**

▪ **B3**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `parser0` | Parser‹A0, B0› |
| `parser1` | Parser‹A1, B1› |
| `parser2` | Parser‹A2, B2› |
| `parser3` | Parser‹A3, B3› |

**Returns:** _function_

▸ \(...`args`: \[A0, A1, A2, A3\]\): _\[B0, B1, B2, B3\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | \[A0, A1, A2, A3\] |

### `Const` valueToBigNumber

▸ **valueToBigNumber**\(`input`: BigNumber.Value\): _BigNumber‹›_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:36_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L36)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | BigNumber.Value |

**Returns:** _BigNumber‹›_

### `Const` valueToFixidityString

▸ **valueToFixidityString**\(`input`: BigNumber.Value\): _string_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:40_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L40)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | BigNumber.Value |

**Returns:** _string_

### `Const` valueToFrac

▸ **valueToFrac**\(`numerator`: BigNumber.Value, `denominator`: BigNumber.Value\): _BigNumber‹›_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:48_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L48)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `numerator` | BigNumber.Value |
| `denominator` | BigNumber.Value |

**Returns:** _BigNumber‹›_

### `Const` valueToInt

▸ **valueToInt**\(`input`: BigNumber.Value\): _number_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:43_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L43)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | BigNumber.Value |

**Returns:** _number_

### `Const` valueToString

▸ **valueToString**\(`input`: BigNumber.Value\): _string_

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:38_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L38)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | BigNumber.Value |

**Returns:** _string_

