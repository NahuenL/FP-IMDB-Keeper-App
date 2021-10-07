import React from 'react';
import Message from './Message';
import EmptyImage from "./../assets/static/images/empty.png";


const Empty = () => (
    <div className="full-img-container">
        <img className="full-img" src={EmptyImage} alt="Empty" />
        <Message infoText="You haven&apos;t watched any movies." />
    </div>
);

export default Empty;
