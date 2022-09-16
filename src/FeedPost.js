import "./FeedPost.css"
import perfil from "./resources/perfil.jpg";

function FeedPost(props){

    return(
        <div className="feedPost">
            <div className="back">
                <div className="feedPostSingle">
                    <img src={perfil}/>
                    <h3>{props.nome}<br/><span>{props.time}</span></h3>
                </div>
            
                <div className="feedPostContent">
                    <p>{props.subtitle}</p>
                    <img src="https://img.freepik.com/fotos-gratis/ilha-de-palmeira-tropical-3d_1048-10632.jpg?w=2000"/>
                </div>
            </div>
        </div>
    )
}

export default FeedPost;