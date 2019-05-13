import React from "react";
import Metas from "../components/commons/MetaTags";
import mascot from "../assets/img/img.png";

const Privacy = () => (
  <div className="p-content">
    <Metas 
      title="Werick Privacy"
      description="Werick Codes Privacy Policy"
      image={mascot}
    />
    <div className="your-host">
      <h2 className="the-title">Privacy and Policy</h2>
      <p>This Application collect some Personal Data from its users.</p>
    </div>
    <div className="intro-paragraph">
      <p>
        Personal Data collected for the following purposes and used in the
        following services
        <ul>
          <li>
            <i class="fab fa-adversal" /> <>Advertisements</>
            <br />
            Personal Data: Cookies and Usage Data
          </li>
          <li>
            <i class="fas fa-chart-line" /> <>Analytics</>
            <br />
            Fathom Analytics
          </li>
          <li>
            <i class="far fa-envelope-open" /> <>Contact the User</>
            <br />
            Contact form. Personal Data: email address, first name and last name
          </li>
        </ul>
        <hr />
        <div className="c-info">
          <h3 className="lte">Contact Information</h3>
          <section>
            Owner and Data controller is Werick Blog, Westlands, Nairobi Kenya, 
            <br/>
            Owner contact email:
            werick@gmail.com
          </section>
        </div>
      </p>
    </div>
  </div>
);

export default Privacy;
