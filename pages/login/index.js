import Login from '@/Components/Auth/Login'
import React from 'react'
import { useQuery,gql } from '@apollo/client'
import { client } from '../_app'

export async function getServerSideProps(context) {
  const { data } = await client.query({
    query: gql`
    query {
      books {
        name
      }
    }
    `
  });
  
  return {
    props: {
      data:data.books
    }, // will be passed to the page component as props
  }
}

const index = ({data}) => {
  
  return (
    <div>
      {
        data.map((book,index)=>{
          return <h1 key={index}>{book.name}</h1>
        })
      }
    <Login/>
    </div>
  )
}

export default index
