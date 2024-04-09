import React from 'react'
import axiosInstance from '../../utils/axiosInstance'

const index = () => {
  return (
    <div>
      <div className="container-fluid my-4">
                <table className="table text-center table-dark p-2" style={{background:"#1c2642"}}>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">User</th>
                            <th scope="col">Date</th>
                            <th scope="col">Total Ticket</th>
                            <th scope="col">Total Spent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">01</th>
                            <td>Mark</td>
                            <td>20 June, 2024</td>
                            <td>19</td>
                            <td>$5,534</td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
    </div>
  )
}

export default index
