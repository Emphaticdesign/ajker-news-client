import React, { useEffect, useState } from 'react';
import Header from '../../Navbar/Header';
import Sidebar from '../Sidebar/Sidebar';
import InternationalNewsMin from './InternationalNewsMin';

const InternationalNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/worldNews')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="nationalNews col-md-8 row mt-5">
                    {
                        news.map(info => <InternationalNewsMin id={info._id} info={info}></InternationalNewsMin>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InternationalNews;