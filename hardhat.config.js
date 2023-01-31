require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;
const LOCALHOST_PRIVATE_KEY = process.env.LOCALHOST_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    locahost: {
      url: `http://127.0.0.1:8545`,
      accounts: [LOCALHOST_PRIVATE_KEY]
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [MUMBAI_PRIVATE_KEY]
    },
  },
};
