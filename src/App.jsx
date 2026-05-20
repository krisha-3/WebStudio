import { Box } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Provider>
      <Box minH="100vh" bg="#3D3030" color={"gray.500"} px={6} py={8}>
        <CodeEditor />
      </Box>
    </Provider>
  );
}

export default App;
