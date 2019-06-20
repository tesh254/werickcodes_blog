import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/svg/404.svg";
import "../../assets/css/404.css";

const NotFoundPage = () => (
    <Fragment>
        <div className="not-found-container">
            <div className="not-found-holder">
                <div className="not-found-image-holder">
                    <img src={NotFoundImage} className="not-found-image" alt=""/>
                </div>
                <div className="not-found-message">
                    Nothing here to see, seems you lost
                    {" "}<br/>{" "}
                    <Link to="/" id="link">
                        Click here to go to home
                    </Link>
                </div>
            </div>
        </div>
    </Fragment>
)

export default NotFoundPage;