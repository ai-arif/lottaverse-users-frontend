import BuyTicketHome from '@/Components/OurServices/BuyTicket/BuyTicketHome'
import Head from 'next/head'


const index = () => {
  
  return (
    <div>
        <Head>
            <title>Lottaverse - Buy Ticket</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <BuyTicketHome/>
    </div>
  )
}

export default index
