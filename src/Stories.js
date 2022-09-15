import "./Stories.css";
import Farol_barra from "./resources/Farol_barra.jpg";

function Stories (){

    return(
        <div className="stories">
            <div className="storiesCard" style={{backgroundImage:`url(${Farol_barra})`}}>
                <p>Rafael Souza</p>
            </div>
            <div className="storiesCard" style={{backgroundImage:`url(${Farol_barra})`}}>
                <p>Rafael Souza</p>
            </div>
            <div className="storiesCard" style={{backgroundImage:`url(${Farol_barra})`}}>
                <p>Rafael Souza</p>
            </div>
            <div className="storiesCard" style={{backgroundImage:`url(${Farol_barra})`}}>
                <p>Rafael Souza</p>
            </div>
            <div className="storiesCard" style={{backgroundImage:`url(${Farol_barra})`}}>
                <p>Rafael Souza</p>
            </div>
        </div>
    )
}

export default Stories;