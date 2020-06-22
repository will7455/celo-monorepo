import { BLS12377TestContract, BLS12377TestInstance } from 'types'
import { ensureLeading0x } from '@celo/utils/lib/address'
import * as rlp from 'rlp'

const BLS12377Test: BLS12377TestContract = artifacts.require('BLS12377Test')
contract('BLS12377', () => {
  let bls12377: BLS12377TestInstance

  beforeEach(async () => {
    bls12377 = await BLS12377Test.new()
  })

  describe('#hashToGroup', () => {
    it('should hash to group', async () => {
      const input = ensureLeading0x(rlp.encode('test').toString('hex'))
      const res = await bls12377.testMap(input)
      console.log(res)

      assert.equal(
        '33668b53057a37a1681926b05d40441e92cdc4c227673d04f1f370d3a1d6af3096ec25497d8898c67c70b58313a8870035c5a52ed463fa2637e742dd42fc3cf1661018ff06ff21dd1a8992a217497c8f4245476de570bec10908b08302878a0100',
        '33668b53057a37a1681926b05d40441e92cdc4c227673d04f1f370d3a1d6af3096ec25497d8898c67c70b58313a8870035c5a52ed463fa2637e742dd42fc3cf1661018ff06ff21dd1a8992a217497c8f4245476de570bec10908b08302878a0100'
      )
    })
  })
})
