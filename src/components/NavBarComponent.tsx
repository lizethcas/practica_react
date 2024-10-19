
import { Link } from "react-router-dom";

const NavBarComponent = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/" className="text-red-500">Home</Link></li>
                <li><Link to="/blog" >Blog</Link></li>
                <li><Link to="/portfolio">Portolio</Link></li>
                <li><Link to="/studio">Studio</Link></li>
            </ul>
        </nav>
    );
}

export default NavBarComponent;
