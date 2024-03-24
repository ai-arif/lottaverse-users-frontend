import Homepage from '@/Components/Homepage/Homepage'
import React, { useEffect } from 'react'
import axios from '../utils/axios'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { setUserInformation } from '@/features/user/userSlice'
import Head from 'next/head'

export const getServerSideProps = async (context) => {
  return {
    props: {
      
    }
  }
  // const token = context.req.cookies.token
  
  // if(!token){
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   }
  // }
  // const res = await axios.get('/api/home', {
  //   headers: {
  //     Authorization: `${token}`,
  //   },
  // })
  // const data = await res.data
  
  // if(res.status!=200){
  //   // clear the cookie
  //   Cookies.remove('mess_token')
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   }
  }


const index = () => {
  const dispatch=useDispatch()
  
  return (
    <div>
      <Head>
        <title>Lottaverse - Dashboard</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Homepage/>
    </div>
  )
}

export default index
