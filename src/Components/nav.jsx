import { Box, Button } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
const Nav = () => {
  return (
    <>
      <Box paddingTop="3%">
        <Button
                  colorScheme="messenger"
                  color='white'
          paddingRight="6vw"
          paddingLeft="6vw"
          fontFamily="raleway"
          variant="ghost"
        >
          Services
        </Button>
        <Button
                  colorScheme="messenger"
                  color='white'
          paddingRight="6vw"
          paddingLeft="6vw"
          fontFamily="raleway"
          variant="ghost"
        >
          Contact
        </Button>
        <Button
          colorScheme="messenger"
          color='white'
          paddingRight="6vw"
          paddingLeft="6vw"
          fontFamily="raleway"
          variant="ghost"
        >
          Location
        </Button>
        <Button
                  colorScheme="messenger"
                  color='white'
          paddingRight="6vw"
          paddingLeft="6vw"
          fontFamily="raleway"
          variant="ghost"
        >
          Reviews
        </Button>
      </Box>
    </>
  );
};
export default Nav;
