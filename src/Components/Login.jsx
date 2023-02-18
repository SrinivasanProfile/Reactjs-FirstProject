import { Link } from "react-router-dom"

const login =  () =>
{
    return(
        <div className="login-page">
            <Link to="/user"> <button >USER</button> </Link>
            <Link to="/admin"> <button>ADMIN</button></Link>
        </div>
    )
}
export default login