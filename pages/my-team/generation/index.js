import React from 'react'

const index = () => {
  return (
    <div>
      {/* create table using bootstrap class, with fields Referral Level, Total user Active User, Inactive User, Referral Commission */}
      <div class="container-fluid">
        <table class="table table-dark p-2">
          <thead>
            <tr>
              <th scope="col">Referral Level</th>
              <th scope="col">Total User</th>
              <th scope="col">Active User</th>
              <th scope="col">Inactive User</th>
              <th scope="col">Referral Commission</th>
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
    </div>
  )
}

export default index
