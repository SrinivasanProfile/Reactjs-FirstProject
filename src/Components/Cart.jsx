import { useEffect, useState } from "react"
import useFetch from "./useFetch"

const Cart = () =>
{
    let[cart,setCart] = useState([])
    let{data:product, pending , error} = useFetch(`http://localhost:4000/products`)

    useEffect(()=>
    {
        let cartArray = localStorage.getItem("cart")
        cartArray = JSON.parse(cartArray)
        setCart(cartArray)
    },[])

    return(
        <div id="cart-title">
           <h1 >Cart Page</h1>
           {
                product && product.map((item)=>
                {
                    return(
                        <div>
                            <img src={item.productPic}/>
                            <h1>{item.productType}</h1>
                            <h3>{item.description}</h3>
                            <h4>{item.discountPrice}</h4>
                            <button id="remove-cart">Remove Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart