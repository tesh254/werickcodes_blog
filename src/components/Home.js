import React from "react";
import mascot from "../assets/svg/mascot.svg";

const Home = () => (
    <div>
    <div className="home-component">
      <img src={mascot} alt="mascot-brand" className="mascot-image"/>
      <p className="domain">Werick.io</p>
    </div>
  </div>
)

export default Home;