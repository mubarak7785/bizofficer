import { Link } from "react-router-dom"
import "./Navbar.css"
// import { MdOutlineLogin } from 'react-icons/Md';
// import { MdMenu } from 'react-icons/Md';



export const Navbar=()=>{
    return(
        <div className="main">
            <div className="menu">
                <p className="menu-btn"> <Link to="/"><i class="fa-solid fa-bars"></i></Link></p>
                <div className="img_div"><img src="https://web.bizofficer.com/subscription/icon-logo.png" height="100%" width="100%" alt="" /></div>
                <p className="cas">Cases</p>
            </div>
            <div>
                <p className="login"><i class="fa-solid fa-arrow-right-to-bracket"></i></p>
            </div>
        </div>
    )
}