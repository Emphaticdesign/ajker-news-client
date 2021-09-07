import React, { useEffect, useState } from 'react';
import Header from '../../Navbar/Header';
import Sidebar from '../Sidebar/Sidebar';
import NationalNewsMin from './NationalNewsMin';
import './NationalNews.css';

const NationalNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-hollows-04382.herokuapp.com/nationalNews')
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
                        news.map(info => <NationalNewsMin id={info._id} info={info}></NationalNewsMin>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NationalNews;