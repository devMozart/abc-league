import { useEffect, useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import SwipeablePages from "./components/SwipeablePages";
import Page from "./components/Page";
import StartPage from "./components/StartPage";
import pageData from "./data/pageData.json";
import EndPage from "./components/EndPage";

interface PageData {
  letter: string;
  rhyme: string;
  image: string;
}

export const App = () => {
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);

  const onStartOver = () => {
    setCurrentPage([0, -1]);
  };

  useEffect(() => {
    // Preload images
    pageData.forEach((data) => {
      const img = new Image();
      img.src = `/images/champions/${data.image}`;
    });
  }, []);

  const pages = [
    { content: <StartPage /> },
    ...pageData.map((page: PageData) => {
      return {
        content: (
          <Page letter={page.letter} text={page.rhyme} image={page.image} />
        ),
      };
    }),
    { content: <EndPage onStartOver={onStartOver} /> },
  ];

  return (
    <ChakraProvider theme={theme}>
      <SwipeablePages
        pages={pages}
        currentPage={currentPage}
        direction={direction}
        setCurrentPage={setCurrentPage}
      />
    </ChakraProvider>
  );
};
