import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='NotFound-body'>
            <h1 className=' mt-5 text-danger animate__animated animate__bounceInDown' >404 !!!</h1>
            <h4 className='text-primary animate__animated animate__lightSpeedInRight'>page you are looking for not found</h4>

        </div>
    );
};

export default NotFound;