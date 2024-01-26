import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";

export const SideMenu: React.FC = () => {
  const handleClick = (path: string): void => {
    window.location.href = path;
  };

  return (
    <Accordion allowMultiple pb={1}>
      <AccordionItem>
        <Heading>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              About
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={1}>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              onClick={() => {
                handleClick("/myapps/about");
              }}
            >
              About
            </Box>
          </AccordionButton>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              onClick={() => {
                handleClick("/myapps/profile");
              }}
            >
              Profile
            </Box>
          </AccordionButton>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Portofolio
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              onClick={() => {
                handleClick("/myapps/csssite");
              }}
            >
              HTML/CSS/js
            </Box>
          </AccordionButton>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              onClick={() => {
                handleClick("/myapps/forms");
              }}
            >
              React(ToDo App)
            </Box>
          </AccordionButton>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
