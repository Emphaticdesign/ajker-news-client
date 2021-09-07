import React, { useEffect, useState } from 'react';
import NewsMin from './NewsMin';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className="container">
            <div className="row mt-5">
                {
                    news.map(info => <NewsMin id={info._id} info={info}></NewsMin>)
                }
            </div>
        </div>
    );
};

export default News;