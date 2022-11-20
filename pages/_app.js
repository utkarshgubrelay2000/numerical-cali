import '../styles/globals.css';
import '../styles/color.scss'
import '../styles/main.scss'
import 'react-toastify/dist/ReactToastify.css';  
import 'bootstrap/dist/css/bootstrap.css'
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <ToastContainer />
    </RecoilRoot>
  )
}

export default MyApp
