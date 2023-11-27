/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export declare namespace IV3SwapRouter {
  export type ExactInputParamsStruct = {
    path: BytesLike;
    recipient: AddressLike;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
  };

  export type ExactInputParamsStructOutput = [
    path: string,
    recipient: string,
    amountIn: bigint,
    amountOutMinimum: bigint
  ] & {
    path: string;
    recipient: string;
    amountIn: bigint;
    amountOutMinimum: bigint;
  };

  export type ExactInputSingleParamsStruct = {
    tokenIn: AddressLike;
    tokenOut: AddressLike;
    fee: BigNumberish;
    recipient: AddressLike;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type ExactInputSingleParamsStructOutput = [
    tokenIn: string,
    tokenOut: string,
    fee: bigint,
    recipient: string,
    amountIn: bigint,
    amountOutMinimum: bigint,
    sqrtPriceLimitX96: bigint
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: bigint;
    recipient: string;
    amountIn: bigint;
    amountOutMinimum: bigint;
    sqrtPriceLimitX96: bigint;
  };

  export type ExactOutputParamsStruct = {
    path: BytesLike;
    recipient: AddressLike;
    amountOut: BigNumberish;
    amountInMaximum: BigNumberish;
  };

  export type ExactOutputParamsStructOutput = [
    path: string,
    recipient: string,
    amountOut: bigint,
    amountInMaximum: bigint
  ] & {
    path: string;
    recipient: string;
    amountOut: bigint;
    amountInMaximum: bigint;
  };

  export type ExactOutputSingleParamsStruct = {
    tokenIn: AddressLike;
    tokenOut: AddressLike;
    fee: BigNumberish;
    recipient: AddressLike;
    amountOut: BigNumberish;
    amountInMaximum: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type ExactOutputSingleParamsStructOutput = [
    tokenIn: string,
    tokenOut: string,
    fee: bigint,
    recipient: string,
    amountOut: bigint,
    amountInMaximum: bigint,
    sqrtPriceLimitX96: bigint
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: bigint;
    recipient: string;
    amountOut: bigint;
    amountInMaximum: bigint;
    sqrtPriceLimitX96: bigint;
  };
}

export declare namespace IApproveAndCall {
  export type IncreaseLiquidityParamsStruct = {
    token0: AddressLike;
    token1: AddressLike;
    tokenId: BigNumberish;
    amount0Min: BigNumberish;
    amount1Min: BigNumberish;
  };

  export type IncreaseLiquidityParamsStructOutput = [
    token0: string,
    token1: string,
    tokenId: bigint,
    amount0Min: bigint,
    amount1Min: bigint
  ] & {
    token0: string;
    token1: string;
    tokenId: bigint;
    amount0Min: bigint;
    amount1Min: bigint;
  };

  export type MintParamsStruct = {
    token0: AddressLike;
    token1: AddressLike;
    fee: BigNumberish;
    tickLower: BigNumberish;
    tickUpper: BigNumberish;
    amount0Min: BigNumberish;
    amount1Min: BigNumberish;
    recipient: AddressLike;
  };

  export type MintParamsStructOutput = [
    token0: string,
    token1: string,
    fee: bigint,
    tickLower: bigint,
    tickUpper: bigint,
    amount0Min: bigint,
    amount1Min: bigint,
    recipient: string
  ] & {
    token0: string;
    token1: string;
    fee: bigint;
    tickLower: bigint;
    tickUpper: bigint;
    amount0Min: bigint;
    amount1Min: bigint;
    recipient: string;
  };
}

export interface ISwapRouter02Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "approveMax"
      | "approveMaxMinusOne"
      | "approveZeroThenMax"
      | "approveZeroThenMaxMinusOne"
      | "callPositionManager"
      | "exactInput"
      | "exactInputSingle"
      | "exactOutput"
      | "exactOutputSingle"
      | "getApprovalType"
      | "increaseLiquidity"
      | "mint"
      | "multicall(bytes32,bytes[])"
      | "multicall(uint256,bytes[])"
      | "multicall(bytes[])"
      | "selfPermit"
      | "selfPermitAllowed"
      | "selfPermitAllowedIfNecessary"
      | "selfPermitIfNecessary"
      | "swapExactTokensForTokens"
      | "swapTokensForExactTokens"
      | "uniswapV3SwapCallback"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveMax",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approveMaxMinusOne",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approveZeroThenMax",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approveZeroThenMaxMinusOne",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "callPositionManager",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInput",
    values: [IV3SwapRouter.ExactInputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInputSingle",
    values: [IV3SwapRouter.ExactInputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutput",
    values: [IV3SwapRouter.ExactOutputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutputSingle",
    values: [IV3SwapRouter.ExactOutputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getApprovalType",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseLiquidity",
    values: [IApproveAndCall.IncreaseLiquidityParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [IApproveAndCall.MintParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall(bytes32,bytes[])",
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall(uint256,bytes[])",
    values: [BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall(bytes[])",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermit",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitAllowed",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitAllowedIfNecessary",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitIfNecessary",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [BigNumberish, BigNumberish, AddressLike[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [BigNumberish, BigNumberish, AddressLike[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "approveMax", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveMaxMinusOne",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveZeroThenMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveZeroThenMaxMinusOne",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callPositionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApprovalType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multicall(bytes32,bytes[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multicall(uint256,bytes[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multicall(bytes[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "selfPermit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitAllowedIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;
}

export interface ISwapRouter02 extends BaseContract {
  connect(runner?: ContractRunner | null): ISwapRouter02;
  waitForDeployment(): Promise<this>;

  interface: ISwapRouter02Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  approveMax: TypedContractMethod<[token: AddressLike], [void], "payable">;

  approveMaxMinusOne: TypedContractMethod<
    [token: AddressLike],
    [void],
    "payable"
  >;

  approveZeroThenMax: TypedContractMethod<
    [token: AddressLike],
    [void],
    "payable"
  >;

  approveZeroThenMaxMinusOne: TypedContractMethod<
    [token: AddressLike],
    [void],
    "payable"
  >;

  callPositionManager: TypedContractMethod<
    [data: BytesLike],
    [string],
    "payable"
  >;

  exactInput: TypedContractMethod<
    [params: IV3SwapRouter.ExactInputParamsStruct],
    [bigint],
    "payable"
  >;

  exactInputSingle: TypedContractMethod<
    [params: IV3SwapRouter.ExactInputSingleParamsStruct],
    [bigint],
    "payable"
  >;

  exactOutput: TypedContractMethod<
    [params: IV3SwapRouter.ExactOutputParamsStruct],
    [bigint],
    "payable"
  >;

  exactOutputSingle: TypedContractMethod<
    [params: IV3SwapRouter.ExactOutputSingleParamsStruct],
    [bigint],
    "payable"
  >;

  getApprovalType: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  increaseLiquidity: TypedContractMethod<
    [params: IApproveAndCall.IncreaseLiquidityParamsStruct],
    [string],
    "payable"
  >;

  mint: TypedContractMethod<
    [params: IApproveAndCall.MintParamsStruct],
    [string],
    "payable"
  >;

  "multicall(bytes32,bytes[])": TypedContractMethod<
    [previousBlockhash: BytesLike, data: BytesLike[]],
    [string[]],
    "payable"
  >;

  "multicall(uint256,bytes[])": TypedContractMethod<
    [deadline: BigNumberish, data: BytesLike[]],
    [string[]],
    "payable"
  >;

  "multicall(bytes[])": TypedContractMethod<
    [data: BytesLike[]],
    [string[]],
    "payable"
  >;

  selfPermit: TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  selfPermitAllowed: TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  selfPermitAllowedIfNecessary: TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  selfPermitIfNecessary: TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  swapExactTokensForTokens: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike
    ],
    [bigint],
    "payable"
  >;

  swapTokensForExactTokens: TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike
    ],
    [bigint],
    "payable"
  >;

  uniswapV3SwapCallback: TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "approveMax"
  ): TypedContractMethod<[token: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "approveMaxMinusOne"
  ): TypedContractMethod<[token: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "approveZeroThenMax"
  ): TypedContractMethod<[token: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "approveZeroThenMaxMinusOne"
  ): TypedContractMethod<[token: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "callPositionManager"
  ): TypedContractMethod<[data: BytesLike], [string], "payable">;
  getFunction(
    nameOrSignature: "exactInput"
  ): TypedContractMethod<
    [params: IV3SwapRouter.ExactInputParamsStruct],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "exactInputSingle"
  ): TypedContractMethod<
    [params: IV3SwapRouter.ExactInputSingleParamsStruct],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "exactOutput"
  ): TypedContractMethod<
    [params: IV3SwapRouter.ExactOutputParamsStruct],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "exactOutputSingle"
  ): TypedContractMethod<
    [params: IV3SwapRouter.ExactOutputSingleParamsStruct],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getApprovalType"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "increaseLiquidity"
  ): TypedContractMethod<
    [params: IApproveAndCall.IncreaseLiquidityParamsStruct],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [params: IApproveAndCall.MintParamsStruct],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "multicall(bytes32,bytes[])"
  ): TypedContractMethod<
    [previousBlockhash: BytesLike, data: BytesLike[]],
    [string[]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "multicall(uint256,bytes[])"
  ): TypedContractMethod<
    [deadline: BigNumberish, data: BytesLike[]],
    [string[]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "multicall(bytes[])"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "payable">;
  getFunction(
    nameOrSignature: "selfPermit"
  ): TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "selfPermitAllowed"
  ): TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "selfPermitAllowedIfNecessary"
  ): TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "selfPermitIfNecessary"
  ): TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokensForTokens"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "swapTokensForExactTokens"
  ): TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "uniswapV3SwapCallback"
  ): TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
