import { Box, Button } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
const Nav = () => {
  return (
    <>
      <Box paddingTop="3%">
        <Button
          colorScheme="blackAlpha"
          color="white"
          paddingRight="6vw"
          paddingLeft="6vw"
          fontFamily="raleway"
          variant="ghost"
          fontSize="1.5vw"
        >
          Services
        </Button>
        <Button
          colorScheme="blackAlpha"
          color="white"
          paddingRight="6vw"
          paddingLeft="6vw"
          fontFamily="raleway"
          variant="ghost"
          fontSize="1.5vw"
        >
          Contact
        </Button>
        <Button
          colorScheme="blackAlpha"
          color="white"
          paddingRight="6vw"
          paddingLeft="6vw"
          fontFamily="raleway"
          variant="ghost"
          fontSize="1.5vw"
        >
          Location
        </Button>
        <Button
          colorScheme="blackAlpha"
          color="white"
          paddingRight="6vw"
          paddingLeft="6vw"
          fontFamily="raleway"
          variant="ghost"
          fontSize="1.5vw"
        >
          Reviews
        </Button>
      </Box>
    </>
  );
};
export default Nav;
