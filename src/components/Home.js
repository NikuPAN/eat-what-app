import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Button, Image, Box, Flex, Spinner } from '@chakra-ui/react'

import '../App.css';

const Home = ({data}) => {
	const imagesPath = [
		['./Sushi.jpg', './Samosas.jpg'],
		['./Dimsum.jpg', './Risotto.jpg'],
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
			{data ? 
				<Flex direction="column">
						<Link to="/random">
							<Button width="300px" colorScheme="teal" size='lg'>Help Me Choose!</Button>
						</Link>
						<Link to="/list">
							<Button width="300px" colorScheme="teal" size='lg'>Restaurant List</Button>
						</Link>
				</Flex>
				:           
				<Spinner
					thickness='5px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
			}
		</div>
	);
};

export default Home;