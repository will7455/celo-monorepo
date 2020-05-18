# wallets/ledger-wallet

## Index

### Classes

* [LedgerWallet](../classes/_wallets_ledger_wallet_.ledgerwallet.md)

### Variables

* [CELO\_BASE\_DERIVATION\_PATH](_wallets_ledger_wallet_.md#const-celo_base_derivation_path)

### Functions

* [newLedgerWalletWithSetup](_wallets_ledger_wallet_.md#newledgerwalletwithsetup)

## Variables

### `Const` CELO\_BASE\_DERIVATION\_PATH

• **CELO\_BASE\_DERIVATION\_PATH**: _"44'/52752'/0'/0"_ = "44'/52752'/0'/0"

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:22_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L22)

## Functions

### newLedgerWalletWithSetup

▸ **newLedgerWalletWithSetup**\(`transport`: any, `derivationPathIndexes?`: number\[\], `baseDerivationPath?`: undefined \| string\): _Promise‹_[_LedgerWallet_](../classes/_wallets_ledger_wallet_.ledgerwallet.md)_›_

_Defined in_ [_contractkit/src/wallets/ledger-wallet.ts:25_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wallets/ledger-wallet.ts#L25)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `transport` | any |
| `derivationPathIndexes?` | number\[\] |
| `baseDerivationPath?` | undefined \| string |

**Returns:** _Promise‹_[_LedgerWallet_](../classes/_wallets_ledger_wallet_.ledgerwallet.md)_›_

