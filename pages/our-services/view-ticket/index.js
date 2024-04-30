import { fetchPurchaseHistories } from '@/features/user/userSlice'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const index = () => {
  const dispatch=useDispatch()
  const {purchaseHistories}=useSelector(state=>state.user)
  useEffect(() => {
    dispatch(fetchPurchaseHistories())
  }, [])
  return (
    
      <div class="container-fluid">
        <Head>
            <title>Lottaverse - View Ticket</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <table class="table table-dark p-2">
          <thead>
            <tr>
            <th scope="col">Sl.</th>
              <th scope="col">Package</th>
              <th scope="col">Ticket number</th>
              <th scope="col">Ticket Price</th>
              <th scope="col">Purchase Date</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {
              purchaseHistories.map((history,index)=>(
                <tr>
                  <td>{index+1}</td>
                  <td>{history.lotteryPackage}</td>
                  <td>{history.ticketId}</td>
                  <td>{history.amount}</td>
                  <td>{new Date(history.createdAt).toLocaleDateString()}</td>
                  <td>{history.result}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
    
  )
}

export default index
