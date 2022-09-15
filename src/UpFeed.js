import "./UpFeed.css";
import {FaVideo, FaSearch, FaAlignJustify} from "react-icons/fa";
import perfil from "./resources/perfil.jpg";

function UpFeed (){

    return(
        <div className="upFeed">
            <div className="upForm">
                <img src={perfil}/>
                <input type="text" placeholder="No que está pensando, Rafael?"/>
            </div>
            <div className="upType">
                <div className="streaming">
                    <FaVideo/>
                    <span>Video ao vivo</span>
                </div>
            </div>
        </div>
    )

}

export default UpFeed;