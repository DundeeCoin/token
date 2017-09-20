let DundeeCoin = artifacts.require("./contracts/token/DundeeCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(DundeeCoin)
};
