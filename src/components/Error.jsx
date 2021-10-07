import React from 'react';
import Message from './Message';
import ErrorImage from "./../assets/static/images/error.png";


const Error = () => (
    <div className="full-img-container">
        <img className="full-img" src={ErrorImage} alt="Error" />
        <Message infoText="There was an error.Please try again later." />
    </div>
);

export default Error;
