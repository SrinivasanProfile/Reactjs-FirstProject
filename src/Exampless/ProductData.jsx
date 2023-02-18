import { useState } from "react";
import ProductBuild from "../Components/ProductBuild"

const ProductData = ()=>
{
    let[product,setProduct] = useState(
        [
            {
                productPic:"https://rukminim1.flixcart.com/image/495/594/l41n2q80/t-shirt/k/x/j/l-1jgrf-013-blk-jugular-original-imagff7w8tfwd2dr.jpeg?q=50",
                brand:"JUGULAR",
                description:"Printed Men Round Neck Black T-Shirt",
                discountPrice:888,
                mrp:289,
                color:"black",
                fabric:"cotton",
                productType:"t-shirt",
                usage:"male",
                ratings:3.9,
                size :["S","L","XL","XXL"]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/832/832/kgb5rbk0-0/t-shirt/2/c/z/3xl-ss20-sp15-scott-international-original-imafwjzdfja8v5ma.jpeg?q=70",
                brand:"SCOTT INTERNATIONAL",
                description:"Solid Men Polo Neck Green T-Shirt",
                discountPrice:1499,
                mrp:474,
                color:"green",
                fabric:"cotton",
                productType:"t-shirt",
                usage:"male",
                ratings:3.9,
                size:["S","M","L","XL"]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/j/c/u/-original-imaghkc9pkjtuqrg.jpeg?q=70",
                brand:"PETER ENGLAND",
                description:"Men Slim Fit Printed Spread Collar Casual Shirt",
                discountPrice:1799,
                mrp:1079,
                color:"blue",
                fabric:"lenin",
                productType:"Casual Shirt",
                usage:"male",
                ratings:4.5,
                size:["L","XL","XXL"]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/832/832/l34ry4w0/jacket/7/p/h/48-1-no-asnjmslfj45666-allen-solly-original-imagebexzydjercz.jpeg?q=70",
                brand:"Allen Solly",
                description:"Sleeveless Printed Men Nehru Jacket",
                discountPrice:3999,
                mrp:2999,
                color:"blue",
                fabric:"lenin",
                productType:"Jacket",
                usage:"male",
                ratings:2.3,
                size:["S","M","L","XXL"]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/495/594/k41mp3k0/kids-dress/t/2/s/10-11-years-dezine-pink-black-abstract-gown-kaarigari-original-imafnyp6fgc7kz7n.jpeg?q=50",
                brand:"Allen Solly",
                description:"Girls Maxi/Full Length Party Dress  (Multicolor, Full Sleeve)",
                discountPrice:1499,
                mrp:1678,
                color:"pink",
                fabric:"sleeve",
                productType:"Party wear",
                usage:"female",
                ratings:3.9,
                size:["S","XL","XXL"]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/832/832/kuzuoi80/kids-dress/t/2/m/6-7-years-new-blackjali-ftc-fashions-original-imag7zghqg4vgbd7.jpeg?q=70",
                brand:"Otto",
                description:"Girls Calf Length Party Dress  (Black, 3/4 Sleeve)",
                discountPrice:999,
                mrp:1899,
                color:"black",
                fabric:"sleeve",
                productType:"Party wear",
                usage:"female",
                ratings:3.8,
                size:["S","M","L","XL"]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/495/594/klmmrgw0/lehenga-choli/u/5/z/free-full-sleeve-chain-legenga-green-bollyclues-original-imagypfzgykhpa8c.jpeg?q=50",
                brand:"PETER ENGLAND",
                description:"Embroidered Semi Stitched Lehenga Choli  (Dark Green)",
                discountPrice:3099,
                mrp:1980,
                color:"green",
                fabric:"full sleeve",
                productType:"Lehenga Choli",
                usage:"female",
                ratings:4.8,
                size:["S","M","L","XL"]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/495/594/xif0q/kurta/l/m/b/s-ml12054-328-manyavar-original-imaghv49v9fhgkvv.jpeg?q=50",
                brand:"Allen Solly",
                description:"Men Solid Viscose Rayon High Low Kurta  (Yellow)",
                discountPrice:1000,
                mrp:2999,
                color:"yellow",
                fabric:"full sleeve",
                productType:"lenin",
                usage:"male",
                ratings:4.6,
                size:["S","M","L","XL","XXL"]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/k/w/a/34-m40463-beige-blue-buddha-original-imagj6w3n3mhtpbh.jpeg?q=70",
                brand:"Levis",
                description:"Regular Fit Men Beige Pure Cotton Trousers",
                discountPrice:1878,
                mrp:2100,
                color:"light yellow",
                fabric:"trousers",
                productType:"cotton",
                usage:"male",
                ratings:4.2,
                size:[30,32,34,36,38]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/832/832/kyj0vbk0/jean/z/h/n/-original-imagaryehbks64vu.jpeg?q=70",
                brand:"Levis",
                description:"511 Slim Men Blue Jeans",
                discountPrice:6000,
                mrp:3010,
                color:"blue",
                fabric:"cotton",
                productType:"jeans",
                usage:"male",
                ratings:4.3,
                size:[30,32,34,36,38]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/495/594/xif0q/suit/a/v/t/48-lpsumslfk32486-louis-philippe-original-imag69fjymmzmsfv-bb.jpeg?q=50",
                brand:"LOUIS PHILIPPE ",
                description:"Single Breasted Textured Men Suit",
                discountPrice:12999,
                mrp:7799,
                color:"brown",
                fabric:"blazer",
                productType:"Men suit",
                usage:"male",
                ratings:4.3,
                size:[36,38,40,42]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/832/832/l2ghgnk0/sari/h/l/z/free-param-pramukh-heavan-unstitched-original-imagdse9ybzynxf3.jpeg?q=70",
                brand:"Semizoxis ",
                description:"Embroidered, Embellished Bollywood Net, Art Silk Saree  (Pink, Grey)",
                discountPrice:4999,
                mrp:3799,
                color:"pink",
                fabric:"Embroidered",
                productType:"Silk saree",
                usage:"female",
                ratings:4.4,
                size:[36,38,40,42]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/416/416/xif0q/dhoti/p/v/g/s-flexi-thalapathi-welcro-black-002-prakasam-cotton-original-imagfvh7yerzngqc-bb.jpeg?q=70",
                brand:"Poomex",
                description:"Kerala Style Thalapathi border Black Colour Flexi Size Welcro Readymade with pocket Solid Men Dhoti",
                discountPrice:2000,
                mrp:1799,
                color:"black",
                fabric:"cotton",
                productType:"dhoti",
                usage:"male",
                ratings:4.1,
                size:["S","M","L","XL","XXL"]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/832/832/kqse07k0/lehenga-choli/b/i/m/free-full-sleeve-atlgtjpk1481-logo-of-alphabet-a-original-imag4q3rftw7cjhe.jpeg?q=70",
                brand:"Semizoxis",
                description:"Self Design Semi Stitched Lehenga Choli  (Pink)",
                discountPrice:5499,
                mrp:3899,
                color:"pink",
                fabric:"cotton",
                productType:"Lehenga Choli",
                usage:"female",
                ratings:4.6,
                size:["S","M","L","XL","XXL"]
            },
            {
                productPic:"https://rukminim1.flixcart.com/image/832/832/xif0q/short/i/e/l/xxl-premium-fabric-sport-short-yazole-original-imaggwvy3gqzuusd.jpeg?q=70",
                brand:"Yazole",
                description:"Pack of 2 Solid Men Black, Grey Sports Shorts",
                discountPrice:300,
                mrp:499,
                color:"black",
                fabric:"cotton",
                productType:"shorts",
                usage:"male",
                ratings:4.0,
                size:["S","M","L","XL","XXL"]
            },
            

        ]
    )
    return(
        <div>
            <ProductBuild products={product} title="All Products"/>

            <ProductBuild products={product.filter((product)=>{return product.mrp<1000})} title="Less Than 1000rs"/>

            <ProductBuild products={product.filter(({mrp})=>{return mrp>3000})} title="More Than 3000rs"/>
        </div>
    )
}

export default ProductData