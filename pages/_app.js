import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/home.css"
import "../styles/navbar.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
