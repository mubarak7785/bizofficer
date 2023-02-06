import "./Navbar.css"
// import { MdMenu,MdOutlineLogin } from 'react-icons/Md';


export const Navbar=()=>{
    return(
        <div className="main">
            <div className="menu">
                {/* <p className="menu-btn"> <MdMenu/></p> */}
                <div className="img_div"><img src="https://web.bizofficer.com/subscription/icon-logo.png" height="100%" width="100%" alt="" /></div>
                <p className="cas">Cases</p>
            </div>
            <div>
                {/* <p className="login"><MdOutlineLogin/></p> */}
            </div>
        </div>
    )
}