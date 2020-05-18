---
description: Interact with on-chain governance proposals and hotfixes
---

# Governance

## Approve

Approve a dequeued governance proposal

```text
USAGE
  $ celocli governance:approve

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Approver's address
  --proposalID=proposalID                            (required) UUID of proposal to approve
  --useMultiSig                                      True means the request will be sent through multisig.

EXAMPLES
  approve --proposalID 99 --from 0x5409ed021d9299bf6814279a6a1411a7e866a631
  approve --proposalID 99 --from 0x5409ed021d9299bf6814279a6a1411a7e866a631 --useMultiSig
```

_See code:_ [_packages/cli/src/commands/governance/approve.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/approve.ts)

## Approvehotfix

Approve a governance hotfix

```text
USAGE
  $ celocli governance:approvehotfix

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Approver's address
  --hash=hash                                        (required) Hash of hotfix transactions

EXAMPLE
  approvehotfix --hash 0x614dccb5ac13cba47c2430bdee7829bb8c8f3603a8ace22e7680d317b39e3658 --from
  0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/governance/approvehotfix.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/approvehotfix.ts)

## Dequeue

Try to dequeue governance proposal

```text
USAGE
  $ celocli governance:dequeue

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) From address

EXAMPLE
  dequeue --from 0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/governance/dequeue.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/dequeue.ts)

## Execute

Execute a passing governance proposal

```text
USAGE
  $ celocli governance:execute

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Executor's address
  --proposalID=proposalID                            (required) UUID of proposal to execute

EXAMPLE
  execute --proposalID 99 --from 0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/governance/execute.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/execute.ts)

## Executehotfix

Execute a governance hotfix prepared for the current epoch

```text
USAGE
  $ celocli governance:executehotfix

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Executors's address
  --jsonTransactions=jsonTransactions                (required) Path to json transactions
  --salt=salt                                        (required) Secret salt associated with hotfix

EXAMPLE
  executehotfix --jsonTransactions ./transactions.json --salt
  0x614dccb5ac13cba47c2430bdee7829bb8c8f3603a8ace22e7680d317b39e3658 --from 0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/governance/executehotfix.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/executehotfix.ts)

## List

List live governance proposals \(queued and ongoing\)

```text
USAGE
  $ celocli governance:list

EXAMPLE
  list
```

_See code:_ [_packages/cli/src/commands/governance/list.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/list.ts)

## Preparehotfix

Prepare a governance hotfix for execution in the current epoch

```text
USAGE
  $ celocli governance:preparehotfix

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Preparer's address
  --hash=hash                                        (required) Hash of hotfix transactions

EXAMPLE
  preparehotfix --hash 0x614dccb5ac13cba47c2430bdee7829bb8c8f3603a8ace22e7680d317b39e3658 --from
  0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/governance/preparehotfix.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/preparehotfix.ts)

## Propose

Submit a governance proposal

```text
USAGE
  $ celocli governance:propose

OPTIONS
  --deposit=deposit                                  (required) Amount of Gold to attach to proposal

  --descriptionURL=descriptionURL                    (required) A URL where further information about the proposal can
                                                     be viewed

  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Proposer's address

  --jsonTransactions=jsonTransactions                (required) Path to json transactions

EXAMPLE
  propose --jsonTransactions ./transactions.json --deposit 10000 --from 0x5409ed021d9299bf6814279a6a1411a7e866a631
  --descriptionURL https://gist.github.com/yorhodes/46430eacb8ed2f73f7bf79bef9d58a33
```

_See code:_ [_packages/cli/src/commands/governance/propose.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/propose.ts)

## Upvote

Upvote a queued governance proposal

```text
USAGE
  $ celocli governance:upvote

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Upvoter's address
  --proposalID=proposalID                            (required) UUID of proposal to upvote

EXAMPLE
  upvote --proposalID 99 --from 0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/governance/upvote.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/upvote.ts)

## View

View governance proposal information from ID

```text
USAGE
  $ celocli governance:view

OPTIONS
  --proposalID=proposalID  (required) UUID of proposal to view
  --raw                    Display proposal in raw bytes format

EXAMPLES
  view --proposalID 99
  view --proposalID 99 --raw
```

_See code:_ [_packages/cli/src/commands/governance/view.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/view.ts)

## Viewhotfix

View information associated with hotfix

```text
USAGE
  $ celocli governance:viewhotfix

OPTIONS
  --hash=hash  (required) Hash of hotfix transactions
  --notyet     Whether to list validators who have or have not yet whitelisted

EXAMPLES
  viewhotfix --hash 0x614dccb5ac13cba47c2430bdee7829bb8c8f3603a8ace22e7680d317b39e3658
  viewhotfix --hash 0x614dccb5ac13cba47c2430bdee7829bb8c8f3603a8ace22e7680d317b39e3658 --notyet
```

_See code:_ [_packages/cli/src/commands/governance/viewhotfix.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/viewhotfix.ts)

## Vote

Vote on an approved governance proposal

```text
USAGE
  $ celocli governance:vote

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Voter's address
  --proposalID=proposalID                            (required) UUID of proposal to vote on
  --value=(Abstain|No|Yes)                           (required) Vote

EXAMPLE
  vote --proposalID 99 --value Yes --from 0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/governance/vote.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/vote.ts)

## Whitelisthotfix

Whitelist a governance hotfix

```text
USAGE
  $ celocli governance:whitelisthotfix

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Whitelister's address
  --hash=hash                                        (required) Hash of hotfix transactions

EXAMPLE
  whitelisthotfix --hash 0x614dccb5ac13cba47c2430bdee7829bb8c8f3603a8ace22e7680d317b39e3658 --from
  0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/governance/whitelisthotfix.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/governance/whitelisthotfix.ts)

