import { newReleaseGold } from '@celo/contractkit/lib/generated/ReleaseGold'
import { ReleaseGoldWrapper } from '@celo/contractkit/lib/wrappers/ReleaseGold'
import { gql } from 'apollo-server-express'
import { BigNumber } from 'bignumber.js'
import { DataSources } from './apolloServer'
function fromWei(num: BigNumber) {
  return num.div(new BigNumber(10).exponentiatedBy(18))
}
export const typeDefs = gql`
  type ReleaseGoldContract {
    address: String!
    totalBalance: String!
    totalWithdrawn: String!
    remainingLockedBalance: String!
    remainingUnlockedBalance: String!
    currentReleasedTotalAmount: String!
    nonVotingLockedGold: String!
    maxDistribution: String!
    requiresDistribution: Boolean!
    releaseSchedule: ReleaseSchedule!
    votingRecord: [VotingRecord!]
  }

  type ReleaseSchedule {
    amountReleasedPerPeriod: String!
    releaseStartTime: Int!
    releaseCliff: Int!
    numReleasePeriods: Int!
    releasePeriod: Int!
  }

  type VotingRecord {
    activeVoteValue: String!
    pendingVoteValue: String!
    groupAddress: String!
  }

  type Query {
    releaseGold(address: String!): ReleaseGoldContract
  }
`

interface Context {
  dataSources: DataSources
  localCurrencyCode?: string
}

export const resolvers = {
  Query: {
    releaseGold: async (
      _source: any,
      args: { address: string },
      { dataSources: { contractKit } }: Context
    ) => {
      const res = await contractKit.fetchFromCache(
        `query.releasegold.${args.address}`,
        async () => {
          const kit = contractKit.kit
          const address = args.address as string
          const contract = new ReleaseGoldWrapper(kit, newReleaseGold(kit.web3, address))

          const lockedgold = await kit.contracts.getLockedGold()
          const election = await kit.contracts.getElection()

          const [
            totalWithdrawn,
            totalBalance,
            remainingUnlockedBalance,
            remainingLockedBalance,
            currentReleasedTotalAmount,
            releaseSchedule,
            nonVotingLockedGold,
            votingRecord,
            maxDistribution,
          ] = await Promise.all([
            contract.getTotalWithdrawn(),
            contract.getTotalBalance(),
            contract.getRemainingUnlockedBalance(),
            contract.getRemainingLockedBalance(),
            contract.getCurrentReleasedTotalAmount(),
            contract.getReleaseSchedule(),
            lockedgold.getAccountNonvotingLockedGold(address),
            election.getVoter(address),
            contract.getMaxDistribution(),
          ])

          const requiresDistribution = !maxDistribution.isEqualTo(
            new BigNumber(2).exponentiatedBy(256).minus(1)
          )

          const { amountReleasedPerPeriod, ...restSchedule } = releaseSchedule
          return JSON.stringify({
            address,
            totalWithdrawn: fromWei(totalWithdrawn).toString(),
            totalBalance: fromWei(totalBalance).toString(),
            remainingLockedBalance: fromWei(remainingLockedBalance).toString(),
            remainingUnlockedBalance: fromWei(remainingUnlockedBalance).toString(),
            currentReleasedTotalAmount: fromWei(currentReleasedTotalAmount).toString(),
            releaseSchedule: {
              amountReleasedPerPeriod: fromWei(amountReleasedPerPeriod).toString(),
              ...restSchedule,
            },
            nonVotingLockedGold: fromWei(nonVotingLockedGold).toString(),
            votingRecord: votingRecord.votes.map((_) => ({
              activeVoteValue: fromWei(_.active).toString(),
              pendingVoteValue: fromWei(_.pending).toString(),
              groupAddress: _.group,
            })),
            maxDistribution: fromWei(maxDistribution).toString(),
            requiresDistribution,
          })
        }
      )
      return JSON.parse(res)
    },
  },
}
