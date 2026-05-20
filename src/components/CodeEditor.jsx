import React, { useRef, useState } from "react";
import { Provider } from "./ui/provider";
import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
// import { editor } from "monaco-editor";

function CodeEditor() {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return (
    <Provider>
      <Box>
        <Editor
          height="75vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
        ;
      </Box>
    </Provider>
  );
}

export default CodeEditor;
