import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles,Class = ` font-bold text-[1rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.5rem]` }) => (
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
