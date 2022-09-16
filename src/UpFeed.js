import "./UpFeed.css";
import {FaVideo, FaFileImage, FaSmile} from "react-icons/fa";
import perfil from "./resources/perfil.jpg";

function UpFeed (){

    return(
        <div className="upFeed">
            <div className="upForm">
                <img src={perfil}/>
                <input type="text" placeholder="No que está pensando, Rafael?"/>
            </div>
            <div className="upType">
                <div className="upIcons streaming">
                    <FaVideo/>
                    <span>Video ao vivo</span>
                </div>
                <div className="upIcons photo">
                    <FaFileImage/>
                    <span>Video ao vivo</span>
                </div>
                <div className="upIcons emoji">
                    <FaSmile/>
                    <span>Video ao vivo</span>
                </div>
            </div>
            
        </div>

        
    )

}

export default UpFeed;