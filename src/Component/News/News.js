import React, { useEffect, useState } from 'react';
import NewsMin from './NewsMin';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-hollows-04382.herokuapp.com/news')
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