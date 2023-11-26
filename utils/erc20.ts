import { ethers } from "hardhat";

export const approve = async (
  tokenAddr: `0x${string}`,
  amount: bigint,
  spender: `0x${string}`
) => {
  const token = await ethers.getContractAt("ERC20", tokenAddr);
  await token.approve(spender, amount).then((tx) => tx.wait());
};

export const approveMax = async (
  tokenAddr: `0x${string}`,
  spender: `0x${string}`
) => {
  await approve(tokenAddr, ethers.MaxUint256, spender);
};
