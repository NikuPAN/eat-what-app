import React from "react";
import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";

const CheckboxGroup = ({ title = "", extraColumns, setExtraColumns }) => {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setExtraColumns((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <Box>
      {title !== "" && <Text mb="4">{title}</Text>}
      <Stack spacing={[1, 5]} direction={['column', 'row']}>
        {Object.keys(extraColumns).map((column) => (
          <Checkbox
            key={column}
            name={column}
            colorScheme='teal'
            isChecked={extraColumns[column]}
            onChange={handleCheckboxChange}
          >
            {column.charAt(0).toUpperCase() + column.slice(1)}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
};

export default CheckboxGroup;
