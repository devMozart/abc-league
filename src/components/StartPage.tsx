import React, { useEffect, useState } from "react";
import { Grid, Image, Box, Text, Link, Fade } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

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

const StartPage: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeInText1, setFadeInText1] = useState(false);
  const [fadeInText2, setFadeInText2] = useState(false);

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

    return () => {
      clearTimeout(timer);
      clearTimeout(timerText1);
      clearTimeout(timerText2);
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
              src="./images/abc.webp"
              alt="ABC of League"
              variants={floatingVariant}
              initial="float"
              animate="float"
              w="60vh"
            />
          </AnimatePresence>
        </Box>
      </Fade>
      <Box p={6} textAlign="center">
        <Fade in={fadeInText1} transition={{ enter: { duration: 1 } }}>
          <Text color="#f7be5c" fontSize="3vh" fontWeight={600}>
            For Adrian,
          </Text>
        </Fade>
        <Fade in={fadeInText2} transition={{ enter: { duration: 1 } }}>
          <Text color="#f7be5c" fontSize="3vh" fontWeight={600}>
            by{" "}
            <Link
              href="https://github.com/devmozart"
              color="#fefcf3"
              isExternal
            >
              Amadeus
            </Link>
          </Text>
        </Fade>
      </Box>
      <Box p={6} textAlign="center">
        <Text color="#474180" fontSize="3vh" fontWeight={600}>
          Swipe left to open
        </Text>
        <Text color="#474180" fontSize="2vh" fontWeight={600}>
          (or push the arrow)
        </Text>
      </Box>
    </Grid>
  );
};

export default StartPage;
