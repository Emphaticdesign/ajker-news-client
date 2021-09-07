import React from 'react';
import './NewsMin.css';

const NewsMin = ({ info }) => {
    return (
        <div className="col-md-4 text-center newsMin">
            <img src={info.img} alt="" />
            <h3>{info.title}</h3>
            <button>View More</button>
        </div>
    );
};

export default NewsMin;