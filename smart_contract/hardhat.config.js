require('@nomiclabs/hardhat-waffle');

// https://eth-goerli.g.alchemy.com/v2/RWZsP_vpVwLGzxzFq__VunWypR9sQDir

module.exports = {
  solidity: "0.8.17",
  network: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/RWZsP_vpVwLGzxzFq__VunWypR9sQDir",
      accounts: ['91009598924499a6af0581c06ebe2efbb3b4825f6b7880f5b2360f266b6f0d24'],
    }
  }
};
 