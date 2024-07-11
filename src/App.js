import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Random from './components/Random';
import List from './components/List';
import Edit from './components/Edit';
import History from './components/History';
import { ChakraProvider } from '@chakra-ui/react'

import './App.css';

const App = () => (
  <ChakraProvider>
    <Router>
      <nav className="navbar">
        <Link to="/random">Random</Link>
        <Link to="/list">Restaurant List</Link>
        {/* <Link to="/edit">Edit Restaurant</Link>
        <Link to="/history">History</Link> */}
      </nav>
      <Routes>
        <Route path="/random" element={<Random />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/history" element={<History />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
