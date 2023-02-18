import { Link } from "react-router-dom"
import useFetch from "./useFetch"

const Admin=()=>
{
    let{data:products, pending , error} = useFetch("http://localhost:4000/products")

    let handleDelete = (id)=>
    {
        fetch(`http://localhost:4000/products/${id}`,{method:"DELETE"})
        .then(()=>
        {
            alert("Item has been deleted")
            window.location.reload();
        })
    }
return(
    <div className="admin-page">
        <h1>ADMIN PAGE</h1>
        <hr />

        {products && <table border="4px" solid className="tableValues">
            <thead>
                <th>Sl No</th>
                <th>Product</th>
                <th>ProductType</th>
                <th colSpan="2">Action</th>
            </thead>
            <tbody>
                {
                    products.map((item,i)=>
                    {
                        return(
                            <tr>
                                <td>{i+1}</td>
                                <td><img src={item.productPic} width="100px" height="100px"  /></td>
                                <td ><h6>{item.productType}</h6></td>
                                <td><Link to={`/updateproduct${item.id}`}> <button>Edit</button></Link> </td>
                                <td><button onClick={()=>{handleDelete(item.id)}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        }

        <Link to="/addnewproduct">
        <button>Add NewProduct</button></Link>
    </div>
)
    }

export default Admin