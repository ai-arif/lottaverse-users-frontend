import React from 'react'

const index = () => {
  return (
    <div>
      {/* create table using bootstrap class, with fields Referral Level, Total user Active User, Inactive User, Referral Commission */}
      <div class="container-fluid">
        <table class="table p-2">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">User</th>
              <th scope="col">Date</th>
              <th scope="col">Bonus</th>
              <th scope="col">Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">678935899</th>
              <td>Markus Harris</td>
              <td>April 2, 2024</td>
              <td>26%</td>
              <td className='fw-bold text-primary'>$1,200.00</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default index
