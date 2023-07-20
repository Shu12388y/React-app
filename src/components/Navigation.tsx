import {Link} from "react-router-dom"
import img from "../images/pngtree-pizza-logo-png-image_6147023.png"
import "./Nav.css"

function Navigation() {
  return (
    <>
   <nav className="nav__flex">
    <div>
        <Link to="/">
            <img style={{height:80}} src={img} alt="" />
        </Link>

    </div>
<div className="flex__side">
<Link to="/">Home</Link>
<Link to="/about">Product</Link>
<Link to="/cart">Cart<sup>10</sup></Link>
</div>
   </nav>

    </>
  )
}

export default Navigation
