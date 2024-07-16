import React, { useState } from "react";
import {
  Box,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SearchInput = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <Box maxW="100%" m="20px">
      <Menu>
        <MenuButton
          as={InputGroup}
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
        >
          <Input
            placeholder="Search name/suburb/postcode..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <InputRightElement>
            <ChevronDownIcon />
          </InputRightElement>
        </MenuButton>
        {searchTerm && (
          <MenuList>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <MenuItem key={index}>{item}</MenuItem>
              ))
            ) : (
              <MenuItem>No results found</MenuItem>
            )}
          </MenuList>
        )}
      </Menu>
    </Box>
  );
};

export default SearchInput;