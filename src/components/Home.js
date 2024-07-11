import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Button, Image, Box } from '@chakra-ui/react'

import '../App.css';

const Home = () => (
  <div className="container">
    <Text fontSize="3xl">Welcome to Eat What App!</Text>
    <Image
			className='rotate-image'
			borderRadius='full'
			boxSize='200px'
			src='./timmy.jpg'
    />
		<Box boxSize={20}></Box>
		<Image
			className='rotate-image-reverse'
			borderRadius='full'
			boxSize='200px'
			src='./dicky.jpg'
    />
		<Box boxSize={50}></Box>
		<Link to="/random">
			<Button width="300px" colorScheme="teal" size='lg'>Help Me Choose!</Button>
		</Link>
		<Link to="/list">
			<Button width="300px" colorScheme="teal" size='lg'>Restaurant List</Button>
		</Link>
  </div>
);

export default Home;