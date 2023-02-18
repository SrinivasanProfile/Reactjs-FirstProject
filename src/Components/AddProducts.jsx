import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

const Addproducts = ()=>
{
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
        e.preventDefault() // It will prevent from initial render(No initial render)

        let newProduct=
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
            newProduct.usage=inp.value;
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

    newProduct.size = newSize;

    fetch("http://localhost:4000/products", {method:"POST", // This method will update the value and  will return new value...
                                             headers:{"Content-Type":"application/json"}, //This Is Default One for all the fetching method...This will mention the what are the file type is...
                                             body:JSON.stringify(newProduct)  //This will convert the JS to JSON object for 
                                             })
    .then(()=>
    {
        alert("New Product as been added");  //This will give alert msge once we click the add
        h.push("/user")   //This is useHistory which can be used to once click on that submit and it will push to the main url at the end(/admin --> /user)
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

            <form onSubmit={handleSubmit} id="form-data">
                <label >Picture</label>                 <input type="url" ref={pic}/>
                <label >Brand</label>                   <input type="text" ref={brand} />
                <label >Description</label>             <textarea cols="30" rows="10" ref={desc} ></textarea>
                <label>Price after Discount</label>     <input type="number" ref={discount} />
                <label>MRP</label>                      <input type="number" ref={mrp}/>
                <label>Color</label>                    <input type="text" ref={color}/>
                <label>Fabric</label>                   <input type="text" ref={fabric}/>
                <label>Product Type</label>             <input type="text" ref={type}/>
                <label>Usage</label>                    <div>
                                                        <input type="radio" name="gender" value="Male"/> <label>Male</label>  
                                                        <input type="radio" name="gender" value="Female"/> <label>Female</label>
                                                        <input type="radio" name="gender" value="Unisex"/> <label>Unisex</label>  
                                                         </div>

                 <label>Rating</label>                  <input type="number" ref={rate} step="0.1" min="1" max="5" /> 
                                                                         {/* it will increment based on step*/ }
                 <label>Size</label>                     <div>
                                                        <input type="checkbox" name="size" value="S"/> <label>S</label> 
                                                        <input type="checkbox" name="size" value="M"/> <label>M</label>
                                                        <input type="checkbox" name="size" value="L"/> <label>L</label>
                                                        <input type="checkbox" name="size" value="XL"/> <label>XL</label>  
                                                         </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Addproducts