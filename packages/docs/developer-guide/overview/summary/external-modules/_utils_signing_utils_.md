# utils/signing-utils

## Index

### Interfaces

* [RLPEncodedTx](../interfaces/_utils_signing_utils_.rlpencodedtx.md)

### Functions

* [chainIdTransformationForSigning](_utils_signing_utils_.md#chainidtransformationforsigning)
* [encodeTransaction](_utils_signing_utils_.md#encodetransaction)
* [getHashFromEncoded](_utils_signing_utils_.md#gethashfromencoded)
* [recoverTransaction](_utils_signing_utils_.md#recovertransaction)
* [rlpEncodedTx](_utils_signing_utils_.md#rlpencodedtx)
* [signEncodedTransaction](_utils_signing_utils_.md#signencodedtransaction)
* [signTransaction](_utils_signing_utils_.md#signtransaction)
* [signatureFormatter](_utils_signing_utils_.md#signatureformatter)

## Functions

### chainIdTransformationForSigning

▸ **chainIdTransformationForSigning**\(`chainId`: number\): _number_

_Defined in_ [_contractkit/src/utils/signing-utils.ts:39_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L39)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `chainId` | number |

**Returns:** _number_

### encodeTransaction

▸ **encodeTransaction**\(`rlpEncoded`: [RLPEncodedTx](../interfaces/_utils_signing_utils_.rlpencodedtx.md), `signature`: object\): _Promise‹EncodedTransaction›_

_Defined in_ [_contractkit/src/utils/signing-utils.ts:135_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L135)

**Parameters:**

▪ **rlpEncoded**: [_RLPEncodedTx_](../interfaces/_utils_signing_utils_.rlpencodedtx.md)

▪ **signature**: _object_

| Name | Type |
| :--- | :--- |
| `r` | string |
| `s` | string |
| `v` | string |

**Returns:** _Promise‹EncodedTransaction›_

### getHashFromEncoded

▸ **getHashFromEncoded**\(`rlpEncode`: string\): _string_

_Defined in_ [_contractkit/src/utils/signing-utils.ts:43_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L43)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `rlpEncode` | string |

**Returns:** _string_

### recoverTransaction

▸ **recoverTransaction**\(`rawTx`: string\): _\[Tx, string\]_

_Defined in_ [_contractkit/src/utils/signing-utils.ts:178_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L178)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `rawTx` | string |

**Returns:** _\[Tx, string\]_

### rlpEncodedTx

▸ **rlpEncodedTx**\(`tx`: Tx\): [_RLPEncodedTx_](../interfaces/_utils_signing_utils_.rlpencodedtx.md)

_Defined in_ [_contractkit/src/utils/signing-utils.ts:55_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L55)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `tx` | Tx |

**Returns:** [_RLPEncodedTx_](../interfaces/_utils_signing_utils_.rlpencodedtx.md)

### signEncodedTransaction

▸ **signEncodedTransaction**\(`privateKey`: string, `rlpEncoded`: [RLPEncodedTx](../interfaces/_utils_signing_utils_.rlpencodedtx.md)\): _object_

_Defined in_ [_contractkit/src/utils/signing-utils.ts:106_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L106)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `privateKey` | string |
| `rlpEncoded` | [RLPEncodedTx](../interfaces/_utils_signing_utils_.rlpencodedtx.md) |

**Returns:** _object_

* **r**: _string_
* **s**: _string_
* **v**: _string_

### signTransaction

▸ **signTransaction**\(`tx`: Tx, `privateKey`: string\): _Promise‹EncodedTransaction›_

_Defined in_ [_contractkit/src/utils/signing-utils.ts:165_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L165)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `tx` | Tx |
| `privateKey` | string |

**Returns:** _Promise‹EncodedTransaction›_

### signatureFormatter

▸ **signatureFormatter**\(`signature`: object\): _object_

_Defined in_ [_contractkit/src/utils/signing-utils.ts:123_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L123)

**Parameters:**

▪ **signature**: _object_

| Name | Type |
| :--- | :--- |
| `r` | string |
| `s` | string |
| `v` | string |

**Returns:** _object_

* **r**: _string_
* **s**: _string_
* **v**: _string_

