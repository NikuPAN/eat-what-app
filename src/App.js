import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavMenu from './components/navMenu/NavMenu';

import Home from './components/Home'
import Random from './components/Random';
import List from './components/List';
import Edit from './components/Edit';
import History from './components/History';
import React, { useState } from 'react';
import DataFetcher from './components/data/dataFetcher';

import { ChakraProvider } from '@chakra-ui/react'

import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  return (
    <ChakraProvider>
      <Router>
        <NavMenu />
        <DataFetcher setData={setData} />
          <Routes>
            <Route path="/random" element={<Random data={data} />} />
            <Route path="/list" element={<List data={data} />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/history" element={<History />} />
            <Route path="/" element={<Home data={data} />} />
          </Routes>
      </Router>
    </ChakraProvider>
  )
};

export default App;
