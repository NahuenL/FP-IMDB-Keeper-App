import React from "react";
import Message from "./Message";
import NotFoundImage from "./../assets/static/images/404_not_found.png";

const NotFound = () => (
  <div className="full-img-container not-found">
    <img className="full-img" src={NotFoundImage} alt="404 URL Not Found" />
    <Message infoText="Maybe there is a 404 named movie, go and search it." />
  </div>
);

export default NotFound;
