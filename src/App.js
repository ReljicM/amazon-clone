import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
