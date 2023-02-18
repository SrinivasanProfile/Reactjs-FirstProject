import { useState } from "react";
import DisplayProducts from "../Components/DisplayProducts";

const Home = () => {

   let [products , setProducts] = useState(
        [
               {
                productpic:
                "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/jacket/4/h/w/xxl-mens-jkt-009-black-candy-house-original-imafg4hz7xz6pjpr.jpeg?q=70&quot&quot",
                brand: "Christy World",
                Description: "Full Sleeve Solid Men Padded Jacket",
                DiscountPrise: "₹649",
                MRP: 2999,
                color:"black"
                },
                {
                productpic:
                "https://rukminim1.flixcart.com/image/495/594/xif0q/jacket/c/f/0/s-mnt-7003-montrez-original-imagffv4hs3k6quc-bb.jpeg?q=50&quot&quot",
                brand: "MONTREZ",
                Description: "Full Sleeve Solid Men Denim Jacket",
                DiscountPrise: "₹599",
                MRP: 2499,
                color:"blue"
                },
                {
                productpic:
                "https://rukminim1.flixcart.com/image/832/832/ke0a7ww0/jacket/c/x/r/m-wjjk3119-wrogn-original-imafurzguaqhztpq.jpeg?q=70&quot",
                brand: "WROGN",
                Description: "Full Sleeve Solid Men Bomber Jacket",
                DiscountPrise: "₹2,199",
                MRP: 3999,
                color:"brown"
                },
                {
                productpic:
                "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/jacket/m/h/j/l-mens-jkt-009-mrn-candy-house-original-imafg4hzyjzfffq2.jpeg?q=70&quot",
                brand: "Christy World",
                Description: "Full Sleeve Solid Men Padded Jacket",
                DiscountPrise: "₹649",
                MRP: 2999,
                color:"red"
                },
                {
                productpic:
                "https://rukminim1.flixcart.com/image/495/594/kdnf98w0hlty2aw-0/jacket/2/u/g/m-1-aw18-zip-jacket-black-way-maniac-original-imafumytf7zgd6dz.jpeg?q=50&quot",
                brand: "Christy World",
                Description: "Full Sleeve Solid Men Padded Jacket",
                DiscountPrise: "₹649",
                MRP: 2999,
                color:"black"
                },
                {
                productpic:
                "https://rukminim1.flixcart.com/image/495/594/kz5vwy80/jacket/b/n/1/l-no-of130006-124-furo-original-imagb8gutzcvfgkr.jpeg?q=50&quot",
                brand: "Furo",
                Description: "Full Sleeve Solid Men Sports Jacke",
                DiscountPrise: "₹1,360",
                MRP: 3399,
                color:"green"
                },
                {
                productpic:
                "https://rukminim1.flixcart.com/image/495/594/kg2l47k0/jacket/f/v/k/xl-aw18-zip-jacket-yellow-way-maniac-original-imafwdg3hqaykzga.jpeg?q=50&quot",
                brand: "MANIAC",
                Description: "Full Sleeve Colorblock Men Bomber Jacket ",
                DiscountPrise: "₹429",
                MRP: 2019,
                color:"yellow"
                },
                {
                productpic:
                "https://rukminim1.flixcart.com/image/495/594/xif0q/t-shirt/2/u/3/l-mens-t-d2-brucella-original-imaghyzyty4ugeyg.jpeg?q=50&quot",
                brand: "Brucella",
                Description: "Printed Men Round Neck Grey T-Shirt",
                DiscountPrise: "₹299",
                MRP: 1299,
                color:"gray"
                },
                {
                productpic:
                "https://rukminim1.flixcart.com/image/495/594/l41n2q80/t-shirt/q/n/j/l-1jgrf-013-blk-jugular-original-imagff7wfjvxtdjb.jpeg?q=50&quot",
                brand: "JUGULAR",
                Description: "Printed Men Round Neck Black T-Shirt",
                DiscountPrise: 289,
                MRP: 888,
                color:"black"
                },
                {
                productpic:
                "https://rukminim1.flixcart.com/image/495/594/kq9ta4w0/t-shirt/o/t/d/s-723-6-ftx-original-imag4bhzkshdkr68.jpeg?q=50&quot",
                brand: "FTX ",
                Description: "Solid Men Round Neck Blue T-Shirt",
                DiscountPrise: 199,
                MRP: 599,
                color:"black"
                }
        ]
    );

    return (
        <div className="home">

          <DisplayProducts products={products} title="All Products" />

          <DisplayProducts products={products.filter((produc)=>{return produc.color=="black"})} title="Black t-shirts"/>

          <DisplayProducts products={products.filter((produc)=>{return produc.color=="yellow"})} title="yellow t-shirts"/>

        </div>
     );
}
 
export default Home;
