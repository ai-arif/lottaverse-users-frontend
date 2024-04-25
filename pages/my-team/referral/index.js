import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCommissionHistories } from '@/features/user/userSlice'
const index = () => {
  const dispatch=useDispatch()
  const {commissionHistories}=useSelector(state=>state.user)
  useEffect(() => {
    dispatch(fetchCommissionHistories())
  }, [])
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
            {
              commissionHistories.map((history,index)=>(
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{history.fromAddress}</td>
                  <td>{history.amount}</td>
                  <td>{history.account_status}</td>
                  <td>{history.joined}</td>
                </tr>
              ))
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default index
