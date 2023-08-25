import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

export default function AnimatedDiv({ variants, className, children, infinity }: any) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
      // style={style}
      transition={{ staggerChildren: 0.11 }}
    >
      {children}
    </motion.div>
  );
}
