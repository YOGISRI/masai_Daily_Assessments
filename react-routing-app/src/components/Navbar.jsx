import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/todos">Todos</NavLink>
        </nav>
    );
}
