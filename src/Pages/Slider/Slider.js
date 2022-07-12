import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CameraPhoto1_1 from '../../Images/CameraPhoto1_1.png';
import KitsPhoto1_1 from '../../Images/KitsPhoto1_1.png';
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
                        <h3 className='text-danger'>Padukune Depka</h3>
                        <p>Professional photographer at world most popular company <strong className='text-primary'>Programming-Hero</strong>.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={MobilePhoto1_1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>MOST view photo </h3>
                        <p>This is the our most view photo and one of the top selling products.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={KitsPhoto1_1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>MACHINE</h3>
                        <p> believe it or not.... Without them we are nothing....</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
};
export default Slider;