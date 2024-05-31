import React from 'react'
import axiosInstance from '../../utils/axiosInstance'
import Head from 'next/head'
import priceConverter from '../../utils/priceConverter'
export const getServerSideProps = async (context) => {
  const res = await axiosInstance.get('/api/leaderboard')
  const data = res.data.data
  return {
    props: { data }
  }
}

const index = ({data}) => {
  
  return (
    <div>
      <Head>
          <title>Lottaverse - Leaderboard</title>
      </Head>
      <div className="container-fluid my-4">
                <table className="table text-center table-dark p-2" style={{background:"#1c2642"}}>
                    <thead>
                        <tr>
                        <th scope="col">Sl.</th>
                            {/* <th scope="col">Id</th> */}
                            <th scope="col">Address</th>
                            <th scope="col">Date</th>
                            <th scope="col">Total Ticket</th>
                            <th scope="col">Total Spent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          data.map((item, index) => (
                            <tr key={index}>
                              <td>{index+1}</td>
                                {/* <td>{item?.referralId}</td> */}
                                <td>{item.address}</td>
                                <td>{new Date(item.lastPurchaseDate).toDateString()}</td>
                                <td>{item.totalTickets}</td>
                                <td>{priceConverter(item.payout)}</td>
                            </tr>
                          ))
                        }
                        
                    </tbody>
                </table>
                </div>
    </div>
  )
}

export default index
