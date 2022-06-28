import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CameraPhoto1_1 from '../../Images/CameraPhoto1_1.png';
import CameraPhoto2 from '../../Images/CameraPhoto2.png';
import CameraPhoto3 from '../../Images/CameraPhoto3.png';
import KitsPhoto1_1 from '../../Images/KitsPhoto1_1.png';
import KitsPhoto2 from '../../Images/KitsPhoto2.png';
import MobilePhoto1_1 from '../../Images/MobilePhoto1_1.png';
import './Slider.css';

const Slider = () => {
        return (
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={CameraPhoto1_1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={MobilePhoto1_1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={KitsPhoto1_1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    };
export default Slider;