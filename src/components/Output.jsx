import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Provider } from "./ui/provider";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      const {} = await executeCode(language, sourceCode);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Provider>
      <Box w="50%">
        <Text mb={2} fontSize="lg">
          Output:
        </Text>
        <Button variant="outline" colorScheme="green" mb={4} onClick={runCode}>
          Run
        </Button>
        <Box
          height="75vh"
          p={2}
          border="1px solid"
          borderRadius={4}
          borderColor="#333"
        >
          Test
        </Box>
      </Box>
    </Provider>
  );
};

export default Output;
