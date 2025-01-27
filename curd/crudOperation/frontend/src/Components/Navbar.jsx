import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="container-fluid">
                <div className="navbar">
                    <ul className="navbar_content">
                        <li><NavLink to={'/'} className="actice_class">Home</NavLink></li>
                        <li><NavLink to={'/table'} className="actice_class">Table</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}