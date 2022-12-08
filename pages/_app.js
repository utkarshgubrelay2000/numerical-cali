import '../styles/globals.css';
import '../styles/color.scss'
import '../styles/method.scss'
import '../styles/main.scss'
import '../styles/footer.scss'
import 'react-toastify/dist/ReactToastify.css';  
import 'bootstrap/dist/css/bootstrap.css'
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,ArcElement,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Tooltip
);
function MyApp({ Component, pageProps }) {
  const chartRef = useRef<ChartJS>(null);
  function triggerTooltip(chart) {
    const tooltip = chart?.tooltip;
  
    if (!tooltip) {
      return;
    }
  
    if (tooltip.getActiveElements().length > 0) {
      tooltip.setActiveElements([], { x: 0, y: 0 });
    } else {
      const { chartArea } = chart;
  
      tooltip.setActiveElements(
        [
          {
            datasetIndex: 0,
            index: 2,
          },
          {
            datasetIndex: 1,
            index: 2,
          },
        ],
        {
          x: (chartArea.left + chartArea.right) / 2,
          y: (chartArea.top + chartArea.bottom) / 2,
        }
      );
    }
  
    chart.update();
  }
  useEffect(() => {
    const chart = chartRef.current;

    triggerTooltip(chart);
  }, []);

  return (
    <RecoilRoot>
      <Head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </RecoilRoot>
  )
}

export default MyApp
