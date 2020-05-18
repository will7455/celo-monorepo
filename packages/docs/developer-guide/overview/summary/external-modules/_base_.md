# base

## Index

### Enumerations

* [CeloContract](../enums/_base_.celocontract.md)

### Type aliases

* [Address](_base_.md#address)
* [CeloToken](_base_.md#celotoken)

### Variables

* [AllContracts](_base_.md#const-allcontracts)
* [NULL\_ADDRESS](_base_.md#const-null_address)

## Type aliases

### Address

Ƭ **Address**: _string_

_Defined in_ [_contractkit/src/base.ts:1_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/base.ts#L1)

### CeloToken

Ƭ **CeloToken**: [_GoldToken_](../enums/_base_.celocontract.md#goldtoken) _\|_ [_StableToken_](../enums/_base_.celocontract.md#stabletoken)

_Defined in_ [_contractkit/src/base.ts:29_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/base.ts#L29)

## Variables

### `Const` AllContracts

• **AllContracts**: [_CeloContract_](../enums/_base_.celocontract.md)_\[\]_ = Object.keys\(CeloContract\).map\( \(k\) =&gt; \(CeloContract as any\)\[k as any\] \) as CeloContract\[\]

_Defined in_ [_contractkit/src/base.ts:31_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/base.ts#L31)

### `Const` NULL\_ADDRESS

• **NULL\_ADDRESS**: _string_ = '0x0000000000000000000000000000000000000000' as Address

_Defined in_ [_contractkit/src/base.ts:35_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/base.ts#L35)

