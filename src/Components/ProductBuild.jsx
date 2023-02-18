import { Link } from "react-router-dom"

let ProductBuild = ({products,title})=>
{
    return(
        <div className="allProducts">
            <h1>{title}</h1>
             <div className="products">
           {
                products.map((product)=>
                {
                    return(
                        <div className="display-prod">
                        <Link to={`/ProductDetails${product.id}`} id="single-product">
                        <img src={product.productPic} alt="Image Not Found" id="prod-img" />
                        <div className="content-below-img">
                        <h2>{product.brand}</h2>
                        <h3>{product.description}</h3>
                        <h6>{product.discountPrice}</h6>
                        <h2>{product.mrp}</h2>
                        <span>Color:{product.color}</span>
                        <h4>{product.productType}</h4>
                        <h5>{product.usage}</h5>
                        <span>{product.ratings}</span>
                        <h2>Size:{product.size}</h2>
                        </div>
                        </Link>   
                    </div>
                    )
                })
            }
           </div>
        </div>
    )
}

export default ProductBuild