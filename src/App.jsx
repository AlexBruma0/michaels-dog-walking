import "./App.css";
import { Heading, Highlight } from "@chakra-ui/react";
import "@fontsource/dancing-script/600.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/raleway/400.css";
import "@fontsource/dekko/400.css";
import "@fontsource/great-vibes/400.css";
import "@fontsource/sacramento/400.css";
import "@fontsource/Anton/400.css";
function App() {
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
          styles={{ fontFamily: "Sacramento", color: "white" }}
        >
          Michaels DogWalking
        </Highlight>
      </Heading>
    </>
  );
}

export default App;
