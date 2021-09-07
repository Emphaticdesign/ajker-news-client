import React from 'react';
import Header from '../../Navbar/Header';
import NationalNews from '../NationalNews/NationalNews';
import Sidebar from '../Sidebar/Sidebar';

const TopNews = () => {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <NationalNews></NationalNews>
        </div>
    );
};

export default TopNews;