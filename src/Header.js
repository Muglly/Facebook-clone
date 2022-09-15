import {FaFacebook, FaSearch, FaAlignJustify} from "react-icons/fa";
import "./Header.css";

function Header(){
    return(
        <div className="header">
            <div className="headerLeft">
                <div className="logoFb"><FaFacebook/></div>
                <div className="searchFb"><FaSearch/></div>
                <div className="menuFb"><FaAlignJustify/></div>
            </div>
            <div className="headerRight">
                <div className="plusBtn">
                    +
                </div>
            </div>
        </div>
    )
}

export default Header;