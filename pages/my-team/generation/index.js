import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReferralLevelCount } from '@/features/user/userSlice';
const index = () => {
  const dispatch=useDispatch()
  const {referralLevelCount}=useSelector(state=>state.user)
  
  useEffect(() => {
    if(referralLevelCount?.length==0){
      dispatch(fetchReferralLevelCount())
    }
  }, [])


  return (
    <div>
      {/* create table using bootstrap class, with fields Referral Level, Total user Active User, Inactive User, Referral Commission */}
      <div class="container-fluid">
        <table class="table table-dark p-2">
          <thead>
            <tr className='text-center p-3'>
            {/* <th scope="col">SL</th> */}
              <th scope="col">Referral Level</th>
              <th scope="col">Total User</th>
              <th scope="col">Active User</th>
              <th scope="col">Inactive User</th>
              <th scope="col">Referral Commission</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {
              referralLevelCount.map((item, index) => (
                <tr key={index}>
                  {/* <th scope="row">{index+1}</th> */}
                  <th scope="row">Level {item.referralLevel}</th>
                  <td>{item.totalUsers}</td>
                  <td>{item.activeUsers}</td>
                  <td>{item.inactiveUsers}</td>
                  <td>{item.referralCommission}</td>
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
