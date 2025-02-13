const { ethers } = require("hardhat");

async function main() {
  console.log("Starting deployment...");
  const Contract = await ethers.getContractFactory("TaskToDo");

  console.log("Deploying contract...");
  const contract = await Contract.deploy();

  console.log("Contract deployed to:", contract.runner.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
