import React from "react";


// importing sub components
import HeroSecForm from "./Home/HeroSecForm";
import Offer from "./Home/Offer";
import Facility from "./Home/Facility";
import Travel from "./Home/Travel";
import SocialMedia from "./Home/SocialMedia";

const Home = () => {
 
  return (
    <>
      <main className="container">
        <HeroSecForm />
        <Offer />
        <Travel />
        <Facility />
        <SocialMedia />
      </main>
    </>
  );
};

export default Home;
