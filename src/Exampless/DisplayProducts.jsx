
let DisplayProducts = ({products,title}) =>
{
    return(
        <div className="display-prod">
            <h1> {title} </h1>
            <div className="products">
            {
                products.map((product)=>{
                    return(
                        <div className="product">
                            <img src={product.productpic} alt="image not found" />
                            <h2>{product.brand}</h2>
                            <p>{product.Description}</p>
                            <span>{product.DiscountPrise}</span>
                            <small>{product.MRP}</small>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default DisplayProducts