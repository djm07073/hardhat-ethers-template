import { ethers, network } from "hardhat";
import { ISwapRouter02 } from "./swap-router-contracts/contracts/interfaces";
const ROUTER : Record<number,`0x${string}`> = {
  "1": "0xE592427A0AEce92De3Edee1F18E0157C05861564",//uniswap v3 swaprouter
};

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

export const getTokens = async (tokenIn:`0x${string}`,tokenOut:`0x${string}`,amountIn:bigint) => {
  if (network.config.chainId != 1) {
    console.log("mainnet only supported");
    return;
  }
  const routerAddr = ROUTER[1];
  const router: ISwapRouter02 = await ethers.getContractAt("ISwapRouter02", routerAddr);
  const [signer] = await ethers.getSigners();
  await approveMax(tokenIn, routerAddr);
  return router.exactInputSingle({
    tokenIn,
    tokenOut,
    fee: 3000,
    recipient: signer.address,
    amountIn: amountIn,
    amountOutMinimum: 0,
    sqrtPriceLimitX96: 0,
  });
}

