import { _claimReward } from "@/utils/newUtils/claimReward";
import { _connectWallet } from "@/utils/newUtils/connectWallet";
import { _getOwner } from "@/utils/newUtils/getOwner";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "@/utils/axiosInstance";
import { _getRewardAmount } from "@/utils/newUtils/getRewardAmount";
import priceConverter from "@/utils/priceConverter";

const index = () => {
  const {user}=useSelector(state=>state.user)
  const [rewardAmount, setRewardAmount] = useState(0);
    const [withdrawhistory, setWithdrawHistory] = useState([]);
    useEffect(() => {
        connectWallet();
        loadWithdrawHistory();
    }, [])
  const loadWithdrawHistory=async()=>{
    const res=await axiosInstance.get('/api/withdrawhistory')
    setWithdrawHistory(res.data.data)
}
const handleSubmitWithdraw=async()=>{
    const res=await axiosInstance.post('/api/withdraw',{
        amount:rewardAmount
    })
    await loadWithdrawHistory();
}
  const connectWallet=async()=>{
    try {
        let address=await _connectWallet();
        const rewardAmount=await _getRewardAmount(address,1);
        setRewardAmount(rewardAmount);
    } catch (error) {
        console.log(error)
        alert('Please connect your wallet')
    }
}
  const claimReward=async()=>{
    try {
      if(rewardAmount<=0){
        alert('No reward to claim')
        return;
      }
        const owner=await _getOwner();
        console.log("owner",owner)
        let address=await _connectWallet();
        const tokenAddress=process.env.TOKEN_ADDRESS
        console.log("tokenAddress",tokenAddress)
        const rewardAmount=await _claimReward(1,tokenAddress,address,owner);
        console.log("rewardAmount",rewardAmount)
        setTimeout(() => {
            connectWallet();
        }, 1000);
        await handleSubmitWithdraw();
        
    } catch (error) {
        console.log(error)
        alert('Please connect your wallet')
    }
}
  return (
    <div class="container">
      <Head>
        <title>Profile Overview</title>
      </Head>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">Profile Overview</div>
            <div class="card-body py-4 d-flex flex-column gap-3 ">
              <div className="mb-0 d-flex justify-content-between align-items-center">
                <div className="d-flex  gap-1 align-items-end">
                  <div className="d-flex gap-2">
                    <p className="mb-0">{user?.address}</p>
                    <img
                      src="/img/check.png"
                      alt="verified-icon"
                      width="20"
                      height="20"
                    />
                  </div>
                </div>
                <i class="ki-duotone ki-verify fs-1 text-primary"></i>
                {/* <p className="px-3 py-2 badge badge text-bg-success mb-0">
                  Status: Active
                </p> */}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>
                  <b>
                    {user?.userType=='premiun' ? 
                    <span class="badge badge-success bg-success">Premiun</span>
                    :
                    <span class="badge badge-primary bg-primary">User</span>
                    }
                  </b>
                </p>
                <p>
                  <b>Expiry Date: </b>{new Date(user?.expiryDate).toDateString()}
                </p>
              </div>
              <div class="d-flex  align-items-center gap-3">
                <div class="card profile-info-card p-0">
                  <div class="card-body py-3 px-4">
                    <h5 class="card-title text-warning p-0 mb-3">${priceConverter(rewardAmount)}</h5>
                    <h6 class="card-subtitle mb-2 text-light">
                      Available Balance
                    </h6>
                  </div>
                </div>
                <div class="card profile-info-card p-0">
                  <div class="card-body py-3 px-4">
                    <h5 class="card-title text-warning p-0 mb-3">${priceConverter(user?.earnings)}</h5>
                    <h6 class="card-subtitle mb-2 text-light">
                      Total Earnings
                    </h6>
                  </div>
                </div>
                <div class="card profile-info-card p-0">
                  <div class="card-body py-3 px-4">
                    <h5 class="card-title text-warning p-0 mb-3">${priceConverter(user?.payout)}</h5>
                    <h6 class="card-subtitle mb-2 text-light">Pay Out</h6>
                  </div>
                </div>
              </div>
              {/* make a withdraw option where money will be shown and a withdraw button */}
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex gap-3">
                  {/* <input
                    type="text"
                    class="form-control"
                    readOnly
                    value={"$"+priceConverter(rewardAmount)}
                  /> */}
                  <button class="btn btn-primary" onClick={claimReward}>
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
