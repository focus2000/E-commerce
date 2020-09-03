import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import SigninScreen from './screens/SigninScreen';
import {useSelector} from 'react-redux'
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';



function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin



  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  
  return (
    <Router>
    <div className = "grid-container">
    <header className ="header">
   <div className = "brand">
       <button onClick={openMenu}>
           &#9776;
       </button>
       <Link to ="/"><em>E.mart</em></Link>
     
    </div>
    <div className = "header-links">
    <Link to ="/cart/:id?">Cart</Link>
       

        {
          userInfo ? <Link to="/shipping">{userInfo.name}</Link> :
          <Link to ="/signin">Sign In</Link>
        }
       
        
    </div>
    </header>
   <aside className="sidebar">
       <h3>Shopping Categories</h3>
       <button className="sidebar-close-button" onClick={closeMenu}>X</button>
       <ul>
           <li>
               <Link to = "/">Pants</Link>
            </li>
            <li>
            <Link to = "/">Shirts</Link>
                
             </li>
             <li>
             <Link to = "/">Sneakers</Link>
              
             </li>
       </ul>
   </aside>
    <main className="main">
        <div className="content">
          <Route exact path ="/" component={HomeScreen}/>
          <Route path = "/signin" component ={SigninScreen}/>
          <Route path = "/products" component ={ProductsScreen}/>
          <Route path = "/shipping" component = {ShippingScreen}/>
          <Route path = "/payment" component ={PaymentScreen}/>
          <Route path = "/placeorder" component = {PlaceOrderScreen}/>
          <Route path = "/register" component ={RegisterScreen}/>
          <Route path ="/product/:id" component={ProductScreen}/>
          <Route path="/cart/:id?"component={CartScreen}/>
           </div>
        
    </main>
    <footer className= "footer">
        All right reserved.
    </footer>
</div>
</Router>
  );
}

export default App;
