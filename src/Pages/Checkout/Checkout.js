import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    return (


<div className='checkout-body'>
        <div class="mainscreen">
             {/* <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg" class="bgimg " alt="" /> */}
                <div class="checkout-card">
                    <div className='leftside'>
                        <img
                            src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png"
                            class="product"
                            alt="Shoes"
                        />
                    </div>
                    <div class="rightside">
                        <form action="">
                            <h1>CheckOut</h1>
                            <h2>Payment Information</h2>
                            <p>Cardholder Name</p>
                            <input type="text" class="inputbox" name="name" required />
                            <p>Card or Mobile Number</p>
                            <input type="number" class="inputbox" name="card_number" id="card_number" required />

                            <p>Payment Type</p>
                            <select class="inputbox" name="card_type" id="card_type" required>
                                <option value="">--Select a Card Type--</option>
                                <option value="Bkash">Bkash</option>
                                <option value="Nagad">Nagad</option>
                                <option value="Rocket">Rocket</option>
                                <option value="Visa">Visa</option>
                                <option value="MasterCard">MasterCard</option>
                            </select>
                            <div class="expcvv">

                                <p class="expcvv_text">Expiry</p>
                                <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

                                <p class="expcvv_text2">CVV</p>
                                <input type="password" class="inputbox" name="cvv" id="cvv" required />
                            </div>
                            <p></p>
                            {/* <button  type="submit" class="button">CheckOut</button> */}
                            <Link className='button' to='/successcheckout' type="submit" >Checkout</Link>
                        </form>
                    </div>
                </div>
        </div>
</div>





    );
};

export default Checkout;