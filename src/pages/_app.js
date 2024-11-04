import Header from "@/layouts/main";
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <Header>{page}</Header>)
 console.log("getLayout : ",getLayout);
 
  return getLayout(<Component {...pageProps} />)
}