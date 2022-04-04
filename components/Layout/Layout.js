import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "../partials/Meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta
        title="This Is A Title | Website Name"
        desc="This is the description"
        canonical="https://www.someurl.com"
        css="/static/css/styles.css"
        js="/static/js/scripts.js"
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
