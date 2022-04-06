import {Fragment} from 'react'
import Banner from '../components/Home/Banner';
import DelightCustomer from '../components/Home/DelightCustomer';
import DownloadPickrrSection from '../components/Home/DownloadPickrrSection';
import Feature from '../components/Home/Feature';
import OptimizeBusinessSolution from '../components/Home/OptimizeBusinessSolution';
import PickrrChannel from '../components/Home/PickrrChannel';
import PickrrCourierPartner from '../components/Home/PickrrCourierPartner';
import PickrrFulfillmentPlus from '../components/Home/PickrrFulfillmentPlus';

export default function Home() {
  return (
    <Fragment>
        <Banner/>
        <Feature/>
        <DelightCustomer/>
        <PickrrChannel/>
        <PickrrCourierPartner/>
        <OptimizeBusinessSolution/>
        <PickrrFulfillmentPlus/>
        <DownloadPickrrSection/>
    </Fragment>
  );
}
