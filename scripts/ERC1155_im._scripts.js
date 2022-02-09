const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {

  [a1, a2, a3] = await hre.ethers.getSigners();
  const ERC1155_Implementation ='0xC5a22E8b0b09054B2f77B452D8DaeafacCcf6470';

  const Contract = await hre.ethers.getContractFactory("ERC1155_Im");
  
  // const contract = await Contract.deploy();
  // await contract.deployed();
  // console.log("ERC1155_Implementation deployed to:", contract.address);

  const erc1155 = new ethers.Contract(ERC1155_Implementation, Contract.interface, a1);

  const checkBalance = await erc1155.balanceOf(a1.address, 2);
  console.log("Balance is : ", checkBalance.toString());

  await erc1155.safeBatchTransferFrom(a1.address, a2.address, [2,3], [100,1000], '0x5FbDB2315678afecb367f032d93F642f64180aa3' );
  console.log("Amount transfered from owner to a2");

  const newbal1 = await erc1155.balanceOf(a1.address, 1);
  console.log(newbal1.toString());

  const newbal2 = await erc1155.balanceOf(a2.address, 2);
  console.log(newbal2.toString());

  const checkBalanceBatch = await erc1155.balanceOfBatch([a1.address, a2.address], [2,3]);
  console.log("Balance of account[0] and account[1] is : ", checkBalance.toString());

  await erc1155.safeTransferFrom(a1.address, a2.address, 1, 1, '0x5FbDB2315678afecb367f032d93F642f64180aa3' );
  console.log("NFT transfered from owner to a2");


}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);

  });
