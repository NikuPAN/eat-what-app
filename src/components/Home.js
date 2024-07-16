import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Button, Image, Box, Flex } from '@chakra-ui/react'

import '../App.css';

const Home = () => {
	const imagesPath = [
		['./evo.jpg', './timmy.jpg'],
		['./dicky.jpg', './lance.jpg'],
	];

	return (
		<div className="container">
			<Text fontSize="3xl">Eat What?! App</Text>
			<Box boxSize={50}></Box>
			<Box align="center" className="rotate-image-reverse">
			{imagesPath.map((row, rowIndex) => (
				<Flex direction="row" key={rowIndex}>
					{row.map((image, imageIndex) => (
						<Image
							key={imageIndex}
							className="rotate-image"
							borderRadius="full"
							boxSize="150px"
							src={image}
						/>
					))}
				</Flex>
			))}
		</Box>
			<Box boxSize={50}></Box>
			<Link to="/random">
				<Button width="300px" colorScheme="teal" size='lg'>Help Me Choose!</Button>
			</Link>
			<Link to="/list">
				<Button width="300px" colorScheme="teal" size='lg'>Restaurant List</Button>
			</Link>
		</div>
	);
};

export default Home;