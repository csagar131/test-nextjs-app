import Head from "next/head";
import { Fragment } from "react";
import Banner from "../components/Home/Banner";
import DelightCustomer from "../components/Home/DelightCustomer";
import DownloadPickrrSection from "../components/Home/DownloadPickrrSection";
import Feature from "../components/Home/Feature";
import OptimizeBusinessSolution from "../components/Home/OptimizeBusinessSolution";
import PickrrChannel from "../components/Home/PickrrChannel";
import PickrrCourierPartner from "../components/Home/PickrrCourierPartner";
import PickrrFulfillmentPlus from "../components/Home/PickrrFulfillmentPlus";


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>
          eCommerce Logistics Shipping Solutions &#38; Courier Aggregator India
          | Pickrr
        </title>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="professional courier service, ecommerce solution, book courier online, ecom shipping solutions, ecommerce shipping solutions india, ecommerce courier service, e commerce aggregators, ecommerce shipping solutions, logistic courier service, ecommerce logistics india"
        />
        <meta
          name="description"
          content="Pickrr is India's largest ecommerce logistics solution &#38; shipping software for professional courier aggregator services. Take advantage of our real-time order tracking, cash on delivery (COD) features &#38; make your shipping experience hassle-free."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* <!-- Og information details --> */}
        <meta property="og:site_name" content="Pickrr" />
        <meta
          property="og:title"
          content="eCommerce Logistics Shipping Solutions &#38; Courier Aggregator India | Pickrr"
        />
        <meta
          property="og:description"
          content="Pickrr is India's largest ecommerce logistics solution &#38; shipping software for professional courier aggregator services. Take advantage of our real-time order tracking, cash on delivery (COD) features &#38; make your shipping experience hassle-free."
        />
        <meta property="og:url" content="https://www.pickrr.com/" />
        <meta
          property="og:image"
          content="https://pickrr.s3.amazonaws.com:443/2022-02-14T16:02:58.208684_homepage-og.png"
        />
        {/* <!-- Og information details End --> */}
        <link rel="canonical" href="https://www.pickrr.com/" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://use.typekit.net/chg2scz.css" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://d10srchmli830n.cloudfront.net/1639730525608_Group-19262.png"
        />
        {/* <link href="/static/home.css" rel="stylesheet" key="home"/>
        <link href="/static/navbar.css" rel="stylesheet" key="navbar"/> */}
      </Head>
      <Banner />
      <Feature />
      <DelightCustomer />
      <PickrrChannel />
      <PickrrCourierPartner />
      <OptimizeBusinessSolution />
      <PickrrFulfillmentPlus />
      <DownloadPickrrSection />
    </Fragment>
  );
}
