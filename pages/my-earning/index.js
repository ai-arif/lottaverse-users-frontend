import React from 'react'
import { useSelector } from 'react-redux'

const index = () => {
  const {user}=useSelector(state=>state.user)
  return (
    <div>
      <div class="container card">
    
    <div class="row card-body my-4">
      {/* <div class="col-md-4 border border-1 text-center p-4 text-end">
        <h4>Total Balance</h4>
        <p>$10,000.00</p>
      </div> */}
      <div class="col-md-4 border border-1 text-center p-4">
        <h4>Available Balance</h4>
        <p>${user?.availableBalance}</p>
      </div>
      <div class="col-md-4 border border-1 text-center p-4">
        <h4>Pay Out</h4>
        <p>${user?.payout}</p>
      </div>
      
    </div>
    

    
    <div class="row">
      <div class="col-md-12">
        <table className="table text-white table-dark">
            <thead>
            <tr>
            <th>My Earing</th>
            </tr>
            <tr>
                <td>Jackpot Fund</td>
            </tr>
            <tr>
                <td>Referral Commission</td>
            </tr>
            <tr>
                <td>Leader bonus</td>
            </tr>
            <tr>
                <td>Founder Bonus</td>
            </tr>
            </thead>

        </table>
      </div>
    </div>
    
  </div>
    </div>
  )
}

export default index
