import Navbar from "./Navbar";
import Footer from "./Footer";
import HeadTag from "../partials/HeadTag";

export default function Layout({ children }) {
  return (
    <>
      <HeadTag />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
