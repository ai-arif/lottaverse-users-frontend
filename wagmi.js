import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import Web3 from "web3";
import DashoboardCard from "../components/DashboardCard";
import Userr from "../assets/images/userr.png";

import Userrr from "../assets/images/userrr.png";
import CountdownTimer from "../components/Counter/CountdownTimer";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEthAmount,
  fetchUsdtAmount,
  tokenData,
} from "../Services/web3Services";
import TokenSaleProgress from "../components/TokenSaleProgress/TokenSaleProgress";
import { BtnLoading } from "../components/Loader/BtnLoading";
import {
  useWaitForTransactionReceipt,
  useAccount,
  useWriteContract,
} from "wagmi";

import { toast } from "react-toastify";
import { buyToken } from "../Services/web3Services";
import { saveTransaction } from "../Services/profileServices";
import abiPresale from "../Services/web3config/abiPresale.json";
import abiToken from "../Services/web3config/abiToken.json";
import { polygonAmoy } from "viem/chains";
import { writeContract } from "@wagmi/core";
//import { config } from './config'
import { config } from "../App";
// import { UseWriteContractAsyncParameters } from 'wagmi'
const {
  REACT_APP_PREICO_ADDRESS,
  REACT_APP_POLYGON_PROVIDER,
  REACT_APP_USDT_ADDRESS,
} = process.env;
const BuyTokens = () => {
  const location = useLocation();
  const { contributedValue = 0, contributedCurrency = "MATIC" } =
    location.state || {};

  const dispatch = useDispatch();
  const { ethAmount, usdtAmount } = useSelector((state) => state?.user);
  const getTokenData = useSelector((state) => state?.user?.tokenData);

  const [activeTab, setActiveTab] = useState(1);
  const [coin, setCoin] = useState(contributedCurrency);
  const [contribute, setContribute] = useState(Math.floor(contributedValue));
  const [contributeResult, setContributeResult] = useState("");
  const [bonus, setBonus] = useState(0);
  const [loading, setLoading] = useState(false);
  const [NounceBuy, setNounceBuy] = useState();
  const [gasLimitBuy, setgasLimitBuy] = useState();
  const [buyWithEthData, setBuyWithEthData] = useState(null);
  const [txHash, setTxHash] = useState(null);
  const [usdTxHash, setUSDTxHash] = useState(null);
  const web3 = new Web3(
    new Web3.providers.HttpProvider(REACT_APP_POLYGON_PROVIDER)
  );
  const presaleContract = new web3.eth.Contract(
    abiPresale,
    REACT_APP_PREICO_ADDRESS
  );

  const { Nounce, gasLimit, tokenAmount, amountInWei } = buyWithEthData || {};
  const { address } = useAccount();

  // const { writeContract } = useWriteContract()
  // const {getAccount} = useWriteContract;
  // console.log(getAccount)
  // const { connector } = getAccount(config)

  const buyWithMatic = async () => {
    const txdata = await writeContract(config, {
      abi: abiPresale,
      address: REACT_APP_PREICO_ADDRESS,
      functionName: "buyWithEth",
      args: [tokenAmount],
      value: amountInWei,
      nonce: Nounce,
      gas: gasLimit,
    });
    setTxHash(txdata);
  };

  // const buyWithUSDApprove = async() => {
  //   const txdata = await writeContract(config, {
  //     abi: abiToken,
  //     address: REACT_APP_USDT_ADDRESS,
  //     functionName: "approve",
  //     args: [REACT_APP_PREICO_ADDRESS, amountInWei],
  //     nonce: Nounce,
  //     gas: gasLimit,
  //   })
  //   setTxHash(txdata);
  // }

  // const buyWithUSD = async() => {
  //   const txdata = await writeContract(config, {
  //     address: REACT_APP_PREICO_ADDRESS,
  //     abi: abiPresale,
  //     functionName: "buyWithUSDT",
  //     args: [tokenAmount],
  //     nonce: NounceBuy,
  //     gas: gasLimitBuy
  //   })
  //   setUSDTxHash(txdata);
  // }

  let transactionData = useWaitForTransactionReceipt({
    hash: txHash,
    confirmations: 1,
    onReplaced(response) {
      if (response?.reason === "cancelled") {
        toast.error("Transaction is cancelled");
      }
    },
  });

  // let transactionDataUSDC = useWaitForTransactionReceipt({
  //   hash: usdTxHash,
  //   confirmations: 1,
  //   onReplaced(response) {
  //     if (response?.reason === "cancelled") {
  //       toast.error("Transaction is cancelled");
  //     }
  //   },
  // });

  const handleTabClick = (tab) => {
    setCoin(tab);
    console.log(tab);
    if (tab === "USD") {
      setActiveTab(2);
    } else {
      setActiveTab(1);
    }
  };

  // const handleCurrencyChange = (e) => {
  //   setCoin(e.target.value);
  //   console.log(e.target.value)
  // };
  const setContributeValue = (e) => {
    let value = e.target.value;
    if (value >= 0 && value <= 600000) {
      //600000 is the maxPurchaseLimit
      value = value.replace(/\D/g, "");
      setContribute(value);
    }
  };

  useEffect(() => {
    handleTabClick(coin);
  }, [handleTabClick]);

  useEffect(() => {
    const fetchData = () => {
      if (coin === "MATIC" && contribute !== null) {
        dispatch(fetchEthAmount(1));
        setContributeResult(
          contribute ? (contribute * ethAmount).toFixed(18) : 0
        );
      } else if (coin === "USD" && contribute !== null) {
        dispatch(fetchUsdtAmount(1));
        setContributeResult(
          contribute ? (contribute * usdtAmount).toFixed(18) : 0
        );
      }
      if (contribute >= 1000) {
        //airdrop bonus threshold
        const bonus = (contribute * 5) / 100; //airdrop bonus rate
        setBonus(bonus);
      } else {
        setBonus(0);
      }
    };

    fetchData();
  }, [coin, contribute, ethAmount, dispatch]);

  useEffect(() => {
    const fetchData = () => {
      try {
        dispatch(tokenData());
      } catch (error) {}
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      if (buyWithEthData && buyWithEthData?.gasLimit) {
        try {
          // if(coin === 'MATIC') {
          await buyWithMatic();
          // }
          // else {
          //    await buyWithUSDApprove();
          // }
        } catch (error) {
          setLoading(false);
          setBuyWithEthData(null);
          toast.error("Unable to process Transaction!");
          console.log("Error", error);
        }
      }
    };
    fetchData();
  }, [buyWithEthData]);

  useEffect(() => {
    if (transactionData?.status === "success") {
      console.log(transactionData);
      if (coin === "MATIC") {
        const buyTime = new Date();
        dispatch(
          saveTransaction(
            txHash,
            tokenAmount,
            bonus,
            coin,
            contribute,
            buyTime,
            "PURCHASE",
            address
          )
        );
        toast.success("Purchased Successfully!");
      }
      // else {
      //   toast.success("Approved Successfully!");
      //   setNounceBuy(await web3.eth.getTransactionCount(
      //     address,
      //     "pending"
      //   ));
      //   setgasLimitBuy(await presaleContract.methods
      //       .buyWithUSDT(tokenAmount)
      //       .estimateGas({ from: address }));
      //  await buyWithUSD();
      // }

      setLoading(false);
      setContribute("");
      setBuyWithEthData(null);
      setTxHash(null);
      transactionData = "";
    }
  }, [transactionData?.status]);

  // useEffect(() => {
  //   if (transactionDataUSDC?.status === "success") {
  //     console.log(transactionDataUSDC)
  //     const buyTime = new Date();
  //     dispatch(
  //       saveTransaction(
  //         usdTxHash,
  //         tokenAmount,
  //         bonus,
  //         coin,
  //         contribute,
  //         buyTime,
  //         "PURCHASE",
  //         address
  //       )
  //     );
  //     toast.success("Purchased Successfully!");
  //     setNounceBuy("")
  //     setgasLimitBuy("")
  //     setUSDTxHash(null)
  //     transactionDataUSDC = "";
  //   }
  // }, [transactionDataUSDC?.status]);

  return (
    <div className="container-fluid main-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="dashboard-heading">Buy Tokens</div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-8">
          <div className="dashboard-graph h-100">
            <div className="row">
              <div className="col-lg-12">
                <div className="cardtitle-098">
                  Choose currency and calculate VLXQ tokens price
                </div>
                <p className="card-title-text pt-2">
                  You can buy our VLXQ tokens using MATIC or PUSD to become part
                  of our project.
                </p>
              </div>
              <div className="col-lg-6 mt-4">
                <div
                  className={`tab ${activeTab === 1 ? "activetab" : ""}`}
                  onClick={() => handleTabClick("MATIC")}>
                  MATIC
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div
                  className={`tab ${activeTab === 2 ? "activetab" : ""}`}
                  value="USD"
                  onClick={() => handleTabClick("USD")}>
                  PUSD
                </div>
              </div>
              <div className="col-lg-12 pt-4">
                <div className="cardtitle-098">Token Purchase Calculator</div>
                <p className="card-title-text pt-2">
                  Enter the amount of VLXQ you wish to use. Enter your secret
                  phrase and select how long you wish to lockup your presale
                  Veloxique for Bonus Token amount.
                </p>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="postion-relative">
                  <input
                    className="inpur-dropdownn-001"
                    placeholder="Enter VLXQ"
                    type="number"
                    step="any"
                    onChange={setContributeValue}
                    value={contribute}
                  />
                  {/* <select
                    className="selcivalue"
                    value={coin}
                    onChange={handleCurrencyChange}
                  >
                    <option value="MATIC">MATIC</option>
                    <option value="USD">PUSD</option>
                  </select> */}
                </div>
              </div>
              <div className="col-lg-3 mt-4">
                <div className="mt-2">
                  <span className="">=</span>
                  <span className="token-amount pl-3">
                    {isNaN(contributeResult) ? "-" : contributeResult} {coin}
                  </span>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 mt-4">
                <div className="card-buytoken">
                  <h3 className="card-buytokenheading ">
                    Airdrop Bonus{" "}
                    <span
                      className="pl-2"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={`Threshold = ${getTokenData?.airdropMinimumCoinPurchase} tokens`}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.99992 1.33334C4.32659 1.33334 1.33325 4.32668 1.33325 8.00001C1.33325 11.6733 4.32659 14.6667 7.99992 14.6667C11.6733 14.6667 14.6666 11.6733 14.6666 8.00001C14.6666 4.32668 11.6733 1.33334 7.99992 1.33334ZM7.49992 5.33334C7.49992 5.06001 7.72658 4.83334 7.99992 4.83334C8.27325 4.83334 8.49992 5.06001 8.49992 5.33334V8.66668C8.49992 8.94001 8.27325 9.16668 7.99992 9.16668C7.72658 9.16668 7.49992 8.94001 7.49992 8.66668V5.33334ZM8.61325 10.92C8.57992 11.0067 8.53325 11.0733 8.47325 11.14C8.40658 11.2 8.33325 11.2467 8.25325 11.28C8.17325 11.3133 8.08659 11.3333 7.99992 11.3333C7.91325 11.3333 7.82658 11.3133 7.74658 11.28C7.66658 11.2467 7.59325 11.2 7.52659 11.14C7.46658 11.0733 7.41992 11.0067 7.38658 10.92C7.35325 10.84 7.33325 10.7533 7.33325 10.6667C7.33325 10.58 7.35325 10.4933 7.38658 10.4133C7.41992 10.3333 7.46658 10.26 7.52659 10.1933C7.59325 10.1333 7.66658 10.0867 7.74658 10.0533C7.90658 9.98668 8.09325 9.98668 8.25325 10.0533C8.33325 10.0867 8.40658 10.1333 8.47325 10.1933C8.53325 10.26 8.57992 10.3333 8.61325 10.4133C8.64658 10.4933 8.66658 10.58 8.66658 10.6667C8.66658 10.7533 8.64658 10.84 8.61325 10.92Z"
                          fill="#F76615"
                        />
                      </svg>
                    </span>
                    <Tooltip id="my-tooltip" />
                  </h3>
                  <p className="thyffg-001">{bonus}</p>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="card-buytoken-222">
                  <h3 className="card-buytokenheading-222">Total VLXQ</h3>
                  <p style={{ color: "#fff" }} className="thyffg-001">
                    {Number(contribute) + bonus}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <button
                  onClick={() => {
                    if (!address) {
                      toast.error("Please Connect your Wallet!");
                    } else {
                      const data = dispatch(
                        buyToken(
                          contributeResult,
                          Number(contribute) + bonus,
                          coin,
                          setLoading,
                          setContribute,
                          address
                        )
                      );
                      data.then(function (result) {
                        console.log(result);
                        setBuyWithEthData(result);
                      });
                    }
                  }}
                  disabled={loading}
                  className="btvb-0979dhg mt-4">
                  Purchase Veloxique{" "}
                  {loading && <BtnLoading height={20} width={20} />}{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <DashoboardCard
              icon={Userr}
              title="Token Balance"
              value={"0 VLXQ"}
              titletwo={"Value in"}
              matic={"0.0000 MATIC"}
              pusd={"0.00 PUSD"}
            />
            <div className="col-lg-12 col-xl-12 mt-2 card3rd-0002 mt-3">
              <div className="row">
                <div className="col-lg-4">
                  <h4 className="ybbjfr-087">Token Name</h4>
                </div>
                <div className="col-lg-4">
                  <p className="ygdeffb-0987">Veloxique</p>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-lg-4">
                  <h4 className="ybbjfr-087">Token Symbol</h4>
                </div>
                <div className="col-lg-4">
                  <p className="ygdeffb-0987">VLXQ</p>
                </div>
              </div>
              <button className="btvb-0979dhg mt-4">Download Whitepaper</button>
            </div>
            {/* token sale progresss */}
            <div className="col-lg-12 mt-2 pl-0 pr-0">
              <TokenSaleProgress getTokenData={getTokenData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTokens;
