// import Layout from "@/components/Layout";
// import WalletButton from "@/components/WalletButton";
// import { createLoteery } from "@/source/services/api/methods/lottery";
// import React, { useState, useEffect } from "react";
// import { LOTTERY_CONTRACT_ABI } from "../../components/constants/lotteryabi";
// import moment from "moment";
// import {
//   useReadContract,
//   useWaitForTransactionReceipt,
//   useWriteContract,
// } from "wagmi";
// import { bep20 } from "../../components/constants/bep20abi";
// import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
// import { formatEther, parseEther } from "viem";
// import { http, createConfig } from "@wagmi/core";
// import { mainnet, bscTestnet, bsc } from "wagmi/chains";
// import { writeContract } from "@wagmi/core";

// // import { config } from "../_app";
// import { blockchainconfig } from "../_app";

// const bep20Address = "0xa0052764fCDfEFEd6f0485Cf5FBC1BfBB439D9c5";

// const Index = () => {
//   // const config = createConfig({
//   //   chains: [bscTestnet],
//   //   transports: {
//   //     [bscTestnet.id]: http(),
//   //   },
//   // });
//   // const { readcontract } = useReadContract();
//   // const { writeContract } = useWriteContract();
//   const { WaitForTransactionReceipt } = useWaitForTransactionReceipt();
//   const { isConnected, chainId, address } = useAccount();

//   //***********************************/
//   const [txHash, setTxHash] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // console.log("this is my address", address);
//   console.log("isConnected", isConnected);
//   // const Owner = useReadContract({
//   //   abi: bep20,
//   //   address: bep20Address,
//   //   functionName: "owner",
//   // });
//   // console.log("owner of contract", Owner.data);
//   // const balanceOf = useReadContract({
//   //   abi: bep20,
//   //   address: bep20Address,
//   //   functionName: "balanceOf",
//   //   args: [Owner.data],
//   // });
//   // console.log("This is user balance", Number(balanceOf.data));

//   // USE WRITE CONTRACT
//   const Lottery = async () => {
//     console.log("calling");
//     const unixEpochTime = moment(formData.expiry).unix();

//     const createlottery = await writeContract(blockchainconfig, {
//       abi: LOTTERY_CONTRACT_ABI,
//       address: "0x52c99f1a0357b51865ddf226f1e2af8e1e753b80",
//       functionName: "createLottery",
//       args: [
//         address,
//         parseEther(formData.ticketPrice),
//         BigInt(formData.maxTicketCount),
//         BigInt(formData.operatorCommissionPercentage),
//         unixEpochTime,
//         BigInt(formData.lotteryType),
//       ],
//     });
//     setTxHash(createlottery);
//   };

//   // let transactionData = useWaitForTransactionReceipt({
//   //   hash: txHash,
//   //   confirmations: 1,
//   //   onReplaced(response) {
//   //     if (response?.reason === "cancelled") {
//   //       toast.error("Transaction Failed");
//   //     }
//   //   },
//   // });

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       await Lottery();
//   //     } catch (error) {
//   //       setLoading(false);
//   //       // toast.error("Unable to process Transaction!");
//   //       console.log("Error", error);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   // useEffect(() => {
//   //   if (transactionData?.status === "success") {
//   //     console.log(transactionData);
//   //     toast.success("Purchased Successfully!");
//   //     setLoading(false);
//   //     setTxHash(null);
//   //     transactionData = "";
//   //   }
//   // }, [transactionData?.status]);

//   const [formData, setFormData] = useState({
//     lotteryType: "",
//     expiry: "",
//     firstPrize: "",
//     secondPrize: "",
//     thirdPrize: "",
//     fourthPrize: "",
//     otherPrizes: "",
//     maxTicketCount: "",
//     ticketPrice: "",
//     operatorCommissionPercentage: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };
//   //  address _lotteryOperator,
//   //         uint256 _ticketPrice,
//   //         uint256 _maxTickets,
//   //         uint256 _operatorCommissionPercentage,
//   //         uint256 _expiration,
//   //         uint256 _lotteryId
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // const unixEpochTime = moment(formData.expiry).unix();
//     writeContract(blockchainconfig, {
//       abi: bep20,
//       address: bep20Address,
//       functionName: "mint",
//       args: ["0x14B47cD2cf750b9477EF7B17bBbE428986c80D61", BigInt(1000)],
//     });
//     // setTxHash(createlottery);
//     // WaitForTransactionReceipt({
//     //   hash: txHash,
//     //   confirmations: 1,
//     //   onReplaced(response) {
//     //     if (response?.reason === "cancelled") {
//     //       toast.error("Transaction Failed");
//     //     }
//     //   },
//     // });

//     // Lottery();
//     // transactionData();
//     console.log(parseEther(formData.ticketPrice));
//     console.log("This is my address", address);
//     console.log(BigInt(formData.lotteryType));
//     console.log(BigInt(formData.operatorCommissionPercentage));
//     console.log(BigInt(formData.maxTicketCount));

//     console.log(formData);
//     // createLoteery(formData);
//   };

//   return (
//     <>
//       <Layout>
//         <h1>Create Lottery</h1>
//         {/* create a form inside card class */}
//         <div className="card">
//           <div className="card-body">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="lotteryType">Lottery Type</label>
//                 <select
//                   className="form-control"
//                   id="lotteryType"
//                   onChange={handleChange}
//                   value={formData.lotteryType}>
//                   <option value="">Select</option>
//                   <option value="0">Easy</option>
//                   <option value="1">Super</option>
//                   <option value="2">SuperX</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="expiry">Expiry</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   id="expiry"
//                   onChange={handleChange}
//                   value={formData.expiry}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="firstPrize">First Prize ($)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="firstPrize"
//                   placeholder="e.g., 3000"
//                   onChange={handleChange}
//                   value={formData.firstPrize}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="secondPrize">Second Prize ($)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="secondPrize"
//                   placeholder="e.g., 1000"
//                   onChange={handleChange}
//                   value={formData.secondPrize}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="thirdPrize">Third Prize ($)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="thirdPrize"
//                   placeholder="e.g., 300"
//                   onChange={handleChange}
//                   value={formData.thirdPrize}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="fourthPrize">Fourth Prize ($)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="fourthPrize"
//                   placeholder="e.g., 100"
//                   onChange={handleChange}
//                   value={formData.fourthPrize}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="otherPrizes">
//                   Other Lucky Winners Prize ($)
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="otherPrizes"
//                   placeholder="Enter other lucky winners prize amount in dollars"
//                   onChange={handleChange}
//                   value={formData.otherPrizes}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="ticketPrice">Ticket Price</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="ticketPrice"
//                   placeholder="Enter Ticket Price"
//                   onChange={handleChange}
//                   value={formData.ticketPrice}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="maxTicketCount">Max Ticket Count</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="maxTicketCount"
//                   placeholder="Enter max ticket count"
//                   onChange={handleChange}
//                   value={formData.maxTicketCount}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="operatorcommissionpercentage">
//                   Operator Commission Percentage
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="operatorCommissionPercentage"
//                   placeholder="Enter Operator Percentage"
//                   onChange={handleChange}
//                   value={formData.operatorCommissionPercentage}
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary mt-3">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default Index;

// import Layout from "@/components/Layout";
// import WalletButton from "@/components/WalletButton";
// import { createLoteery } from "@/source/services/api/methods/lottery";
// import React, { useState, useEffect } from "react";
// import { LOTTERY_CONTRACT_ABI } from "../../components/constants/lotteryabi";
// import moment from "moment";
// import {
//   useReadContract,
//   useWaitForTransactionReceipt,
//   useWriteContract,
// } from "wagmi";
// import { bep20 } from "../../components/constants/bep20abi";
// import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
// import { formatEther, parseEther } from "viem";
// import { blockchainconfig } from "../_app";
// // import { writeContract } from "@wagmi/core";

// // const bep20Address = "0xa0052764fCDfEFEd6f0485Cf5FBC1BfBB439D9c5";

// const Index = () => {
//   // const { readcontract } = useReadContract();
//   const { writeContract } = useWriteContract();
//   const { WaitForTransactionReceipt } = useWaitForTransactionReceipt();
//   const { isConnected, chainId, address } = useAccount();

//   //***********************************/
//   const [txHash, setTxHash] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // console.log("this is my address", address);
//   console.log("isConnected", isConnected);
//   // const Owner = useReadContract({
//   //   abi: bep20,
//   //   address: bep20Address,
//   //   functionName: "owner",
//   // });
//   // console.log("owner of contract", Owner.data);
//   // const balanceOf = useReadContract({
//   //   abi: bep20,
//   //   address: bep20Address,
//   //   functionName: "balanceOf",
//   //   args: [Owner.data],
//   // });
//   // console.log("This is user balance", Number(balanceOf.data));

//   // USE WRITE CONTRACT
//   const Lottery = async () => {
//     const hashs = writeContract({
//       abi: bep20,
//       address: "0x03f76C4E1B74f97606B95D354484F6E87F8f54Fe",
//       functionName: "mint",
//       args: ["0x14B47cD2cf750b9477EF7B17bBbE428986c80D61", parseEther("1")],
//     });
//     // console.log("hash", hashs);
//     //   const unixEpochTime = moment(formData.expiry).unix();

//     //   const createlottery = writeContract({
//     //     abi: LOTTERY_CONTRACT_ABI,
//     //     address: "0x52c99f1a0357b51865ddf226f1e2af8e1e753b80",
//     //     functionName: "createLottery",
//     //     args: [
//     //       address,
//     //       parseEther(formData.ticketPrice),
//     //       BigInt(formData.maxTicketCount),
//     //       BigInt(formData.operatorCommissionPercentage),
//     //       unixEpochTime,
//     //       BigInt(formData.lotteryType),
//     //     ],
//     //   });
//     setTxHash(hashs);
//   };

//   // let transactionData = useWaitForTransactionReceipt({
//   //   hash: txHash,
//   //   confirmations: 1,
//   //   onReplaced(response) {
//   //     if (response?.reason === "cancelled") {
//   //       toast.error("Transaction Failed");
//   //     }
//   //   },
//   // });

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       await Lottery();
//   //     } catch (error) {
//   //       setLoading(false);
//   //       toast.error("Unable to process Transaction!");
//   //       console.log("Error", error);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   // useEffect(() => {
//   //   if (transactionData?.status === "success") {
//   //     console.log(transactionData);
//   //     toast.success("Purchased Successfully!");
//   //     setLoading(false);
//   //     setTxHash(null);
//   //     transactionData = "";
//   //   }
//   // }, [transactionData?.status]);

//   const [formData, setFormData] = useState({
//     lotteryType: "",
//     expiry: "",
//     firstPrize: "",
//     secondPrize: "",
//     thirdPrize: "",
//     fourthPrize: "",
//     otherPrizes: "",
//     maxTicketCount: "",
//     ticketPrice: "",
//     operatorCommissionPercentage: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };
//   //  address _lotteryOperator,
//   //         uint256 _ticketPrice,
//   //         uint256 _maxTickets,
//   //         uint256 _operatorCommissionPercentage,
//   //         uint256 _expiration,
//   //         uint256 _lotteryId
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await Lottery();
//     console.log("txHash", txHash);
//     // let transactionData = WaitForTransactionReceipt({
//     //   hash: hashs,
//     //   confirmations: 1,
//     //   onReplaced(response) {
//     //     if (response?.reason === "cancelled") {
//     //       // toast.error("Transaction Failed");
//     //     }
//     //   },
//     // });
//     // setTxHash(createlottery);
//     // WaitForTransactionReceipt({
//     //   hash: txHash,
//     //   confirmations: 1,
//     //   onReplaced(response) {
//     //     if (response?.reason === "cancelled") {
//     //       toast.error("Transaction Failed");
//     //     }
//     //   },
//     // });
//     // const get = Lottery();
//     // transactionData();
//     console.log(parseEther(formData.ticketPrice));
//     console.log("This is my address", address);
//     console.log(BigInt(formData.lotteryType));
//     console.log(BigInt(formData.operatorCommissionPercentage));
//     console.log(BigInt(formData.maxTicketCount));

//     console.log(formData);
//     // createLoteery(formData);
//   };

//   return (
//     <>
//       <Layout>
//         <h1>Create Lottery</h1>
//         {/* create a form inside card class */}
//         <div className="card">
//           <div className="card-body">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="lotteryType">Lottery Type</label>
//                 <select
//                   className="form-control"
//                   id="lotteryType"
//                   onChange={handleChange}
//                   value={formData.lotteryType}>
//                   <option value="">Select</option>
//                   <option value="0">Easy</option>
//                   <option value="1">Super</option>
//                   <option value="2">SuperX</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="expiry">Expiry</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   id="expiry"
//                   onChange={handleChange}
//                   value={formData.expiry}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="firstPrize">First Prize ($)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="firstPrize"
//                   placeholder="e.g., 3000"
//                   onChange={handleChange}
//                   value={formData.firstPrize}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="secondPrize">Second Prize ($)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="secondPrize"
//                   placeholder="e.g., 1000"
//                   onChange={handleChange}
//                   value={formData.secondPrize}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="thirdPrize">Third Prize ($)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="thirdPrize"
//                   placeholder="e.g., 300"
//                   onChange={handleChange}
//                   value={formData.thirdPrize}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="fourthPrize">Fourth Prize ($)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="fourthPrize"
//                   placeholder="e.g., 100"
//                   onChange={handleChange}
//                   value={formData.fourthPrize}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="otherPrizes">
//                   Other Lucky Winners Prize ($)
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="otherPrizes"
//                   placeholder="Enter other lucky winners prize amount in dollars"
//                   onChange={handleChange}
//                   value={formData.otherPrizes}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="ticketPrice">Ticket Price</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="ticketPrice"
//                   placeholder="Enter Ticket Price"
//                   onChange={handleChange}
//                   value={formData.ticketPrice}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="maxTicketCount">Max Ticket Count</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="maxTicketCount"
//                   placeholder="Enter max ticket count"
//                   onChange={handleChange}
//                   value={formData.maxTicketCount}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="operatorcommissionpercentage">
//                   Operator Commission Percentage
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="operatorCommissionPercentage"
//                   placeholder="Enter Operator Percentage"
//                   onChange={handleChange}
//                   value={formData.operatorCommissionPercentage}
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary mt-3">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default Index;
