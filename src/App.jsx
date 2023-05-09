import "./App.css";
import { Image, Box } from "@chakra-ui/react";
import Header from "./Components/header";
import imgUrl from "./assets/digitalDOG.png";
import imgUrl2 from "./assets/dog4.png";
function App() {
  return (
    <>
      <Box bg= 'white' padding='1vw'>
        <Header></Header>

  <Box border="1pt solid black"></Box>
  <Box boxSize="100%" mt="1%">
    <Image
      src={imgUrl}
      fallbackSrc="https://via.placeholder.com/150"
      boxSize="100%"
      maxHeight="900px"
    />
  </Box>
      </Box>
      


      <Box
        boxSize="100%"
        bg="#000000"
        padding="1%"
        border="1pt solid black"
      >
        
        <Image
          src={imgUrl2}
          fallbackSrc="https://via.placeholder.com/150"
          boxSize="100%"
          maxHeight="900px"
        />
      </Box>
    </>
  );
}

export default App;
