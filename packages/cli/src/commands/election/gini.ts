import { cli } from 'cli-ux'
import { BaseCommand } from '../../base'

export const otherValidatorTable = {
  address: {},
  name: {},
  currentSigner: {},
  signer: {},
  changed: {},
}
export default class ElectionGini extends BaseCommand {
  static description = 'Outputs Gini Coefficient of the current validatorset'

  async run() {
    cli.action.start('Fetching currently elected Validators')
    const election = await this.kit.contracts.getElection()
    const validators = await this.kit.contracts.getValidators()
    const signers = await election.getCurrentValidatorSigners()
    const validatorList = await Promise.all(
      signers.map((addr) => validators.getValidatorFromSigner(addr))
    )
    const groupAffiliations: { [key: string]: number } = {}
    validatorList.forEach((val) => {
      const affiliation = val.affiliation as string
      groupAffiliations[affiliation] = groupAffiliations[affiliation]
        ? groupAffiliations[affiliation] + 1
        : 1
    })
    const incomes = Object.values(groupAffiliations).sort()
    // using this formula: https://www.statsdirect.com/help/nonparametric_methods/gini_coefficient.htm
    const length = incomes.length
    const top = incomes.reduce((acc, curr, idx) => acc + (2 * (idx + 1) - length - 1) * curr, 0)
    const bottom = length * incomes.reduce((acc, curr) => acc + curr, 0)
    cli.action.stop()
    console.log('Current Gini Coefficient is: ')
    console.log(top / bottom)
  }
}
