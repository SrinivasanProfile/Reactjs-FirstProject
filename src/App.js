import Home from './Components/Home'
import Login from './Components/Login';
import Addproducts from './Components/AddProducts';
import Cart from './Components/Cart'
import ProductDetails from './Components/ProductDetails'
import Admin from './Components/Admin'
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Update from './Components/Update';

function App() {
  return (
    <div >
      <Router>
        <div>
          <Switch>
            
              <Route exact path="/"> <Login/> </Route>
             <Route path="/user"> <Home/> </Route>
             <Route path="/addnewproduct"> <Addproducts/> </Route>
             <Route path="/cart"> <Cart/> </Route>
             <Route path="/ProductDetails:id"> <ProductDetails/> </Route>
             <Route path="/admin"> <Admin/> </Route>
             <Route path="/updateproduct:id"><Update/> </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
