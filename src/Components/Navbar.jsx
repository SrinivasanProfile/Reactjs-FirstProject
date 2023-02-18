import React from "react";
import { Link } from "react-router-dom";
import cart from "../Database/cartlogo.png"

function Navbar() {
    return (
        <div>
            {/* Navbar Start............ */}
            <div id="maindiv">
                <nav id="mainnav">
                    <div>
                        <Link to="" id="flipkart">Flipkart</Link>
                        <Link to="" id="explore">Explore </Link>
                        <span id="plus">Plus</span>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" id="img1" />

                    </div>
                    <div id="inputbtn">
                        <input type="text" placeholder="     Search for products,brands and more" id="search" />
                        <i class="fa-solid fa-magnifying-glass" id="searchsymbol"></i>
                        <Link to="/"> <button id="btn2">Login</button></Link>
                    </div>
                    <div id="navbarcontent">
                        <Link to="/admin" id="seller">Become a Seller</Link>
                        <Link to="/" id="logout">Logout</Link>
                        <Link to="/cart" id="cart">Cart</Link>
                        <i id="cartlogo"><img src={cart} alt="" /></i>
                    </div>
                </nav>
            </div>  
            {/* Navbar Ends............ */}

            {/* Produc Starts>>>>>>>>>>...... */}
            <div id="Navbar2">
                <a href="" id="id1">Top Offers</a>
                <a href="" id="id2">Grocery</a>
                <a href="" id="id3">Mobiles</a>
                <a href="" id="id4">Fashion </a>
                <a href="" id="id5">Electronics</a>
                <a href="" id="id6">Home</a>
                <a href="" id="id7">Appliances</a>
                <a href="" id="id8">Travel</a>
                <a href="" id="id9">Beauty,Toys & More</a>
                <a href="" id="id10">2-Wheelers</a>
            </div>
            <div id="Navbar2img">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" id="prod1" />
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" id="prod2" />
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" id="prod3" />
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="" id="prod4" />
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" id="prod5" />
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" id="prod6" />
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" id="prod7" />
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" id="prod8" />
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" id="prod9" />
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="" id="prod10" />
            </div>

            {/* Produc Ends>>>>>>>>>>...... */}
        </div>
    )
}

export default Navbar