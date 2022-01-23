require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/qhiBETPa6KulQSEa8yvwkfUSbmqd-jFS",
      accounts: ['4633e0f4afd392bba8a7326d512639e20b99888ee71b68d88aa8befdd39c9b53']
    }
  }
}