const hre = require("hardhat");
async function main() {
    const Voting = await ethers.getContractFactory("Voting");
  
    // Start deployment, returning a promise that resolves to a contract object
    const Voting_ = await Voting.deploy(["Candidate1", "Candidate2", "Candidate3", "Candidate4"], 20);

    await Voting_.deployed();
    console.log(`Contract address: ${Voting_.address}`);
  }
  
  main().catch(error => {
     console.error(error);
     process.exitCode = 1;
   });