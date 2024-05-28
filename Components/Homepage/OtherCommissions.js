import React from 'react'
import { useSelector } from 'react-redux'

const OtherCommissions = () => {
  const {user}=useSelector(state=>state.user)
  return (
    <div class="row">
      <div class="col-md-12">
        <table className="table text-white table-dark">
            <thead>
            <tr>
            <td>My Earing</td>
            <td>{user?.earnings}</td>
            </tr>
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
                <td>Founder Bonus</td>
                <td>{user?.founder}</td>
            </tr>
            </thead>

        </table>
      </div>
    </div>
  )
}

export default OtherCommissions
