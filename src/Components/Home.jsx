import ProductBuild from "./ProductBuild"
import loader from '../Database/loader3.jpg'
import useFetch from "./useFetch";
import Navbar from './Navbar'
import { useEffect } from "react";

const Home = ()=>
{
    let{ data:product , pending , error} = useFetch("http://localhost:4000/products")

    useEffect(()=>
    {
        if(localStorage.getItem("cart")==null)
        {
            localStorage.setItem("cart","[]")
        }
    },[])
    
    return(
        <div>
            <Navbar/>
            {error && <h1>{error}</h1>}
            {pending==true && <img src={loader} id="loader" /> }  
            {product && <ProductBuild products={product} title="All Products"/>}    
        </div>
    )
}

export default Home