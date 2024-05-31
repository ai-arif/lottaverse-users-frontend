import React from 'react'
import { useSelector } from 'react-redux'
import priceConverter from '@/utils/priceConverter'
const OtherCommissions = () => {
  const {user}=useSelector(state=>state.user)
  return (
    <div class="row">
      <div class="col-md-12">
      <div className="d-flex justify-content-between">
      <div className="pagetitle">
        <h1>My Earing</h1>
      </div>
      <div className="pagetitle">
        <h1>${priceConverter(user?.earnings)}</h1>
      </div>
      
      </div>
        <table className="table text-white table-dark">
            <thead>
            {/* <tr>
            <td>My Earing</td>
            <td>{user?.earnings}</td>
            </tr> */}
            <tr>
                <td>Jackpot Fund</td>
                <td>{user?.jackpotEarnings}</td>
            </tr>
            <tr>
                <td>Referral Commission</td>
                <td>{user?.commissionEarnings}</td>
            </tr>
            <tr>
                <td>Leader bonus</td>
                <td>{user?.leaderboardEarnings}</td>
            </tr>
            <tr>
                <td>Premium User bonus</td>
                <td>{user?.founder}</td>
            </tr>
            {/* <tr>
                <td>Founder Bonus</td>
                <td>{user?.founder}</td>
            </tr> */}
            </thead>

        </table>
      </div>
    </div>
  )
}

export default OtherCommissions
