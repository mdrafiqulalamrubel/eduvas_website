'use client';

import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverScale?: number;
  style?: CSSProperties;
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = '',
  hoverScale = 1.02,
  style
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.3 }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
