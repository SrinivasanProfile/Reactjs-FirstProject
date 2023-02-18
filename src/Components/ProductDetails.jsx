import { useParams } from "react-router-dom"
import useFetch from "./useFetch";
import loader from '../Database/loader3.jpg'
import { Link } from "react-router-dom";
import cart from "../Database/cartlogo.png"

const ProductDetails=() =>
{
    let{id}=useParams();

    let{data:product , pending , error} = useFetch(`http://localhost:4000/products/${id}`)

    let handleCart= ()=>
    {
        let cartArray =  localStorage.getItem("cart") // By using this method we can get the local storage details >>>>>>>>
        cartArray = JSON.parse(cartArray) // To convert JSON to JS
        console.log(cartArray);

        let present = cartArray.some((item)=>{return item.id == product.id}) // It will compare the value, if any one value is true then it will give true>>>>>

        if(present == false)
        {
            cartArray.push(product)
            cartArray = JSON.stringify(cartArray) // Convert JS to JSON
            localStorage.setItem("cart",cartArray)
            alert("Cart has been Added")  
        }
        else
        {
            alert("Item already Added")
        }
    }
    return(
        <div>
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
                        <Link to="/user" id="logout">Logout</Link>
                        <Link to="/cart" id="cart">Cart</Link>
                        <i id="cartlogo"><img src={cart} alt="" /></i>
                    </div>
                </nav>
            </div>
            {/* NavBar Ends>>>>>>>>>>>>>>>>>>>> */}

            <h1 id="title-productDetails">product details page :</h1>
            <hr />   
            {error && <h1>{error}</h1>}
            {pending==true && <img src={loader}  /> }  
            <div className="single-productDetails">
            {product && <div>
                <div className="prodImg">
                <img src={product.productPic} alt="image not found" id="single-productDetails-img"/>
                </div>
                <div id="single-productDetails-content">
                <span>{product.brand}</span>
                <span>{product.description}</span>
                <h6>{product.discountPrice}</h6>
                <h2>{product.mrp}</h2>
                <span>Color:{product.color}</span>
                <h6>{product.productType}</h6>
                <h5>{product.usage}</h5>
                <span>{product.ratings}</span>
                <h2>Size:{product.size}</h2>
                <button id="cart-btn" onClick={handleCart}>Add to Cart</button>
                </div>
            </div> }  
            </div>  
        </div>
    )
}

export default ProductDetails