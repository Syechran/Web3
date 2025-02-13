require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "volta",
  networks: {
    hardhat: {},
    volta: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gas: 210000000, // sebelumnya 210000000 (terlalu besar)
      gasPrice: 800000000000, // kurangi gas price juga
    },
  },
};
