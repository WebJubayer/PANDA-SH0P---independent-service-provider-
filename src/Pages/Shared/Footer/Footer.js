import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-body mt-5'>
            <div className='footer-description d-flex justify-content-center align-items-center'>
                <p>Footer Vai Boin here <br></br> <span className='copyright'>Copyright Ⓒ2022 </span></p>
            </div>
            <div className='footer-icon d-flex justify-content-center align-items-center'>
                <i className='icon fa-brands fa-facebook'></i>
                <i className='icon fa-brands fa-instagram'></i>
                <i className='icon fa-brands fa-twitter'></i>
                <i className='icon fa-brands fa-google-plus'></i>
                <i className='icon fa-brands fa-linkedin'></i>

            </div>
        </footer>





        // <footer className='footer-body '>
        //     <div className='icons mt-5'>
        //         <i className='icon fa-brands fa-facebook'></i>
        //         <i className='icon fa-brands fa-instagram'></i>
        //         <i className='icon fa-brands fa-twitter'></i>
        //         <i className='icon fa-brands fa-google-plus'></i>
        //         <i className='icon fa-brands fa-linkedin'></i>
        //     </div>
        // </footer>
    );
};

export default Footer;