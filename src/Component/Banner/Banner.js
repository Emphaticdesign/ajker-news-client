import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel variant="white" className="homeBanner">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/OIP.VYBdXKXsZgErD_YAwvOzvwHaE8?pid=ImgDet&rs=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://ak3.picdn.net/shutterstock/videos/13881080/thumb/1.jpg?i10c=img.resize(height:160)"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/R.3bb7456aac59697654943d336ca418f3?rik=Cj4zmOvWgIavlA&riu=http%3a%2f%2fak8.picdn.net%2fshutterstock%2fvideos%2f22742044%2fthumb%2f9.jpg&ehk=Fx8B8KEc2Msk4%2bFaLDx7TsSfhGmdGBeGuTCdZjFo6tY%3d&risl=&pid=ImgRaw&r=0"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;