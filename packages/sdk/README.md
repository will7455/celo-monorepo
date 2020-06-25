# Celo SDK

## Architecture Diagram

![Celo SDK Composition](./Celo SDK Decomposition.svg")<img src="./Celo SDK Decomposition.svg">

## Configuration

- Basic interface
  - connection to blockchain
  - tx types
- Focus on base developer initially
  - transfer tokens
    - base provider
    - base wallet
    - base contracts (GoldToken/StableToken/Exchange)
- Allows for granularity of dependency selection
  - Add dependencies for Governance/Ledger/advanced features
  - Pull in additional npm package which implements same interface for specific functionality
