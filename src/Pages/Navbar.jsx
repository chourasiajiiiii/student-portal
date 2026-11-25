import { Link } from 'react-router';
import Home from './Home';
import About from './About';
import { useLocation } from 'react-router';

const Navbar = () => {

    const location = useLocation();
console.log(location.pathname);

    return (
        <nav className="bg-gray-800 text-white p-4">
            <>  
            <h2>My React App</h2>

            <ul>
                {location.pathname !== '/' && (
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                )}
                {location.pathname !== '/about' && (
                    <li>
                        <Link to="/about">About</Link>
                    </li>)}
            </ul>
            </>
        </nav>
    );
};

export default Navbar;