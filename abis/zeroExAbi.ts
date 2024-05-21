const zeroExAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "ERC1155OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum LibNFTOrder.TradeDirection",
        name: "direction",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20TokenV06",
        name: "erc20Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "erc20FillAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC1155Token",
        name: "erc1155Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "erc1155TokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "erc1155FillAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "address",
        name: "matcher",
        type: "address",
      },
    ],
    name: "ERC1155OrderFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum LibNFTOrder.TradeDirection",
        name: "direction",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20TokenV06",
        name: "erc20Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "erc20TokenAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          { internalType: "bytes", name: "feeData", type: "bytes" },
        ],
        indexed: false,
        internalType: "struct LibNFTOrder.Fee[]",
        name: "fees",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "contract IERC1155Token",
        name: "erc1155Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "erc1155TokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "contract IPropertyValidator",
            name: "propertyValidator",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "propertyData",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct LibNFTOrder.Property[]",
        name: "erc1155TokenProperties",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "erc1155TokenAmount",
        type: "uint128",
      },
    ],
    name: "ERC1155OrderPreSigned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "ERC721OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum LibNFTOrder.TradeDirection",
        name: "direction",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20TokenV06",
        name: "erc20Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "erc20TokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC721Token",
        name: "erc721Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "erc721TokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "matcher",
        type: "address",
      },
    ],
    name: "ERC721OrderFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum LibNFTOrder.TradeDirection",
        name: "direction",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20TokenV06",
        name: "erc20Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "erc20TokenAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          { internalType: "bytes", name: "feeData", type: "bytes" },
        ],
        indexed: false,
        internalType: "struct LibNFTOrder.Fee[]",
        name: "fees",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "contract IERC721Token",
        name: "erc721Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "erc721TokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "contract IPropertyValidator",
            name: "propertyValidator",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "propertyData",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct LibNFTOrder.Property[]",
        name: "erc721TokenProperties",
        type: "tuple[]",
      },
    ],
    name: "ERC721OrderPreSigned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "feeRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "makerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "takerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "takerTokenFeeFilledAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolFeePaid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "pool",
        type: "bytes32",
      },
    ],
    name: "LimitOrderFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20TokenV06",
        name: "inputToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20TokenV06",
        name: "outputToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "inputTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outputTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract ILiquidityProvider",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "LiquidityProviderSwap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "migrator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "Migrated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
    ],
    name: "OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "OrderSignerRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "makerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "takerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
    ],
    name: "OtcOrderFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "makerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "takerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "PairCancelledLimitOrders",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "makerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "takerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "PairCancelledRfqOrders",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldImpl",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
    ],
    name: "ProxyFunctionUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "quoteSigner",
        type: "address",
      },
    ],
    name: "QuoteSignerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "makerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "takerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "pool",
        type: "bytes32",
      },
    ],
    name: "RfqOrderFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "origin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "addrs",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "RfqOrderOriginsAllowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inputToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "outputToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "inputTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outputTokenAmount",
        type: "uint256",
      },
    ],
    name: "TransformedERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "transformerDeployer",
        type: "address",
      },
    ],
    name: "TransformerDeployerUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerTokenFeeAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.LimitOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
      { internalType: "address", name: "taker", type: "address" },
      { internalType: "address", name: "sender", type: "address" },
    ],
    name: "_fillLimitOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
      { internalType: "address", name: "taker", type: "address" },
      { internalType: "bool", name: "useSelfBalance", type: "bool" },
      { internalType: "address", name: "recipient", type: "address" },
    ],
    name: "_fillOtcOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.RfqOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
      { internalType: "address", name: "taker", type: "address" },
      { internalType: "bool", name: "useSelfBalance", type: "bool" },
      { internalType: "address", name: "recipient", type: "address" },
    ],
    name: "_fillRfqOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "encodedPath", type: "bytes" },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      { internalType: "address", name: "recipient", type: "address" },
    ],
    name: "_sellHeldTokenForTokenToUniswapV3",
    outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "taker",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "inputToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "outputToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "inputTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minOutputTokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "deploymentNonce",
                type: "uint32",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct ITransformERC20Feature.Transformation[]",
            name: "transformations",
            type: "tuple[]",
          },
          {
            internalType: "bool",
            name: "useSelfBalance",
            type: "bool",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
        ],
        internalType: "struct ITransformERC20Feature.TransformERC20Args",
        name: "args",
        type: "tuple",
      },
    ],
    name: "_transformERC20",
    outputs: [
      {
        internalType: "uint256",
        name: "outputTokenAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC1155Token",
            name: "erc1155Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc1155TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc1155TokenProperties",
            type: "tuple[]",
          },
          {
            internalType: "uint128",
            name: "erc1155TokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNFTOrder.ERC1155Order[]",
        name: "sellOrders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "signatures",
        type: "tuple[]",
      },
      {
        internalType: "uint128[]",
        name: "erc1155TokenAmounts",
        type: "uint128[]",
      },
      {
        internalType: "bytes[]",
        name: "callbackData",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertIfIncomplete",
        type: "bool",
      },
    ],
    name: "batchBuyERC1155s",
    outputs: [{ internalType: "bool[]", name: "successes", type: "bool[]" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order[]",
        name: "sellOrders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "signatures",
        type: "tuple[]",
      },
      {
        internalType: "bytes[]",
        name: "callbackData",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertIfIncomplete",
        type: "bool",
      },
    ],
    name: "batchBuyERC721s",
    outputs: [{ internalType: "bool[]", name: "successes", type: "bool[]" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "orderNonces",
        type: "uint256[]",
      },
    ],
    name: "batchCancelERC1155Orders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "orderNonces",
        type: "uint256[]",
      },
    ],
    name: "batchCancelERC721Orders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerTokenFeeAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.LimitOrder[]",
        name: "orders",
        type: "tuple[]",
      },
    ],
    name: "batchCancelLimitOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06[]",
        name: "makerTokens",
        type: "address[]",
      },
      {
        internalType: "contract IERC20TokenV06[]",
        name: "takerTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minValidSalts",
        type: "uint256[]",
      },
    ],
    name: "batchCancelPairLimitOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "maker", type: "address" },
      {
        internalType: "contract IERC20TokenV06[]",
        name: "makerTokens",
        type: "address[]",
      },
      {
        internalType: "contract IERC20TokenV06[]",
        name: "takerTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minValidSalts",
        type: "uint256[]",
      },
    ],
    name: "batchCancelPairLimitOrdersWithSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06[]",
        name: "makerTokens",
        type: "address[]",
      },
      {
        internalType: "contract IERC20TokenV06[]",
        name: "takerTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minValidSalts",
        type: "uint256[]",
      },
    ],
    name: "batchCancelPairRfqOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "maker", type: "address" },
      {
        internalType: "contract IERC20TokenV06[]",
        name: "makerTokens",
        type: "address[]",
      },
      {
        internalType: "contract IERC20TokenV06[]",
        name: "takerTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minValidSalts",
        type: "uint256[]",
      },
    ],
    name: "batchCancelPairRfqOrdersWithSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.RfqOrder[]",
        name: "orders",
        type: "tuple[]",
      },
    ],
    name: "batchCancelRfqOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minGasPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxGasPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationTimeSeconds",
            type: "uint256",
          },
          { internalType: "uint256", name: "salt", type: "uint256" },
          { internalType: "bytes", name: "callData", type: "bytes" },
          { internalType: "uint256", name: "value", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IMetaTransactionsFeature.MetaTransactionData[]",
        name: "mtxs",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "signatures",
        type: "tuple[]",
      },
    ],
    name: "batchExecuteMetaTransactions",
    outputs: [
      {
        internalType: "bytes[]",
        name: "returnResults",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerTokenFeeAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.LimitOrder[]",
        name: "orders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "signatures",
        type: "tuple[]",
      },
      {
        internalType: "uint128[]",
        name: "takerTokenFillAmounts",
        type: "uint128[]",
      },
      {
        internalType: "bool",
        name: "revertIfIncomplete",
        type: "bool",
      },
    ],
    name: "batchFillLimitOrders",
    outputs: [
      {
        internalType: "uint128[]",
        name: "takerTokenFilledAmounts",
        type: "uint128[]",
      },
      {
        internalType: "uint128[]",
        name: "makerTokenFilledAmounts",
        type: "uint128[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.RfqOrder[]",
        name: "orders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "signatures",
        type: "tuple[]",
      },
      {
        internalType: "uint128[]",
        name: "takerTokenFillAmounts",
        type: "uint128[]",
      },
      {
        internalType: "bool",
        name: "revertIfIncomplete",
        type: "bool",
      },
    ],
    name: "batchFillRfqOrders",
    outputs: [
      {
        internalType: "uint128[]",
        name: "takerTokenFilledAmounts",
        type: "uint128[]",
      },
      {
        internalType: "uint128[]",
        name: "makerTokenFilledAmounts",
        type: "uint128[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder[]",
        name: "orders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "makerSignatures",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "takerSignatures",
        type: "tuple[]",
      },
      { internalType: "bool[]", name: "unwrapWeth", type: "bool[]" },
    ],
    name: "batchFillTakerSignedOtcOrders",
    outputs: [{ internalType: "bool[]", name: "successes", type: "bool[]" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerTokenFeeAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.LimitOrder[]",
        name: "orders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "signatures",
        type: "tuple[]",
      },
    ],
    name: "batchGetLimitOrderRelevantStates",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "enum LibNativeOrder.OrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo[]",
        name: "orderInfos",
        type: "tuple[]",
      },
      {
        internalType: "uint128[]",
        name: "actualFillableTakerTokenAmounts",
        type: "uint128[]",
      },
      {
        internalType: "bool[]",
        name: "isSignatureValids",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.RfqOrder[]",
        name: "orders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "signatures",
        type: "tuple[]",
      },
    ],
    name: "batchGetRfqOrderRelevantStates",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "enum LibNativeOrder.OrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo[]",
        name: "orderInfos",
        type: "tuple[]",
      },
      {
        internalType: "uint128[]",
        name: "actualFillableTakerTokenAmounts",
        type: "uint128[]",
      },
      {
        internalType: "bool[]",
        name: "isSignatureValids",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order[]",
        name: "sellOrders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order[]",
        name: "buyOrders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "sellOrderSignatures",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "buyOrderSignatures",
        type: "tuple[]",
      },
    ],
    name: "batchMatchERC721Orders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "profits",
        type: "uint256[]",
      },
      { internalType: "bool[]", name: "successes", type: "bool[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC1155Token",
            name: "erc1155Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc1155TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc1155TokenProperties",
            type: "tuple[]",
          },
          {
            internalType: "uint128",
            name: "erc1155TokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNFTOrder.ERC1155Order",
        name: "sellOrder",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "erc1155BuyAmount",
        type: "uint128",
      },
      { internalType: "bytes", name: "callbackData", type: "bytes" },
    ],
    name: "buyERC1155",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order",
        name: "sellOrder",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
      { internalType: "bytes", name: "callbackData", type: "bytes" },
    ],
    name: "buyERC721",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "orderNonce", type: "uint256" }],
    name: "cancelERC1155Order",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "orderNonce", type: "uint256" }],
    name: "cancelERC721Order",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerTokenFeeAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.LimitOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "cancelLimitOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06",
        name: "makerToken",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "takerToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "cancelPairLimitOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "maker", type: "address" },
      {
        internalType: "contract IERC20TokenV06",
        name: "makerToken",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "takerToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "cancelPairLimitOrdersWithSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06",
        name: "makerToken",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "takerToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "cancelPairRfqOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "maker", type: "address" },
      {
        internalType: "contract IERC20TokenV06",
        name: "makerToken",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "takerToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "cancelPairRfqOrdersWithSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.RfqOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "cancelRfqOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createTransformWallet",
    outputs: [
      {
        internalType: "contract IFlashWallet",
        name: "wallet",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minGasPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxGasPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationTimeSeconds",
            type: "uint256",
          },
          { internalType: "uint256", name: "salt", type: "uint256" },
          { internalType: "bytes", name: "callData", type: "bytes" },
          { internalType: "uint256", name: "value", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IMetaTransactionsFeature.MetaTransactionData",
        name: "mtx",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [{ internalType: "bytes", name: "returnResult", type: "bytes" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes4", name: "selector", type: "bytes4" },
      { internalType: "address", name: "impl", type: "address" },
    ],
    name: "extend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerTokenFeeAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.LimitOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
    ],
    name: "fillLimitOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerTokenFeeAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.LimitOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
    ],
    name: "fillOrKillLimitOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.RfqOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
    ],
    name: "fillOrKillRfqOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
    ],
    name: "fillOtcOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
    ],
    name: "fillOtcOrderForEth",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
    ],
    name: "fillOtcOrderWithEth",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.RfqOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
    ],
    name: "fillRfqOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "takerSignature",
        type: "tuple",
      },
    ],
    name: "fillTakerSignedOtcOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "takerSignature",
        type: "tuple",
      },
    ],
    name: "fillTakerSignedOtcOrderForEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC1155Token",
            name: "erc1155Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc1155TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc1155TokenProperties",
            type: "tuple[]",
          },
          {
            internalType: "uint128",
            name: "erc1155TokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNFTOrder.ERC1155Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getERC1155OrderHash",
    outputs: [{ internalType: "bytes32", name: "orderHash", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC1155Token",
            name: "erc1155Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc1155TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc1155TokenProperties",
            type: "tuple[]",
          },
          {
            internalType: "uint128",
            name: "erc1155TokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNFTOrder.ERC1155Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getERC1155OrderInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "enum LibNFTOrder.OrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "orderAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "remainingAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNFTOrder.OrderInfo",
        name: "orderInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getERC721OrderHash",
    outputs: [{ internalType: "bytes32", name: "orderHash", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getERC721OrderStatus",
    outputs: [
      {
        internalType: "enum LibNFTOrder.OrderStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "maker", type: "address" },
      { internalType: "uint248", name: "nonceRange", type: "uint248" },
    ],
    name: "getERC721OrderStatusBitVector",
    outputs: [{ internalType: "uint256", name: "bitVector", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerTokenFeeAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.LimitOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getLimitOrderHash",
    outputs: [{ internalType: "bytes32", name: "orderHash", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerTokenFeeAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.LimitOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getLimitOrderInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "enum LibNativeOrder.OrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo",
        name: "orderInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerTokenFeeAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.LimitOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
    ],
    name: "getLimitOrderRelevantState",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "enum LibNativeOrder.OrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo",
        name: "orderInfo",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "actualFillableTakerTokenAmount",
        type: "uint128",
      },
      { internalType: "bool", name: "isSignatureValid", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minGasPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxGasPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationTimeSeconds",
            type: "uint256",
          },
          { internalType: "uint256", name: "salt", type: "uint256" },
          { internalType: "bytes", name: "callData", type: "bytes" },
          { internalType: "uint256", name: "value", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IMetaTransactionsFeature.MetaTransactionData",
        name: "mtx",
        type: "tuple",
      },
    ],
    name: "getMetaTransactionExecutedBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minGasPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxGasPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationTimeSeconds",
            type: "uint256",
          },
          { internalType: "uint256", name: "salt", type: "uint256" },
          { internalType: "bytes", name: "callData", type: "bytes" },
          { internalType: "uint256", name: "value", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IMetaTransactionsFeature.MetaTransactionData",
        name: "mtx",
        type: "tuple",
      },
    ],
    name: "getMetaTransactionHash",
    outputs: [{ internalType: "bytes32", name: "mtxHash", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "mtxHash", type: "bytes32" }],
    name: "getMetaTransactionHashExecutedBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getOtcOrderHash",
    outputs: [{ internalType: "bytes32", name: "orderHash", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getOtcOrderInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "enum LibNativeOrder.OrderStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrderInfo",
        name: "orderInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProtocolFeeMultiplier",
    outputs: [{ internalType: "uint32", name: "multiplier", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getQuoteSigner",
    outputs: [{ internalType: "address", name: "signer", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.RfqOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getRfqOrderHash",
    outputs: [{ internalType: "bytes32", name: "orderHash", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.RfqOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getRfqOrderInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "enum LibNativeOrder.OrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo",
        name: "orderInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          { internalType: "bytes32", name: "pool", type: "bytes32" },
          { internalType: "uint64", name: "expiry", type: "uint64" },
          { internalType: "uint256", name: "salt", type: "uint256" },
        ],
        internalType: "struct LibNativeOrder.RfqOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
    ],
    name: "getRfqOrderRelevantState",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "enum LibNativeOrder.OrderStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo",
        name: "orderInfo",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "actualFillableTakerTokenAmount",
        type: "uint128",
      },
      { internalType: "bool", name: "isSignatureValid", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes4", name: "selector", type: "bytes4" },
      { internalType: "uint256", name: "idx", type: "uint256" },
    ],
    name: "getRollbackEntryAtIndex",
    outputs: [{ internalType: "address", name: "impl", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }],
    name: "getRollbackLength",
    outputs: [
      {
        internalType: "uint256",
        name: "rollbackLength",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransformWallet",
    outputs: [
      {
        internalType: "contract IFlashWallet",
        name: "wallet",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransformerDeployer",
    outputs: [{ internalType: "address", name: "deployer", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "maker", type: "address" },
      { internalType: "address", name: "signer", type: "address" },
    ],
    name: "isValidOrderSigner",
    outputs: [{ internalType: "bool", name: "isAllowed", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "txOrigin", type: "address" },
      { internalType: "uint64", name: "nonceBucket", type: "uint64" },
    ],
    name: "lastOtcTxOriginNonce",
    outputs: [{ internalType: "uint128", name: "lastNonce", type: "uint128" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order",
        name: "sellOrder",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order",
        name: "buyOrder",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "sellOrderSignature",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "buyOrderSignature",
        type: "tuple",
      },
    ],
    name: "matchERC721Orders",
    outputs: [{ internalType: "uint256", name: "profit", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "target", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
      { internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06",
        name: "outputToken",
        type: "address",
      },
      {
        components: [
          {
            internalType: "enum IMultiplexFeature.MultiplexSubcall",
            name: "id",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "sellAmount",
            type: "uint256",
          },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct IMultiplexFeature.BatchSellSubcall[]",
        name: "calls",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
    ],
    name: "multiplexBatchSellEthForToken",
    outputs: [
      {
        internalType: "uint256",
        name: "boughtAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06",
        name: "inputToken",
        type: "address",
      },
      {
        components: [
          {
            internalType: "enum IMultiplexFeature.MultiplexSubcall",
            name: "id",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "sellAmount",
            type: "uint256",
          },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct IMultiplexFeature.BatchSellSubcall[]",
        name: "calls",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
    ],
    name: "multiplexBatchSellTokenForEth",
    outputs: [
      {
        internalType: "uint256",
        name: "boughtAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "outputToken",
        type: "address",
      },
      {
        components: [
          {
            internalType: "enum IMultiplexFeature.MultiplexSubcall",
            name: "id",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "sellAmount",
            type: "uint256",
          },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct IMultiplexFeature.BatchSellSubcall[]",
        name: "calls",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
    ],
    name: "multiplexBatchSellTokenForToken",
    outputs: [
      {
        internalType: "uint256",
        name: "boughtAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "enum IMultiplexFeature.MultiplexSubcall",
            name: "id",
            type: "uint8",
          },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct IMultiplexFeature.MultiHopSellSubcall[]",
        name: "calls",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
    ],
    name: "multiplexMultiHopSellEthForToken",
    outputs: [
      {
        internalType: "uint256",
        name: "boughtAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "enum IMultiplexFeature.MultiplexSubcall",
            name: "id",
            type: "uint8",
          },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct IMultiplexFeature.MultiHopSellSubcall[]",
        name: "calls",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
    ],
    name: "multiplexMultiHopSellTokenForEth",
    outputs: [
      {
        internalType: "uint256",
        name: "boughtAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "enum IMultiplexFeature.MultiplexSubcall",
            name: "id",
            type: "uint8",
          },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct IMultiplexFeature.MultiHopSellSubcall[]",
        name: "calls",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
    ],
    name: "multiplexMultiHopSellTokenForToken",
    outputs: [
      {
        internalType: "uint256",
        name: "boughtAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "address", name: "from", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "onERC1155Received",
    outputs: [{ internalType: "bytes4", name: "success", type: "bytes4" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "address", name: "from", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ internalType: "bytes4", name: "success", type: "bytes4" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC1155Token",
            name: "erc1155Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc1155TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc1155TokenProperties",
            type: "tuple[]",
          },
          {
            internalType: "uint128",
            name: "erc1155TokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNFTOrder.ERC1155Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "preSignERC1155Order",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "preSignERC721Order",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "signer", type: "address" },
      { internalType: "bool", name: "allowed", type: "bool" },
    ],
    name: "registerAllowedOrderSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "origins",
        type: "address[]",
      },
      { internalType: "bool", name: "allowed", type: "bool" },
    ],
    name: "registerAllowedRfqOrigins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes4", name: "selector", type: "bytes4" },
      { internalType: "address", name: "targetImpl", type: "address" },
    ],
    name: "rollback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC1155Token",
            name: "erc1155Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc1155TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc1155TokenProperties",
            type: "tuple[]",
          },
          {
            internalType: "uint128",
            name: "erc1155TokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNFTOrder.ERC1155Order",
        name: "buyOrder",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "erc1155TokenId",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "erc1155SellAmount",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "unwrapNativeToken",
        type: "bool",
      },
      { internalType: "bytes", name: "callbackData", type: "bytes" },
    ],
    name: "sellERC1155",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order",
        name: "buyOrder",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "erc721TokenId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "unwrapNativeToken",
        type: "bool",
      },
      { internalType: "bytes", name: "callbackData", type: "bytes" },
    ],
    name: "sellERC721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "encodedPath", type: "bytes" },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      { internalType: "address", name: "recipient", type: "address" },
    ],
    name: "sellEthForTokenToUniswapV3",
    outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "outputToken",
        type: "address",
      },
      {
        internalType: "contract ILiquidityProvider",
        name: "provider",
        type: "address",
      },
      { internalType: "address", name: "recipient", type: "address" },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      { internalType: "bytes", name: "auxiliaryData", type: "bytes" },
    ],
    name: "sellToLiquidityProvider",
    outputs: [
      {
        internalType: "uint256",
        name: "boughtAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      {
        internalType: "enum IPancakeSwapFeature.ProtocolFork",
        name: "fork",
        type: "uint8",
      },
    ],
    name: "sellToPancakeSwap",
    outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      { internalType: "bool", name: "isSushi", type: "bool" },
    ],
    name: "sellToUniswap",
    outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "encodedPath", type: "bytes" },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sellTokenForEthToUniswapV3",
    outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "encodedPath", type: "bytes" },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      { internalType: "address", name: "recipient", type: "address" },
    ],
    name: "sellTokenForTokenToUniswapV3",
    outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "quoteSigner",
        type: "address",
      },
    ],
    name: "setQuoteSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "transformerDeployer",
        type: "address",
      },
    ],
    name: "setTransformerDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportInterface",
    outputs: [{ internalType: "bool", name: "isSupported", type: "bool" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "poolIds",
        type: "bytes32[]",
      },
    ],
    name: "transferProtocolFeesForPools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06",
        name: "erc20",
        type: "address",
      },
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      {
        internalType: "address payable",
        name: "recipientWallet",
        type: "address",
      },
    ],
    name: "transferTrappedTokensTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "outputToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "inputTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOutputTokenAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "deploymentNonce",
            type: "uint32",
          },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct ITransformERC20Feature.Transformation[]",
        name: "transformations",
        type: "tuple[]",
      },
    ],
    name: "transformERC20",
    outputs: [
      {
        internalType: "uint256",
        name: "outputTokenAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC1155Token",
            name: "erc1155Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc1155TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc1155TokenProperties",
            type: "tuple[]",
          },
          {
            internalType: "uint128",
            name: "erc1155TokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNFTOrder.ERC1155Order",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "erc1155TokenId",
        type: "uint256",
      },
    ],
    name: "validateERC1155OrderProperties",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC1155Token",
            name: "erc1155Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc1155TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc1155TokenProperties",
            type: "tuple[]",
          },
          {
            internalType: "uint128",
            name: "erc1155TokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNFTOrder.ERC1155Order",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
    ],
    name: "validateERC1155OrderSignature",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "erc721TokenId",
        type: "uint256",
      },
    ],
    name: "validateERC721OrderProperties",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "taker", type: "address" },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc20TokenAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "feeData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "erc721TokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "propertyData",
                type: "bytes",
              },
            ],
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        internalType: "struct LibNFTOrder.ERC721Order",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct LibSignature.Signature",
        name: "signature",
        type: "tuple",
      },
    ],
    name: "validateERC721OrderSignature",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const

export default zeroExAbi