import Navbar from "@/Components/Navbar/Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Analytics } from '@vercel/analytics/react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import store from "@/store/store";
export const client = new ApolloClient({
  uri: 'https://api.rifatewu.xyz/',
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps }) {
  
  const router=useRouter()
  const restictedRoutes=["/login","/register","/create-mess","/join-mess"]
  
  return <ApolloProvider client={client}>
  <Provider store={store}>
  {
    restictedRoutes.includes(router.pathname)?null:<Navbar/>
  }
  <Toaster position="bottom-right" />
  <Component {...pageProps} />
  <Analytics />
  </Provider>
  </ApolloProvider>
}
