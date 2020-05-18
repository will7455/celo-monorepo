# IdentityMetadataWrapper

## Hierarchy

* **IdentityMetadataWrapper**

## Index

### Constructors

* [constructor](../classes/_identity_metadata_.identitymetadatawrapper.md#constructor)

### Properties

* [data](../classes/_identity_metadata_.identitymetadatawrapper.md#data)

### Accessors

* [claims](../classes/_identity_metadata_.identitymetadatawrapper.md#claims)

### Methods

* [addClaim](../classes/_identity_metadata_.identitymetadatawrapper.md#addclaim)
* [filterClaims](../classes/_identity_metadata_.identitymetadatawrapper.md#filterclaims)
* [findClaim](../classes/_identity_metadata_.identitymetadatawrapper.md#findclaim)
* [hashOfClaims](../classes/_identity_metadata_.identitymetadatawrapper.md#hashofclaims)
* [toString](../classes/_identity_metadata_.identitymetadatawrapper.md#tostring)
* [fetchFromURL](../classes/_identity_metadata_.identitymetadatawrapper.md#static-fetchfromurl)
* [fromEmpty](../classes/_identity_metadata_.identitymetadatawrapper.md#static-fromempty)
* [fromFile](../classes/_identity_metadata_.identitymetadatawrapper.md#static-fromfile)
* [fromRawString](../classes/_identity_metadata_.identitymetadatawrapper.md#static-fromrawstring)

## Constructors

### constructor

+ **new IdentityMetadataWrapper**\(`data`: [IdentityMetadata](_identity_metadata_.md#identitymetadata)\): [_IdentityMetadataWrapper_](../classes/_identity_metadata_.identitymetadatawrapper.md)

_Defined in_ [_contractkit/src/identity/metadata.ts:80_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L80)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `data` | [IdentityMetadata](_identity_metadata_.md#identitymetadata) |

**Returns:** [_IdentityMetadataWrapper_](../classes/_identity_metadata_.identitymetadatawrapper.md)

## Properties

### data

• **data**: [_IdentityMetadata_](_identity_metadata_.md#identitymetadata)

_Defined in_ [_contractkit/src/identity/metadata.ts:25_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L25)

## Accessors

### claims

• **get claims**\(\): _object \| object \| object \| object \| object\[\]_

_Defined in_ [_contractkit/src/identity/metadata.ts:86_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L86)

**Returns:** _object \| object \| object \| object \| object\[\]_

## Methods

### addClaim

▸ **addClaim**\(`claim`: [Claim](_identity_claims_claim_.md#claim), `signer`: Signer\): _Promise‹void›_

_Defined in_ [_contractkit/src/identity/metadata.ts:101_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L101)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `claim` | [Claim](_identity_claims_claim_.md#claim) |
| `signer` | Signer |

**Returns:** _Promise‹void›_

### filterClaims

▸ **filterClaims**&lt;**K**&gt;\(`type`: K\): _Array‹_[_ClaimPayload_](_identity_claims_claim_.md#claimpayload)_‹K››_

_Defined in_ [_contractkit/src/identity/metadata.ts:128_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L128)

**Type parameters:**

▪ **K**: [_ClaimTypes_](../enums/_identity_claims_types_.claimtypes.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `type` | K |

**Returns:** _Array‹_[_ClaimPayload_](_identity_claims_claim_.md#claimpayload)_‹K››_

### findClaim

▸ **findClaim**&lt;**K**&gt;\(`type`: K\): [_ClaimPayload_](_identity_claims_claim_.md#claimpayload)_‹K› \| undefined_

_Defined in_ [_contractkit/src/identity/metadata.ts:124_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L124)

**Type parameters:**

▪ **K**: [_ClaimTypes_](../enums/_identity_claims_types_.claimtypes.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `type` | K |

**Returns:** [_ClaimPayload_](_identity_claims_claim_.md#claimpayload)_‹K› \| undefined_

### hashOfClaims

▸ **hashOfClaims**\(\): _string_

_Defined in_ [_contractkit/src/identity/metadata.ts:90_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L90)

**Returns:** _string_

### toString

▸ **toString**\(\): _string_

_Defined in_ [_contractkit/src/identity/metadata.ts:94_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L94)

**Returns:** _string_

### `Static` fetchFromURL

▸ **fetchFromURL**\(`url`: string\): _Promise‹_[_IdentityMetadataWrapper_](../classes/_identity_metadata_.identitymetadatawrapper.md)_‹››_

_Defined in_ [_contractkit/src/identity/metadata.ts:37_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L37)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `url` | string |

**Returns:** _Promise‹_[_IdentityMetadataWrapper_](../classes/_identity_metadata_.identitymetadatawrapper.md)_‹››_

### `Static` fromEmpty

▸ **fromEmpty**\(`address`: string\): [_IdentityMetadataWrapper_](../classes/_identity_metadata_.identitymetadatawrapper.md)_‹›_

_Defined in_ [_contractkit/src/identity/metadata.ts:27_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L27)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** [_IdentityMetadataWrapper_](../classes/_identity_metadata_.identitymetadatawrapper.md)_‹›_

### `Static` fromFile

▸ **fromFile**\(`path`: string\): [_IdentityMetadataWrapper_](../classes/_identity_metadata_.identitymetadatawrapper.md)_‹›_

_Defined in_ [_contractkit/src/identity/metadata.ts:45_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L45)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `path` | string |

**Returns:** [_IdentityMetadataWrapper_](../classes/_identity_metadata_.identitymetadatawrapper.md)_‹›_

### `Static` fromRawString

▸ **fromRawString**\(`rawData`: string\): [_IdentityMetadataWrapper_](../classes/_identity_metadata_.identitymetadatawrapper.md)_‹›_

_Defined in_ [_contractkit/src/identity/metadata.ts:49_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L49)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `rawData` | string |

**Returns:** [_IdentityMetadataWrapper_](../classes/_identity_metadata_.identitymetadatawrapper.md)_‹›_

