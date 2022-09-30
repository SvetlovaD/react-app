import logo from './logo.svg';
import './App.css';
import logoReact from './img/React.jpg';

const Header = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
    
  )
}

const Main = () => {
  return (
    <div>
      <h3>Hello world from React</h3>
      <img src={logoReact} alt="logo2" width={600} height={300} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
