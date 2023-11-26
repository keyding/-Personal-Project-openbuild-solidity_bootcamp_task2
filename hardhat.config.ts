import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as envConfig } from 'dotenv'

envConfig()

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: 'https://sepolia.infura.io/v3/',
      accounts: [process.env.SEPOLIA_PRIVATE_KEY!],
    }
  }
};

export default config;
