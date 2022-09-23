import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>iconic-niche</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/newniche" style={{color: "white", backgroundColor: "red", borderRadius: '8px'}}>New Niche</Link>
            </div> 
        </nav>
    );
}
 
export default NavBar;