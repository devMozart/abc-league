import React, { useEffect, useState } from "react";
import { Box, Grid, Text, Fade } from "@chakra-ui/react";

interface PageProps {
  letter: string;
  image: string;
  text: string;
}

const Page: React.FC<PageProps> = ({ letter, text, image }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 200); // starts the fade in after 500ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid
      sx={{
        backgroundColor: "#0f0c29",
        background: "linear-gradient(to bottom, #24243e, #302b63, #0f0c29)",
      }}
      templateRows="1fr auto"
      w="100%"
      h="100vh"
    >
      <Box
        position="absolute"
        opacity={0.8}
        left="0"
        top="0"
        w="100%"
        h="100%"
        sx={{
          backgroundImage: `url(./images/champions/${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <Box sx={{ padding: "0.5em 1em" }} color="white" zIndex={1}>
        <Fade in={fadeIn} transition={{ enter: { duration: 1 } }}>
          <Text
            sx={{
              WebkitTextStroke: "1px black",
            }}
            fontSize="6vh"
            fontWeight={900}
            color="white"
          >
            {text}
          </Text>
        </Fade>
      </Box>
      <Box p={2} textAlign="center" zIndex={1}>
        <Text
          sx={{
            fontWeight: 700,
            backgroundImage: "linear-gradient(to bottom, #fefcf3, #ffbd4d)",
            backgroundClip: "text",
            WebkitTextStroke: "2px black",
          }}
          fontSize="20vh"
        >
          {letter}
        </Text>
      </Box>
    </Grid>
  );
};

export default Page;
