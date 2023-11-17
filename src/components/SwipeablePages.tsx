import React, { SetStateAction } from "react";
import { useSwipeable } from "react-swipeable";
import { VStack } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

interface Page {
  content: JSX.Element;
}

interface SwipeablePageProps {
  pages: Page[];
  currentPage: number;
  direction: number;
  setCurrentPage: (page: SetStateAction<[number, number]>) => void;
}

const SwipeablePages: React.FC<SwipeablePageProps> = ({
  pages,
  currentPage,
  direction,
  setCurrentPage,
}) => {
  const onSwipe = (swipeDirection: number) => {
    if (swipeDirection === -1 && currentPage === 0) return;
    if (swipeDirection === 1 && currentPage === pages.length - 1) return;

    setCurrentPage([currentPage + swipeDirection, swipeDirection]);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe(1),
    onSwipedRight: () => onSwipe(-1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const swipeTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  const swipeVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1,
    }),
  };

  const canSwipeLeft = currentPage !== pages.length - 1;
  const canSwipeRight = currentPage !== 0;

  return (
    <VStack {...handlers} w="100%" overflow="hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={swipeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={swipeTransition}
          style={{ width: "100%", position: "absolute" }}
        >
          {canSwipeLeft && (
            <ChevronRightIcon
              sx={{
                cursor: "pointer",
                ":hover": {
                  color: "#ffbd4d",
                },
              }}
              w={8}
              h={8}
              position="absolute"
              right="0"
              top="50%"
              color="#fefcf3"
              zIndex={2}
              onClick={() => onSwipe(1)}
            />
          )}
          {canSwipeRight && (
            <ChevronLeftIcon
              sx={{
                cursor: "pointer",
                ":hover": {
                  color: "#ffbd4d",
                },
              }}
              w={8}
              h={8}
              position="absolute"
              left="0"
              top="50%"
              color="#fefcf3"
              zIndex={2}
              onClick={() => onSwipe(-1)}
            />
          )}
          {pages[currentPage].content}
        </motion.div>
      </AnimatePresence>
    </VStack>
  );
};

export default SwipeablePages;
