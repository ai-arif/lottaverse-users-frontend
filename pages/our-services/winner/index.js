import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <div>
            <Head>
                <title>Lottaverse - Winner</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="pagetitle">
                <h1>Winner</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Our Services</li>
                        <li className="breadcrumb-item active">Winner</li>
                    </ol>
                </nav>
            </div>
            <div className="container-fluid">
                <div className="row">

                    <div className="form-group col-3">
                        <label htmlFor="exampleFormControlSelect1">Package</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Package 1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group col-3 mx-1">
                        <label htmlFor="exampleFormControlSelect1">Round</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Round 1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="form-group col-3 ">
                        <label htmlFor="exampleInputEmail1">Ticket</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ticket number" />
                    </div>
                </div>
            </div>
            <div className="container-fluid my-4">
                <table className="table p-2">
                    <thead>
                        <tr>
                            <th scope="col">Position</th>
                            <th scope="col">User id</th>
                            <th scope="col">Win Amount</th>
                            <th scope="col">Ticket No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">01</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>


        </div>
    )
}

export default index
