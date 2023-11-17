import React, { useEffect, useState } from "react";
import { Grid, Image, Box, Text, Button, Fade, Link } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon } from "@chakra-ui/icons";

const MotionImage = motion(Image);

const floatingVariant = {
  float: {
    y: ["-10px", "10px"],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

interface EndPageProps {
  onStartOver: () => void;
}

const EndPage: React.FC<EndPageProps> = ({ onStartOver }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeInText1, setFadeInText1] = useState(false);
  const [fadeInText2, setFadeInText2] = useState(false);
  const [fadeInText3, setFadeInText3] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 200);

    const timerText1 = setTimeout(() => {
      setFadeInText1(true);
    }, 1200);

    const timerText2 = setTimeout(() => {
      setFadeInText2(true);
    }, 2200);

    const timerText3 = setTimeout(() => {
      setFadeInText3(true);
    }, 3200);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerText1);
      clearTimeout(timerText2);
      clearTimeout(timerText3);
    };
  }, []);

  return (
    <Grid
      sx={{
        backgroundColor: "#0f0c29",
        background: "linear-gradient(to bottom, #24243e, #302b63, #0f0c29)",
      }}
      templateRows="auto 1fr auto"
      w="100%"
      h="100vh"
    >
      <Fade in={fadeIn} transition={{ enter: { duration: 1 } }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <AnimatePresence initial={true}>
            <MotionImage
              src="./images/theend.webp"
              alt="The End"
              variants={floatingVariant}
              initial="float"
              animate="float"
              w="60vh"
            />
          </AnimatePresence>
        </Box>
      </Fade>
      <Box
        sx={{ display: "flex", flexDirection: "column", rowGap: "1em" }}
        textAlign="center"
      >
        <Fade in={fadeInText1} transition={{ enter: { duration: 1 } }}>
          <Text color="#f7be5c" fontSize="3vh" fontWeight={600}>
            Now close your eyes,
            <br /> dream of champs far and wide,
          </Text>
        </Fade>
        <Fade in={fadeInText2} transition={{ enter: { duration: 1 } }}>
          <Text color="#f7be5c" fontSize="3vh" fontWeight={600}>
            For in{" "}
            <Link
              href="https://www.leagueoflegends.com/"
              color="#fefcf3"
              isExternal
            >
              League of Legends
            </Link>
            ,
            <br />
            they're always by your side.
          </Text>
        </Fade>
        <Fade in={fadeInText3} transition={{ enter: { duration: 1 } }}>
          <Text fontSize="3vh" fontWeight={600}>
            🌙✨
          </Text>
        </Fade>
      </Box>
      <Box p={6} textAlign="center">
        <Button
          leftIcon={<ArrowLeftIcon />}
          colorScheme="whiteAlpha"
          onClick={onStartOver}
        >
          Flip to the start
        </Button>
      </Box>
    </Grid>
  );
};

export default EndPage;
