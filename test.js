import { DataServiceWrapper } from "@redstone-finance/evm-connector";
import { ethers } from "ethers";
import { redstoneOracleAbi } from "./abi.js";

const rpcUrl = "https://data-seed-prebsc-2-s1.bnbchain.org:8545";
const oracleAddress = "0x7d9cEBe7BfE5093d6ed0301032f5afD168EF0ef2";
const priceIds = ["ETH"];

async function run() {
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const oracleContract = new ethers.Contract(
    oracleAddress,
    redstoneOracleAbi,
    provider
  );
  const redstonePayload = await new DataServiceWrapper({
    dataFeeds: priceIds,
  }).getRedstonePayloadForManualUsage(oracleContract);

  console.log("redstonePayload: ", redstonePayload);
}

run();
