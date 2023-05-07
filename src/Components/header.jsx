import { Heading, Highlight } from "@chakra-ui/react";
import Nav from "./nav";
import "@fontsource/dancing-script/400.css";
import "@fontsource/Anton/400.css";
const Header= () => {
  return (
    <>
      <Heading
        bg="black"
        color="white"
        paddingTop="1%"
        paddingBottom="1%"
        fontFamily="Anton"
      >
        <Highlight
          query="Michaels"
          styles={{ fontFamily: "Dancing Script", color: "white", fontWeight:'900',fontSize: '45' }}
        >
          Michaels DogWalking
        </Highlight>

        <Nav></Nav>
      </Heading>
    </>
  );
}
export default Header