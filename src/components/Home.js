import React from "react";
// import mascot from "../assets/svg/mascot.svg";
import Articles from "./containers/Articles";
import Metas from "../components/commons/MetaTags";
import mascot from "../assets/img/img.png";

const Home = () => (
  <div>
    <Metas 
      title="Werick Codes"
      description="Easy tutorials to kickoff your Software Developer life"
      image={mascot}
    />
    <p className="domain">Werick Blog</p>
    <Articles />
  </div>
);

export default Home;
