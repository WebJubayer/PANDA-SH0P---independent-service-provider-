import React from 'react';
import { Container } from 'react-bootstrap';
import Butterfly from '../../../Images/Butterfly.png';
import MobilePhoto3 from '../../../Images/MobilePhoto3.png';
import Photographer5 from '../../../Images/Photographer5.png';
import MobilePhotography1 from '../../../Images/MobilePhotography1.png';
import CameraPhotography1 from '../../../Images/CameraPhotography1.png';
import VariousPhotography1 from '../../../Images/VariousPhotography1.png';
import { Link } from 'react-router-dom';

const HomeServices = () => {
    return (
        <div className='services-body mt-3'>
        <Container>




        <div className='homeServices-body mt-4'>
        <h3 className='mt-4 mb-4 text-primary'>Category</h3>
            <div class="row card-deck">
                <div class="card col-sm-12 col-md-4 col-lg-4">
                    <img class="card-img-top" src={MobilePhotography1} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Mobile Photography</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card col-sm-12 col-md-4 col-lg-4">
                    <img class="card-img-top" src={CameraPhotography1} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Camera Photography</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 13 mins ago</small>
                    </div>
                </div>
                <div class="card col-sm-12 col-md-4 col-lg-4">
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
    </div>
















            <h3 className='mt-4 mb-4 text-primary'>Daily Updates</h3>
            <div class="card-columns">
                <div class="card p-3">
                    <blockquote class="blockquote mb-0 card-body">
                        <p>A portrait is not made in the camera but on either side of it.</p>
                        <footer class="blockquote-footer">
                            <small class="text-muted">
                            - Edward Steichen - <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Photographer5} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title that wraps to a new line</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>

                <div class="card bg-primary text-white text-center p-3">
                    <blockquote class="blockquote mb-0">
                        <p>When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.</p>
                        <footer class="blockquote-footer">
                            <small>
                            - Ansel Adams - <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Butterfly} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Flying Butterfly</h5>
                        <p class="card-text">The butterfly is a flying flower, The flower a tethered butterfly. Just living is not enough," said the butterfly, "one must have sunshine, freedom and a little flower." Love is like a butterfly: It goes where it pleases and it pleases wherever it goes.</p>
                        <p class="card-text"><small class="text-muted">Last updated 23 mins ago</small></p>
                    </div>
                </div>
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">“Your first 10,000 photographs are your worst.”</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div class="card p-3 text-right">
                    <blockquote class="blockquote mb-0">
                        <p>Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.</p>
                        <footer class="blockquote-footer">
                            <small class="text-muted">
                            - Aaron Siskind - <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img class="card-img" src={MobilePhoto3} alt="Card image" />
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Lens</h5>
                        <p class="card-text">“We see the world, not as it is, but as we are──or, as we are conditioned to see it.” “We must look at the lens through we see the world, as well as the world we see, and that the lens itself shapes how we interpret the world.”</p>
                        <p class="card-text"><small class="text-muted">Last updated 13 mins ago</small></p>
                    </div>
                </div>

            </div>
        </Container>

    </div>


    );
};

export default HomeServices;