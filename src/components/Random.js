import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Link,
  Button,
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

import '../App.css';

const Random = ({data}) => {
	const [restaurant, setRestaurant] = useState(null);
	const [cuisines, setCuisines] = useState(['All Cuisine']);
	const [selectedCuisine, setSelectedCuisine] = useState('All Cuisine');

	const handleCuisineSelect = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

	const filteredRestaurants = () => {
    return selectedCuisine !== 'All Cuisine' ? data.filter((restaurant) => restaurant?.Cuisine === selectedCuisine) : data;
  }

	const setRandomRestaurant = () => {
		const randomIndex = Math.floor(Math.random() * filteredRestaurants().length);
		setRestaurant(filteredRestaurants()[randomIndex]);
	};

	const generateGoogleMapsLink = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  useEffect(() => {
    const loadCuisines = async () => {
      const uniqueCuisines = [...new Set(data.map(item => item.Cuisine))];
      uniqueCuisines.sort();
      setCuisines(uniqueCuisines);
    };

    loadCuisines();
  }, [data]);

  return (
		<div>
			<div className="container">
				<Text fontSize='2xl'>Give up thinking?</Text>
				<Text fontSize='2xl'>Random is your friend!</Text>
				<Text fontSize='1xl'>Select your cuisine preference</Text>
				<Menu>
          <MenuButton width="250px" size="lg" as={Button} rightIcon={<ChevronDownIcon />}>
            {selectedCuisine}
          </MenuButton>
          <MenuList maxH="300px" overflowX="hidden" overflowY="auto">
            {cuisines.map((cuisine, index) => (
              <MenuItem px={0} key={index} onClick={() => handleCuisineSelect(cuisine)}>
                {cuisine}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
				<Button width="250px" colorScheme="teal" size='lg' onClick={setRandomRestaurant}>Go!</Button>
				{restaurant &&
					<TableContainer overflowY="auto">
          	<Table variant='striped' colorScheme='teal'>
							<Thead>
								<Tr>
									<Th minW="30%"></Th>
									<Th maxW="50%">Detail</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Th>Name</Th>
									<Td>
										<Text
												whiteSpace="normal"
												overflow="auto"
											>
												{restaurant?.Name}
										</Text>
									</Td>
								</Tr>
								<Tr>
									<Th>Cuisine</Th>
									<Td>{restaurant?.Cuisine}</Td>
								</Tr>
								<Tr>
									<Th>Address</Th>
									<Td>
										<Text
											whiteSpace="normal"
											overflow="auto"
										>
											<Link href={generateGoogleMapsLink(restaurant.Address)} isExternal color="blue.500" textDecoration="underline">
												{restaurant?.Address}
											</Link>
										</Text>
									</Td>
								</Tr>
								<Tr>
									<Th>Postcode</Th>
									<Td>{restaurant?.PostalCode}</Td>
								</Tr>
								<Tr>
									<Th>Opening Hours</Th>
									<Td>
										<Text
											whiteSpace="normal"
											overflow="auto"
										>
											{restaurant?.OpeningHours}
										</Text>
									</Td>
								</Tr>

								<Tr>
									<Th>Website</Th>
									<Td>
										<Text
											whiteSpace="normal"
											overflow="auto"
										>
											<Link href={restaurant?.Website} isExternal color="blue.500" textDecoration="underline">
												{restaurant?.Website}
											</Link>
										</Text>
									</Td>
								</Tr>

								<Tr>
									<Th>Last Updated</Th>
									<Td>{restaurant?.LastUpdated}</Td>
								</Tr>

							</Tbody>
						</Table>
					</TableContainer>
				}
			</div>
		</div>
  );
};

export default Random;