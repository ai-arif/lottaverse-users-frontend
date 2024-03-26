import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <div>
            <Head>
                <title>Lottaverse - Withdraw</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="form-group">
                <label for="exampleInputEmail1">Amount</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Amount" />
            </div>
            <div className='my-2 me-auto'>
                <button className="btn btn-primary btn-sm">Deposite</button>
            </div>
            {/* create a table of ID, Date, Amount */}
            <div className="container-fluid my-4">
                <table className="table p-2">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">01</th>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
        </div>
    )
}

export default index
