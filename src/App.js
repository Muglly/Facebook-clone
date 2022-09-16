import Header from "./Header";
import Stories from "./Stories.js";
import UpFeed from "./UpFeed";
import FeedPost from "./FeedPost";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Stories/>
        <UpFeed/>
        <FeedPost nome="Rafael Souza" time="5h" subtitle="Aceito ir para um lugar onde o único barulho seja do vento e do mar."/>
        <FeedPost nome="Rafael Souza" time="5h" subtitle="Aceito ir para um lugar onde o único barulho seja do vento e do mar."/>
        <FeedPost nome="Rafael Souza" time="5h" subtitle="Aceito ir para um lugar onde o único barulho seja do vento e do mar."/>
        <FeedPost nome="Rafael Souza" time="5h" subtitle="Aceito ir para um lugar onde o único barulho seja do vento e do mar."/>
      </div>
    </div>
  );
}

export default App;
