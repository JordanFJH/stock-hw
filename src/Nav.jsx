import { Link } from "react-router-dom";


function Nav(props) {
    return (
        <div className="nav-bar">
            <Link to={"/"}>
                <div>
                    <h1>Home</h1>
                </div>
            </Link>
            <Link to={"/stocks"}>
                <div>
                    <h1>Stock List</h1>
                </div>
            </Link>
            <Link to={"/about"}>
                <div>
                    <h1>About</h1>
                </div>
            </Link>
        </div>
    );
}

export default Nav;