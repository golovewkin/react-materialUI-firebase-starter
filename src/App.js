import './App.scss';
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      hello app
      {process.env.REACT_APP_FIREBASE_API_KEY}
    </div>
  );
}

export default App;
