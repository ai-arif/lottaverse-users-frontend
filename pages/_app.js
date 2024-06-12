import Navbar from "@/Components/Navbar/Navbar";
import store from "@/store/store";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const restictedRoutes = ["/login", "/register", "/create-mess", "/join-mess", "/", "404", "/forgot-password", "/reset-password", "/verify-email", "/verify-phone"];

  return (
    <Provider store={store}>
      {restictedRoutes.includes(router.pathname) ? null : <Navbar />}
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  );
}
