import React from 'react';
import Header from '../Navbar/Header';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default Home;