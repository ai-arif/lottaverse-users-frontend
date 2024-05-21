import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { _getRewardAmount } from '@/utils/newUtils/getRewardAmount'
import { _connectWallet } from '@/utils/newUtils/connectWallet'
import { _claimReward } from '@/utils/newUtils/claimReward'
import { _getOwner } from '@/utils/newUtils/getOwner'
const index = () => {
    const [rewardAmount, setRewardAmount] = useState(0);
    useEffect(() => {
        connectWallet();
    }, [])

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
            const owner=await _getOwner();
            console.log("owner",owner)
            let address=await _connectWallet();
            const tokenAddress=process.env.TOKEN_ADDRESS
            console.log("tokenAddress",tokenAddress)
            const rewardAmount=await _claimReward(1,tokenAddress,address,owner);
            console.log("rewardAmount",rewardAmount)
            await connectWallet()
            
        } catch (error) {
            console.log(error)
            alert('Please connect your wallet')
        }
    }
    return (
        <div>
            <Head>
                <title>Lottaverse - Withdraw</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container text-center">
                <h1 className='text-white'>Withdraw</h1>
                {/* your current availble reward amount is */}
                <div className="container text-center">
                    <h3 className='text-white'>Your current available reward amount is</h3>
                    <h2 className='text-white'>{rewardAmount}</h2>
                </div>
            </div>
            
            <div className='my-2 me-auto'>
                <button onClick={claimReward} className="btn btn-primary btn-sm">Withdraw</button>
            </div>
            {/* create a table of ID, Date, Amount */}
            <div className="container-fluid my-4">
                <table className="table text-center table-dark p-2">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">01</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                            <span class="badge text-bg-success">Success</span>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
        </div>
    )
}

export default index
