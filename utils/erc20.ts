import { ethers, network } from "hardhat";
const ROUTER: Record<number, `0x${string}`> = {
  "1": "0xE592427A0AEce92De3Edee1F18E0157C05861564", //uniswap v3 swaprouter
};
const ROUTER_ABI: any[] = [
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "tokenIn", type: "address" },
          { internalType: "address", name: "tokenOut", type: "address" },
          { internalType: "uint24", name: "fee", type: "uint24" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "amountIn", type: "uint256" },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct IV3SwapRouter.ExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInputSingle",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
];
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

export const getBalance = async (tokenAddr: `0x${string}`) => {
  const [signer] = await ethers.getSigners();
  const token = await ethers.getContractAt("ERC20", tokenAddr);
  return token.balanceOf(signer.address);
};
export const getTokens = async (
  tokenIn: `0x${string}`,
  tokenOut: `0x${string}`,
  amountIn: bigint
) => {
  if (network.config.chainId != 1) {
    console.log("mainnet only supported");
    return;
  }
  const routerAddr = ROUTER[1];
  const router = await ethers.getContractAt(
    ROUTER_ABI,
    routerAddr
  );
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
};
