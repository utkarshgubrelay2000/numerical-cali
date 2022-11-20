import '../styles/globals.css';
import '../styles/color.scss'
import '../styles/main.scss'
import '../styles/footer.scss'
import 'react-toastify/dist/ReactToastify.css';  
import 'bootstrap/dist/css/bootstrap.css'
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </RecoilRoot>
  )
}

export default MyApp
