import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");

// Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.2 * i },
    }),
  };

// Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
      
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ color:"linear(to-r, #7928CA, #FF0080)", marginRight: "8px" }}
          key={index}
       
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
