import { Box, Text, Button, Menu, Portal, Stack } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";
import { Provider } from "./ui/provider";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COlOR = "blue.300"

const LanguageSelector = ({ language, onSelect }) => {
  const [open, setOpen] = useState(false);
  return (
    <Provider>
      <Box ml={2} mb={4}>
        <Stack gap="4" align="flex-start">
          <Menu.Root isLazy open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Text mb={2} fontSize="lg">
              Languages:
            </Text>
            <Menu.Trigger asChild>
              <Button bg="#1F150C" variant="outline" size="sm">
                {language}
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content bg="#110c1b">
                  {languages.map(([lang, version]) => (
                    <Menu.Item
                      key={lang}
                      onClick={() => onSelect(lang)}
                      bg={language === lang ? "#2D3748" : "transparent"}
                      color={language === lang ? ACTIVE_COlOR : "white"}
                    
                        _hover={{
                            color:ACTIVE_COlOR,
                            bg:'#2D3748',
                        }}>
                      {lang}
                      &nbsp;
                      <Text as="span" color="gray.600" fontSize="sm">
                        ({version})
                      </Text>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Stack>
      </Box>
    </Provider>
  );
};

export default LanguageSelector;
