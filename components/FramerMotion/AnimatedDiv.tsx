import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

/* Custom Animated Components types */
export type AnimatedTAGProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
};

export default function AnimatedDiv({ variants, className, children, infinity }: AnimatedTAGProps) {
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
