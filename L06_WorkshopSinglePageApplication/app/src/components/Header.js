import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, user }) => {
    const userLinks = () => {
        return (
            <div id="user">
                <span>Welcome, {user}</span>
                <Link className="button" to="/my-pets">My Pets</Link>
                <Link className="button" to="/create">Add Pet</Link>
                <Link className="button" to="/logout">Logout</Link>
            </div>
        );
    }
    
    const guestLinks = () => {
        return (
            <div id="guest">
                <Link className="button" to="/login">Login</Link>
                <Link className="button" to="/register">Register</Link>
            </div>
        );
    }

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    {isAuthenticated ? userLinks() : guestLinks()}
                </section>
            </nav>
        </header>
    );
}

export default Header;