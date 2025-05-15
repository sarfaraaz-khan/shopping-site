import { Link } from 'react-router-dom'
import "./navbar.css"
import logo from "../../assets/images/logo.png"
import profile from "../../assets/images/profile.png"



function Navbar() {

    return (
        <nav>
            <div className='logoContainer'>
                <img src={logo} />
            </div>
            <div className='menuContainer'>
                <ul>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/categories"><li>CATEGORIES</li></Link>
                    <Link to="/cart"><li>CART</li></Link>
                    <li><img src={profile} /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
