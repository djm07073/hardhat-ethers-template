import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import dotenv from "dotenv";
dotenv.config();
const DEPLOY = process.env.DEPLOY!;
const AR = process.env.ARBITRUM_KEY!;
const KEY2 = process.env.KEY2!;
const config: HardhatUserConfig = {
  solidity: "0.8.20",
  // networks: {
  //   avalanche: {
  //     url: "https://avalanche.public-rpc.com",
  //     accounts: [DEPLOY],
  //   },
  //   baobab: {
  //     url: "https://api.baobab.klaytn.net:8651",
  //     accounts: [DEPLOY],
  //   },
  //   zksync: {
  //     chainId: 324,
  //     url: "https://mainnet.era.zksync.io",
  //     accounts: [DEPLOY],
  //   },
  //   ethereum: {
  //     chainId: 1,
  //     url: "https://eth.llamarpc.com",
  //     accounts: [DEPLOY],
  //     gasPrice: 16 * 10 ** 9,
  //   },
  //   bsc: {
  //     chainId: 56,
  //     url: "https://bsc.blockpi.network/v1/rpc/public",
  //     accounts: [DEPLOY],
  //   },
  //   arbitrum_goerli: {
  //     chainId: 421613,
  //     url: `https://arb-goerli.g.alchemy.com/v2/${AR}`,
  //     accounts: [DEPLOY, KEY2],
  //   },
  //   optimism_goerli: {
  //     chainId: 420,
  //     url: "https://optimism-goerli.publicnode.com",
  //     accounts: [DEPLOY],
  //   },
  //   goerli: {
  //     chainId: 5,
  //     url: "https://rpc.ankr.com/eth_goerli",
  //     accounts: [DEPLOY],
  //     gasPrice: 1.5 * 10 ** 9,
  //   },
  //   matic: {
  //     chainId: 137,
  //     url: "https://polygon.llamarpc.com",
  //     accounts: [DEPLOY],
  //     gasPrice: 95 * 10 ** 9,
  //   },
  //   mumbai: {
  //     chainId: 80001,
  //     url: "https://polygon-mumbai-bor.publicnode.com",
  //     accounts: [DEPLOY],
  //     gasPrice: 300 * 10 ** 9,
  //   },
  //   tbsc: {
  //     chainId: 97,
  //     url: "https://data-seed-prebsc-1-s2.binance.org:8545",
  //     accounts: [DEPLOY],
  //     gasPrice: 7 * 10 ** 9,
  //   },
  //   chiado: {
  //     chainId: 10200,
  //     url: "https://rpc.chiadochain.net",
  //     accounts: [DEPLOY],
  //     gasPrice: 1000000000,
  //   },
  //   sepolia: {
  //     chainId: 11155111,
  //     url: "https://rpc.sepolia.org",
  //     accounts: [DEPLOY],
  //   },
  //   base: {
  //     chainId: 8453,
  //     url: "https://base.meowrpc.com",
  //     accounts: [DEPLOY],
  //   },
  //   optimism: {
  //     chainId: 10,
  //     url: "https://api.zan.top/node/v1/opt/mainnet/public",
  //     accounts: [DEPLOY],
  //   },
  //   arbitrum: {
  //     chainId: 42161,
  //     url: "https://arbitrum.meowrpc.com",
  //     accounts: [DEPLOY],
  //   },
  //   celo_test: {
  //     chainId: 44787,
  //     url: "https://alfajores-forno.celo-testnet.org",
  //     accounts: [DEPLOY],
  //   },
  //   scroll_sepholia: {
  //     chainId: 534351,
  //     url: "https://1rpc.io/scroll/sepolia",
  //     accounts: [DEPLOY],
  //   },
  //   celo: {
  //     chainId: 42220,
  //     url: "https://forno.celo.org",
  //     accounts: [DEPLOY],
  //   },
  //   gnosis: {
  //     chainId: 100,
  //     url: "https://gnosischain-rpc.gateway.pokt.network",
  //     accounts: [DEPLOY],
  //   },
  //   linea: {
  //     chainId: 59144,
  //     url: "https://linea.drpc.org",
  //     accounts: [DEPLOY],
  //   },
  // },
};

export default config;
