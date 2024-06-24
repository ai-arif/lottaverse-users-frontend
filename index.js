import Layout from "@/components/Layout";
import WalletButton from "@/components/WalletButton";
import { createLottery } from "@/source/services/api/methods/lottery";
import React, { useState, useEffect, useCallback } from "react";
import { LOTTERY_CONTRACT_ABI } from "../../components/constants/lotteryabi";
import moment from "moment";
import {
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { bep20 } from "../../components/constants/bep20abi";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import { formatEther, parseEther } from "viem";
import { blockchainconfig } from "../_app";
// import { writeContract } from "@wagmi/core";

// const bep20Address = "0xa0052764fCDfEFEd6f0485Cf5FBC1BfBB439D9c5";

const Index = () => {
  const { readcontract } = useReadContract();
  const { writeContract, isSuccess, reset, isError, error, data, isPending } =
    useWriteContract();
  const { WaitForTransactionReceipt } = useWaitForTransactionReceipt();
  const { isConnected, chainId, address } = useAccount();
  //************************************* */
  const [formData, setFormData] = useState({
    lotteryType: "",
    expiry: "",
    firstPrize: "",
    secondPrize: "",
    thirdPrize: "",
    fourthPrize: "",
    otherPrizes: "",
    maxTicketCount: "",
    ticketPrice: "",
    operatorCommissionPercentage: "",
    lotteryOperator: address,
  });
  //***********************************/
  const [loading, setLoading] = useState(false);

  // console.log("this is my address", address);
  // console.log("isConnected", isConnected);

  // const lotterycount = useReadContract({
  //   abi: LOTTERY_CONTRACT_ABI,
  //   address: "0x6dcd9b7253f596ae46354e85a08a67d0e88a30cf",
  //   functionName: "lotteryCount",
  //   args: [],
  // });
  // console.log(
  //   "This is user lottery count :::::::::::",
  //   Number(lotterycount.data)
  // );

  // const lotteryinfo = useReadContract({
  //   abi: LOTTERY_CONTRACT_ABI,
  //   address: "0x6dcd9b7253f596ae46354e85a08a67d0e88a30cf",
  //   functionName: "lottery",
  //   args: [1n],
  // });

  const submitLotteryData = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const res = await createLottery({ ...formData, transactionHash: data });
        if (res?.success) {
          reset();
          alert(res?.message);
        }
      } catch (error) {
        alert("api error" + error?.message);
      } finally {
        setLoading(false);
      }
    },
    [formData, reset]
  );

  useEffect(() => {
    if (isSuccess) {
      submitLotteryData(data);
    }
    if (isError) {
      alert(error?.message.split(".")[0]);
      reset();
    }
  }, [isSuccess, data, error, isError, reset, submitLotteryData]);

  // USE WRITE CONTRACT
  const Lottery = async () => {
    const unixEpochTime = moment(formData.expiry).unix();
    console.log("this is my address", address);

    const lotteryOperator = address;
    const ticket = formData.ticketPrice.toString();

    writeContract({
      abi: LOTTERY_CONTRACT_ABI,
      address: "0x6dcd9b7253f596ae46354e85a08a67d0e88a30cf",
      functionName: "createLottery",
      args: [
        lotteryOperator.toString(),
        parseEther(ticket),
        formData.maxTicketCount,
        formData.operatorCommissionPercentage,
        unixEpochTime,
        formData.lotteryType,
      ],
    });
  };

  // const hashs = writeContract({
  //   abi: bep20,
  //   address: "0x03f76C4E1B74f97606B95D354484F6E87F8f54Fe",
  //   functionName: "mint",
  //   args: ["0x14B47cD2cf750b9477EF7B17bBbE428986c80D61", parseEther("1")],
  // });
  // console.log("hash", hashs);
  //  function createLottery(
  //     address _lotteryOperator,
  //     uint256 _ticketPrice,
  //     uint256 _maxTickets,
  //     uint256 _operatorCommissionPercentage,
  //     uint256 _expiration,
  //     uint256 _lotteryId

  // console.log("lotteryOperator", lotteryOperator);
  // console.log("ticketPrice", ticket);
  // console.log("maxTicketCount", formData.maxTicketCount);
  // console.log(
  //   "operatorCommissionPercentage",
  //   formData.operatorCommissionPercentage
  // );
  // console.log("unixEpochTime", unixEpochTime);
  // console.log("formData.lotteryType", formData.lotteryType);

  // let transactionData = useWaitForTransactionReceipt({
  //   hash: txHash,
  //   confirmations: 1,
  //   onReplaced(response) {
  //     if (response?.reason === "cancelled") {
  //       toast.error("Transaction Failed");
  //     }
  //   },
  // });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await Lottery();
  //     } catch (error) {
  //       setLoading(false);
  //       toast.error("Unable to process Transaction!");
  //       console.log("Error", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   if (transactionData?.status === "success") {
  //     console.log(transactionData);
  //     toast.success("Purchased Successfully!");
  //     setLoading(false);
  //     setTxHash(null);
  //     transactionData = "";
  //   }
  // }, [transactionData?.status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //  address _lotteryOperator,
  //         uint256 _ticketPrice,
  //         uint256 _maxTickets,
  //         uint256 _operatorCommissionPercentage,
  //         uint256 _expiration,
  //         uint256 _lotteryId

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (address) {
      await Lottery();
    } else {
      alert("Wallet is not connected");
    }

    // console.log(parseEther(formData.ticketPrice));
    // console.log("This is my address", address);
    // console.log(BigInt(formData.lotteryType));
    // console.log(BigInt(formData.operatorCommissionPercentage));
    // console.log(BigInt(formData.maxTicketCount));

    // console.log(formData);
    // createLoteery(formData);
  };

  return (
    <>
      <Layout>
        <h1>Create Lottery</h1>
        {/* create a form inside card class */}
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="lotteryType">Lottery Type</label>
                <select
                  className="form-control"
                  id="lotteryType"
                  onChange={handleChange}
                  value={formData.lotteryType}>
                  <option value="">Select</option>
                  <option value="0">Easy</option>
                  <option value="1">Super</option>
                  <option value="2">SuperX</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="expiry">Expiry</label>
                <input
                  type="date"
                  className="form-control"
                  id="expiry"
                  onChange={handleChange}
                  value={formData.expiry}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstPrize">First Prize ($)</label>
                <input
                  type="number"
                  className="form-control"
                  id="firstPrize"
                  placeholder="e.g., 3000"
                  onChange={handleChange}
                  value={formData.firstPrize}
                />
              </div>
              <div className="form-group">
                <label htmlFor="secondPrize">Second Prize ($)</label>
                <input
                  type="number"
                  className="form-control"
                  id="secondPrize"
                  placeholder="e.g., 1000"
                  onChange={handleChange}
                  value={formData.secondPrize}
                />
              </div>
              <div className="form-group">
                <label htmlFor="thirdPrize">Third Prize ($)</label>
                <input
                  type="number"
                  className="form-control"
                  id="thirdPrize"
                  placeholder="e.g., 300"
                  onChange={handleChange}
                  value={formData.thirdPrize}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fourthPrize">Fourth Prize ($)</label>
                <input
                  type="number"
                  className="form-control"
                  id="fourthPrize"
                  placeholder="e.g., 100"
                  onChange={handleChange}
                  value={formData.fourthPrize}
                />
              </div>
              <div className="form-group">
                <label htmlFor="otherPrizes">
                  Other Lucky Winners Prize ($)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="otherPrizes"
                  placeholder="Enter other lucky winners prize amount in dollars"
                  onChange={handleChange}
                  value={formData.otherPrizes}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ticketPrice">Ticket Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="ticketPrice"
                  placeholder="Enter Ticket Price"
                  onChange={handleChange}
                  value={formData.ticketPrice}
                />
              </div>
              <div className="form-group">
                <label htmlFor="maxTicketCount">Max Ticket Count</label>
                <input
                  type="number"
                  className="form-control"
                  id="maxTicketCount"
                  placeholder="Enter max ticket count"
                  onChange={handleChange}
                  value={formData.maxTicketCount}
                />
              </div>
              <div className="form-group">
                <label htmlFor="operatorcommissionpercentage">
                  Operator Commission Percentage
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="operatorCommissionPercentage"
                  placeholder="Enter Operator Percentage"
                  onChange={handleChange}
                  value={formData.operatorCommissionPercentage}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                {isPending || loading ? "loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
