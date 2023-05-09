import { Heading, Highlight } from "@chakra-ui/react";

import Nav from "./nav";
import "@fontsource/dancing-script/400.css";
import "@fontsource/Anton/400.css";
const Header = () => {
  return (
    <>
      <Heading
        bg="#000000"
        color="white"
        paddingTop="4%"
        paddingBottom="1%"
        fontFamily="Anton"
        fontSize='3.5vw'
      >
        <Highlight
          query="Michaels"
          styles={{
            fontFamily: "Dancing Script",
            color: "white",
            fontWeight: "900",
            fontSize: "4.5vw",
          }}
        >
          Michaels DogWalking
        </Highlight>
        <br></br>
        <Nav></Nav>
      </Heading>
    </>
  );
};
export default Header;
