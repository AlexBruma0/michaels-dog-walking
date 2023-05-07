import { Box, Button } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
const Nav = () => {
  return (
    <>
      <Box paddingTop="3%">
        <Button
          paddingRight="10%"
          paddingLeft="10%"
          fontFamily="raleway"
          variant="ghost"
        >
          Services
        </Button>
        <Button
          paddingRight="10%"
          paddingLeft="10%"
          fontFamily="raleway"
          variant="ghost"
        >
          Contact
        </Button>
        <Button
          paddingRight="10%"
          paddingLeft="10%"
          fontFamily="raleway"
          variant="ghost"
        >
          Location
        </Button>
        <Button
          paddingRight="10%"
          paddingLeft="10%"
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
