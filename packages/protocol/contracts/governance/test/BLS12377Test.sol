pragma solidity ^0.5.8;

import "../../common/UsingPrecompiles.sol";

contract BLS12377Test is UsingPrecompiles {
  function testMap(bytes calldata input) external returns (bytes32) {
    return bls12377MapG1(input);
  }
}
