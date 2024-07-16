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
  MenuItem,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

import '../App.css';
import CheckboxGroup from './filter/checkboxGroup';

const List = ({ data }) => {
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('All Cuisine');
  const [extraColumns, setExtraColumns] = useState({
    address: false,
    postcode: true,
    cuisine: false,
    website: false,
    lastUpdated: false,
  });

  const generateGoogleMapsLink = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  const handleCuisineSelect = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  const isWebsiteAvailable = (website) => {
    return website.toLowerCase() !== 'not specified' && website.toLowerCase() !== 'n/a' && website.toLowerCase() !== 'not available'; 
  }

  const filteredRestaurants = data && selectedCuisine !== 'All Cuisine' ? data.filter((restaurant) => restaurant?.Cuisine === selectedCuisine) : data;

  useEffect(() => {
    const loadCuisines = async () => {
      if (!data)
        return;
      const uniqueCuisines = [...new Set(data?.map(item => item.Cuisine))];
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
        <MenuList maxH="300px" overflowX="hidden" overflowY="auto" zIndex="2">
          {cuisines.map((cuisine, index) => (
            <MenuItem px={0} key={index} onClick={() => handleCuisineSelect(cuisine)}>
              {cuisine}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      
      <CheckboxGroup
        extraColumns={extraColumns}
        setExtraColumns={setExtraColumns}
      />

      <TableContainer overflowY="auto">
        <Table variant='striped' colorScheme='teal' size="sm">
          <Thead position="sticky" top="0" bgColor="gray.200" zIndex="1">
            <Tr>
              <Th minW="120px">Name</Th>
              {extraColumns.cuisine && <Th maxW="100px">Cuisine</Th>}
              {extraColumns.address && <Th maxW="120px">Address</Th>}
              {extraColumns.postcode && <Th maxW="70px">Postcode</Th>}
              <Th maxW="130px">Opening Hours</Th>
              {extraColumns.website && <Th maxW="120px">Website</Th>}
              {extraColumns.lastUpdated && <Th maxW="120px">Last Updated</Th>}
            </Tr>
          </Thead>
          <Tbody>
          {filteredRestaurants.map((restaurant) => (
            <Tr key={restaurant.id}>
              <Td>
                <Text whiteSpace="normal" wordBreak="break-word" overflowWrap="break-word">
                  <Link href={generateGoogleMapsLink(restaurant.Name)} isExternal color="blue.500" textDecoration="underline">
                    {restaurant.Name}
                  </Link>
                </Text>
              </Td>

              {extraColumns.cuisine && <Td>{restaurant.Cuisine}</Td>}

              {extraColumns.address && <Td>
                <Text whiteSpace="normal" wordBreak="break-word" overflowWrap="break-word">
                  <Link href={generateGoogleMapsLink(restaurant.Address)} isExternal color="blue.500" textDecoration="underline">
                    {restaurant.Address}
                  </Link>
                </Text>
              </Td>}

              {extraColumns.postcode && <Td>{restaurant.PostalCode}</Td>}

              <Td>
                <Text whiteSpace="normal" wordBreak="break-word" overflowWrap="break-word">
                  {restaurant.OpeningHours}
                </Text>
              </Td>

              {extraColumns.website && <Td>
                <Text whiteSpace="normal" wordBreak="break-all" overflowWrap="break-all">
                  {isWebsiteAvailable(restaurant?.Website) ? 
                    (<Link href={restaurant?.Website} isExternal color="blue.500" textDecoration="underline">
										  {restaurant?.Website}
									  </Link>)
                    : 
                    restaurant?.Website
                  }
                </Text>
              </Td>}

              {extraColumns.lastUpdated && <Td>
                <Text whiteSpace="normal" wordBreak="break-all" overflowWrap="break-all">
                  {restaurant?.LastUpdated}
                </Text>
              </Td>}
            </Tr>
          ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;