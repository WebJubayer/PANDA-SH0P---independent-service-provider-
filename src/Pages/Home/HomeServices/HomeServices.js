import React from 'react';
import { Container } from 'react-bootstrap';
import MobilePhotography1 from '../../../Images/MobilePhotography1.png';

const HomeServices = () => {
    return (
        <div className='homeServices-body mt-5'>
            <Container>
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src={MobilePhotography1} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Mobile Photography</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={MobilePhotography1} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Camera Photography</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={MobilePhotography1} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Various Photography</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </Container>
        </div>


    );
};

export default HomeServices;