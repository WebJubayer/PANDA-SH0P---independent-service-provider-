import React from 'react';
import { Container } from 'react-bootstrap';
import MobilePhotography1 from '../../../Images/MobilePhotography1.png';
import CameraPhotography1 from '../../../Images/CameraPhotography1.png';
import VariousPhotography1 from '../../../Images/VariousPhotography1.png';
import { Link } from 'react-router-dom';


const Services = () => {
    return (
        
        <div className='homeServices-body mt-4'>
        <Container>
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={MobilePhotography1} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Mobile Photography</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <Link to="/about">About</Link>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={CameraPhotography1} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Camera Photography</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 13 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={VariousPhotography1} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Various Photography</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 23 mins ago</small>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    );
};

export default Services;