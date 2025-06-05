import { NavLink } from "react-router"

function Navbar() {
    return (
        <>
            <nav className="flex gap-4 items-center justify-between font-medium h-12 bg-gray-600">
                <NavLink className="btn NavButton" to="/">Home</NavLink>
                    <NavLink className="btn NavButton" to="/todo">Todo</NavLink>
                <div>
                    <NavLink className="btn NavButton" to="/login">Login</NavLink>
                    <NavLink className="btn NavButton" to="/register">Register</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar