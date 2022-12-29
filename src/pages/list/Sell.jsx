import React from "react";
import Head from "../../common/header/Head";
import HeroList from "../../components/hero/HeroList";
import WorkTwo from "../../components/howitworks/WorkTwo";
import ListOverview from "../../components/listoverview/ListOverview";
import NumberStat from "../../components/listoverview/NumberStat";
import Faq from "../../components/faq/Faq";
import Footer from "../../common/footer/Footer";

const Sell = () => {
  return (
    <>
      <header>
        <Head />
      </header>
      <HeroList />
      <ListOverview />
      <NumberStat />
      <WorkTwo />
      <Faq />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Sell;
