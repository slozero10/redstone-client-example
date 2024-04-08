import { DataServiceWrapper } from "@redstone-finance/evm-connector";
import { ethers } from "ethers";
import { redstoneOracleAbi } from "./abi.js";

const rpcUrl = "https://bsc-dataseed2.bnbchain.org";
const oracleAddress = "0x3903150043dc739926873F6F5f48c3061a55a4dD"; //"0x7d9cEBe7BfE5093d6ed0301032f5afD168EF0ef2"; //0x3903150043dc739926873F6F5f48c3061a55a4dD
const priceIds = ["ETH", "USDT"];

async function run() {
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const oracleContract = new ethers.Contract(
    oracleAddress,
    redstoneOracleAbi,
    provider
  );
  const redstonePayload = await new DataServiceWrapper({
    dataServiceId: "redstone-primary-prod",
    dataFeeds: priceIds,
    uniqueSignersCount: 3,
  }).getRedstonePayloadForManualUsage(oracleContract);
  console.log("redstonePayload: ", redstonePayload);

  const redstonePayloadPrice = await new DataServiceWrapper({
    dataFeeds: priceIds,
    uniqueSignersCount: 1,
    dataServiceId: "redstone-primary-prod",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }).getDataPackagesForPayload();
  const ethPrice =
    redstonePayloadPrice[0].dataPackage.dataPoints[0].numericDataPointArgs
      .value;
  const usdtPrice =
    redstonePayloadPrice[1].dataPackage.dataPoints[0].numericDataPointArgs
      .value;
  console.log("redstonePayloadPrice: ", ethPrice, usdtPrice);
}

run();
