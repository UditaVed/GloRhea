import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles,Class = `text-xl font-bold sm:text-5xl ` }) => (
  <motion.p
    variants={textContainer}
    className={ `${textStyles} ${Class} `}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);
