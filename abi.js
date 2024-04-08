export const redstoneOracleAbi = [
  { inputs: [], name: "CalldataMustHaveValidPayload", type: "error" },
  { inputs: [], name: "CalldataOverOrUnderFlow", type: "error" },
  { inputs: [], name: "CanNotPickMedianOfEmptyArray", type: "error" },
  { inputs: [], name: "DataPackageTimestampMustNotBeZero", type: "error" },
  { inputs: [], name: "DataPackageTimestampsMustBeEqual", type: "error" },
  { inputs: [], name: "EachSignerMustProvideTheSameValue", type: "error" },
  { inputs: [], name: "EmptyCalldataPointersArr", type: "error" },
  { inputs: [], name: "GetDataServiceIdNotImplemented", type: "error" },
  { inputs: [], name: "IncorrectUnsignedMetadataSize", type: "error" },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedSignersCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredSignersCount",
        type: "uint256",
      },
    ],
    name: "InsufficientNumberOfUniqueSigners",
    type: "error",
  },
  { inputs: [], name: "InvalidCalldataPointer", type: "error" },
  {
    inputs: [],
    name: "RedstonePayloadMustHaveAtLeastOneDataPackage",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "receivedSigner", type: "address" },
    ],
    name: "SignerNotAuthorised",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      { internalType: "uint256", name: "blockTimestamp", type: "uint256" },
    ],
    name: "TimestampFromTooLongFuture",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      { internalType: "uint256", name: "blockTimestamp", type: "uint256" },
    ],
    name: "TimestampIsTooOld",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint256[]", name: "values", type: "uint256[]" }],
    name: "aggregateValues",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "extractTimestampsAndAssertAllAreEqual",
    outputs: [
      { internalType: "uint256", name: "extractedTimestamp", type: "uint256" },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "signerAddress", type: "address" },
    ],
    name: "getAuthorisedSignerIndex",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataServiceId",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "dataFeedId", type: "bytes32" }],
    name: "getLatestPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUniqueSignersThreshold",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "feedIds", type: "bytes32[]" },
      { internalType: "bytes[]", name: "priceUpdateData", type: "bytes[]" },
    ],
    name: "updatePrices",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampMilliseconds",
        type: "uint256",
      },
    ],
    name: "validateTimestamp",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];
