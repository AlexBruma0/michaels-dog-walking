import "./App.css";
import {Image, Box} from "@chakra-ui/react";
import Header from "./Components/header";
import imgUrl from './assets/digitalDOG.png'
function App() {
  return (
    <>
      <Header></Header>
      
      <Box border='1pt solid black'>
      </Box>
      <Box boxSize='100%' mt='1%'>
        <Image src={imgUrl} fallbackSrc='https://via.placeholder.com/150' boxSize='100%' maxHeight='900px'/>
      </Box>
    </>
  );
}

export default App;
