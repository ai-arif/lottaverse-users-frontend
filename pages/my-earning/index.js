import React from 'react'

const index = () => {
  return (
    <div>
      <div class="container card">
    
    <div class="row card-body my-4">
      <div class="col-md-4 border border-1 text-center text-end">
        <h4>Total Balance</h4>
        <p>$10,000.00</p>
      </div>
      <div class="col-md-4 border border-1 text-center">
        <h4>Available Balance</h4>
        <p>$8,000.00</p>
      </div>
      <div class="col-md-4 border border-1 text-center">
        <h4>Pay Out</h4>
        <p>$1,000.00</p>
      </div>
      
    </div>
    

    
    <div class="row">
      <div class="col-md-12">
        <table className="table">
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

        </table>
      </div>
    </div>
    
  </div>
    </div>
  )
}

export default index
