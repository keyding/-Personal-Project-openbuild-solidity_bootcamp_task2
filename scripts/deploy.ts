import { ethers, network } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("SnowNFT")
  const snowNFT = await factory.deploy();

  console.log("Deploying:", snowNFT.name.name, ' Network:', network.name);

  await snowNFT.waitForDeployment();
  
  console.log("  to", await snowNFT.getAddress());
  console.log("  in", snowNFT.deploymentTransaction()?.hash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
