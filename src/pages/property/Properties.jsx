import React from "react";
import Footer from "../../common/footer/Footer";
import Head from "../../common/header/Head";
import Banner from "../../components/properties/Banner";
import PropertyFilter from "../../components/properties/PropertyFilter";
import PropertyGrid from "../../components/properties/PropertyGrid";

const Properties = () => {
  return (
    <>
      <header>
        <Head />
      </header>
      <Banner />
      <PropertyFilter />
      <PropertyGrid />

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Properties;
