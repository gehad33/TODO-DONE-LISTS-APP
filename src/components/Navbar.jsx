import{Link} from "react-router-dom"
import "../App.css"

const Navbar = () =>{
    return(
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#1d6c81",
                padding:"15px 10px",
                marginBottom:"30px",
            }}>
                <Link to="/" className="navlinks">TODO LIST</Link>
                <Link to="/done" className="navlinks">DONE LIST</Link>
                <Link to="/about" className="navlinks">About</Link>
        </div>
    )
}

export default Navbar;