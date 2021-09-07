import React from 'react';
import './../NationalNews/NationalNewsMin.css';

const InternationalNewsMin = ({ info }) => {
    return (
        <div className="col-md-4 text-center nationalNewsMin">
            <img src={info.img} alt="" />
            <h3>{info.title}</h3>
            <button>View More</button>
        </div>
    );
};

export default InternationalNewsMin;