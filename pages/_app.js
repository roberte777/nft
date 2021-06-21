import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";


function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <Component {...pageProps} />

    </Layout>
  )
}

export default MyApp
