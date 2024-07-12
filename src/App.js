import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavMenu from './components/navMenu/NavMenu';

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
      <NavMenu />
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
