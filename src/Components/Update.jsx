import { useRef } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch"

const Update = () =>
{
    let {id} = useParams();

   let{data:product, pending, error}= useFetch(` http://localhost:4000/products/${id}`)


    let h = useHistory(); //Which can be used to change the main url....

    let pic = useRef(); // This will work based on references-->  Instead of Using Document.getElementsById we use this....
    let brand = useRef();
    let desc = useRef();
    let discount = useRef();
    let mrp = useRef();
    let color = useRef();
    let fabric = useRef();
    let type = useRef();
    let rate = useRef();


    let handleSubmit=(e)=>
    {
        e.preventDefault() // It will stop the initial render...

        let updateProduct=
    {
        productPic : pic.current.value, // Which can be used to take input value from the user and stored into the variable
        brand : brand.current.value,
        description : desc.current.value,
        discountPrice : discount.current.value,
        mrp:mrp.current.value,
        color:color.current.value,
        fabric:fabric.current.value,
        productType:type.current.value,
        usage:"",
        rating: rate.current.value,
        size:[]
    }

    let genderOptions = document.getElementsByName("gender") //It will work Based on name in the input field
    genderOptions.forEach((inp)=>
    {
        // console.log(v.checked); This checked method will return boolean result based on user action....When we click any option it will return true and except this everthing is false
        if(inp.checked==true)
        {
            updateProduct.usage=inp.value;
        }
    })

    let newSize = []
    let sizeOptions =document.getElementsByName("size")
    sizeOptions.forEach((sizeres)=>
    {
        if(sizeres.checked==true)
        {
            newSize.push(sizeres.value) // Value is predefined one....it will Defined by the user...
        }
    })

    updateProduct.size = newSize;

    fetch(`http://localhost:4000/products/${id}`,{
                                                    method:"PUT",
                                                    headers:{"Contact-Type":"application/json", "Accept-Type":"aplication/json"},
                                                    body: JSON.stringify(updateProduct)
                                                 })
        .then(()=>
        {
            alert("Product has been Updated")
            h.push("/admin")
        })
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
                        <i class="fa-sharp fa-solid fa-cart-shopping-fast" id="cartlogo"></i>
                    </div>
                </nav>
            </div>
            {/* NavBar Ends>>>>>>>>>>>>>>>>>>>>>>> */}

            <div>
            <h1 id="title-Addproducts">AddProducts</h1>
            <hr />
            </div>
       {product && <form onSubmit={handleSubmit} id="form-data">
                <label >Picture</label>                 <input type="url" ref={pic} defaultValue={product.productPic}/>
                <label >Brand</label>                   <input type="text" ref={brand} defaultValue={product.brand}/>
                <label >Description</label>             <textarea cols="30" rows="10" ref={desc} defaultValue={product.description}></textarea>
                <label>Price after Discount</label>     <input type="number" ref={discount} defaultValue={product.discountPrice}/>
                <label>MRP</label>                      <input type="number" ref={mrp} defaultValue={product.mrp}/>
                <label>Color</label>                    <input type="text" ref={color} defaultValue={product.color}/>
                <label>Fabric</label>                   <input type="text" ref={fabric} defaultValue={product.fabric}/>
                <label>Product Type</label>             <input type="text" ref={type} defaultValue={product.productType}/>
                <label>Usage</label>                    <div>
                                                        <input type="radio" name="gender" value="Male"/> <label>Male</label>  
                                                        <input type="radio" name="gender" value="Female"/> <label>Female</label>
                                                        <input type="radio" name="gender" value="Unisex"/> <label>Unisex</label>  
                                                         </div>
                 <label>Rating</label>                   <input type="number" ref={rate} step="0.1" min="1" max="5" defaultValue={product.ratings}/> 
                                                                         {/* it will increment based on step*/ }
                 <label>Size</label>                     <div>
                                                        <input type="checkbox" name="size" value="S"/> <label>S</label> 
                                                        <input type="checkbox" name="size" value="M"/> <label>M</label>
                                                        <input type="checkbox" name="size" value="L"/> <label>L</label>
                                                        <input type="checkbox" name="size" value="XL"/> <label>XL</label>  
                                                         </div>
                <input type="submit" value="Update"/>
            </form>}
        </div>
    )
}
export default Update