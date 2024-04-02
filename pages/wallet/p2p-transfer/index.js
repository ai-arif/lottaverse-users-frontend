import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <div>
      <Head>
            <title>Lottaverse - P2P Transfer</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>P2P Transfer Historys</h3>
      <div className="container-fluid my-4">
                <table className="table p-2">
                    <thead>
                        <tr>
                            <th scope="col">W</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">01</th>
                            <td>Mark</td>
                            <td>Otto</td>
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
