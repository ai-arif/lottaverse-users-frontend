import React from 'react'

const index = () => {
  return (
    <div>
      {/* create table using bootstrap class, with fields Referral Level, Total user Active User, Inactive User, Referral Commission */}
      <div class="container-fluid">
        <table class="table table-dark p-2">
          <thead>
            <tr>
              <th scope="col">SL</th>
              <th scope="col">User ID</th>
              <th scope="col">Balance</th>
              <th scope="col">Account Status</th>
              <th scope="col">Joined</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">678935899</th>
              <td>Markus_Harris</td>
              <td>$2,024</td>
              <td>Active</td>
              <td>20 June, 2024</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default index
