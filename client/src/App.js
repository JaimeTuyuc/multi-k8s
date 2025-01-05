import logo from './logo.svg';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link className='link_style' to="/">Home</Link>
          <Link className='link_style' to="/otherpage">Other Page</Link>
        </header>
        <div className='container_app'>
          <Routes>
            <Route exact path="/" element={<Fib />} /> 
            <Route path="/otherpage" element={<OtherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;