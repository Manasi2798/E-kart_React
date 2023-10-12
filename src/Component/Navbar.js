import {Link} from "react-router-dom";

export default function Navbar(props){
    return(
        <div className="navbar">
            <span className="logo">Redux Store</span>
            <div>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/cart" className="navLink">Cart</Link>
                <span className="cartCount">Cart Items:{props.cartItems.length}</span>
            </div>
        </div>
    )
}