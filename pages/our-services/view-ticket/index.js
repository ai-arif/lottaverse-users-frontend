import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    
      <div class="container-fluid">
        <Head>
            <title>Lottaverse - View Ticket</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <table class="table p-2">
          <thead>
            <tr>
              <th scope="col">Package</th>
              <th scope="col">Ticket number</th>
              <th scope="col">Ticket Price</th>
              <th scope="col">Purchase Date</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
        </div>
    
  )
}

export default index
