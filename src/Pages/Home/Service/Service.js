import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, Category } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (





        <div class="card-group">
            
            <div class="card" style={{width: '18 rem'}}>
                <img className='service-photo w-75 mx-auto mt-4' src={img} alt="" />
                    <div class="card-body">
                        <h5 class="card-title">ID: {id}</h5>
                        <h5 class="card-title">{name}</h5>
                        <h6>Category {Category}</h6>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <Link to='/checkout' className='btn btn-primary'  onClick={() => navigateToServiceDetail(id)}>{name}: Checkout</Link>
                    </div>
            </div>
        </div>








    );
};

export default Service;