import Head from 'next/head'
import React, { useEffect } from 'react'
import { _getRewardAmount } from '@/utils/newUtils/getRewardAmount'
import { _connectWallet } from '@/utils/newUtils/connectWallet'
const index = () => {
    useEffect(() => {
        connectWallet();
    }, [])

    const connectWallet=async()=>{
        try {
            let address=await _connectWallet();
            console.log(address)
            const rewardAmount=await _getRewardAmount("0x42ee5A701cACC08495926B593c9cc41527502460");
            console.log(rewardAmount)
            
        } catch (error) {
            console.log(error)
            // alert('Please connect your wallet')
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
                    <h2 className='text-white'>0.00000000</h2>
                </div>
            </div>
            <div className="form-group">
                <label className='text-white' htmlFor="exampleInputEmail1">Amount</label>
                <input type="email" className="form-control bg-dark text-white" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Amount" />
            </div>
            <div className='my-2 me-auto'>
                <button className="btn btn-primary btn-sm">Withdraw</button>
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
