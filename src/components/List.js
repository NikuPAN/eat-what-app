import React, { useEffect, useState } from 'react';
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

const List = ({ data }) => {
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('All Cuisine');

  const generateGoogleMapsLink = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  const handleCuisineSelect = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  const filteredRestaurants = () => {
    return selectedCuisine !== 'All Cuisine' ? data.filter((restaurant) => restaurant?.Cuisine === selectedCuisine) : data;
  }

  useEffect(() => {
    const loadCuisines = async () => {
      const uniqueCuisines = [...new Set(data.map(item => item.Cuisine))];
      uniqueCuisines.sort();
      setCuisines(uniqueCuisines);
    };

    loadCuisines();
  }, [data]);

  return (
    <div className='container'>
      <Text fontSize='2xl'>List of restaurants</Text>
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
      <TableContainer overflowY="auto">
        <Table variant='striped' colorScheme='teal' size="sm">
          <Thead>
            <Tr>
              <Th minW="20%">Name</Th>
              <Th maxW="40%">Address</Th>
              <Th maxW="30%">Opening Hours</Th>
            </Tr>
          </Thead>
          <Tbody>
          {filteredRestaurants().map((restaurant) => (
            <Tr key={restaurant.id}>
              <Td>
                <Text
                  whiteSpace="normal"
                  overflow="auto"
                  textOverflow="ellipsis"
                >
                  {restaurant.Name}
                </Text>
              </Td>
              <Td>
                <Text
                  whiteSpace="normal"
                  overflow="auto"
                >
                  <Link href={generateGoogleMapsLink(restaurant.Address)} isExternal color="blue.500" textDecoration="underline">
                    {restaurant.Address}
                  </Link>
                </Text>
              </Td>
              <Td>
                <Text
                  whiteSpace="normal"
                  overflow="auto"
                  textOverflow="ellipsis"
                >
                  {restaurant.OpeningHours}
                </Text>
              </Td>
            </Tr>
          ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;