import HeadTag from "../partials/HeadTag";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
