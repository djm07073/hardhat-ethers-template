import { ethers } from "hardhat";

export const deposit = async (weth:`0x${string}`,amount:bigint) => {
    const wethContract = await ethers.getContractAt("WETH", weth);
    await wethContract.deposit({ value: amount }).then((tx) => tx.wait());
}

export const withdraw = async (weth: `0x${string}`, amount: bigint) => { 
    const wethContract = await ethers.getContractAt("WETH", weth);
    await wethContract.withdraw(amount).then((tx) => tx.wait());
}