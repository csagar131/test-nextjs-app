import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/home.css"
import "../styles/navbar.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
