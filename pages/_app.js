import Layout from '../components/Layout'
import '../styles/globals.css'
import { useRouter } from "next/router"
import HttpsRedirect from 'react-https-redirect'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
      <HttpsRedirect>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HttpsRedirect>
    )
}

export default MyApp
