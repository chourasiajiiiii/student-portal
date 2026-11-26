
import { Link, useLocation } from 'react-router';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-slate-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-wide text-blue-400 hover:text-blue-300 transition"
                    >
                        My React App
                    </Link>

                    {/* Navigation Links */}
                    <ul className="flex items-center gap-3">

                        <li>
                            <Link
                                to="/"
                                className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    location.pathname === '/'
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                }`}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    location.pathname === '/about'
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                }`}
                            >
                                About
                            </Link>
                        </li>
 <li>
                            <Link
                                to="/login"
                                className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    location.pathname === '/login'
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                }`}
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;