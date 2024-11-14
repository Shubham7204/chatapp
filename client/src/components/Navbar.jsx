import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-xl">ChatApp</Link>
                <div className="space-x-4">
                    {!localStorage.getItem('token') ? (
                        <>
                            <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                            <Link to="/signup" className="text-white hover:text-gray-300">Signup</Link>
                        </>
                    ) : (
                        <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;