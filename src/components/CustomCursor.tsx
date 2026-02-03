// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion, useSpring, useMotionValue } from 'framer-motion';

// export default function CustomCursor() {
//     const [isHovered, setIsHovered] = useState(false);
//     const [isActive, setIsActive] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);

//     // Motion values for smooth tracking
//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);

//     // Spring configuration for the "tail" effect
//     const springConfig = { damping: 25, stiffness: 200 };
//     const trailX = useSpring(mouseX, springConfig);
//     const trailY = useSpring(mouseY, springConfig);

//     useEffect(() => {
//         const moveCursor = (e: MouseEvent) => {
//             mouseX.set(e.clientX);
//             mouseY.set(e.clientY);
//             if (!isVisible) setIsVisible(true);
//         };

//         const handleMouseOver = (e: MouseEvent) => {
//             const target = e.target as HTMLElement;
//             const isInteractive =
//                 target.tagName === 'A' ||
//                 target.tagName === 'BUTTON' ||
//                 target.closest('a') ||
//                 target.closest('button') ||
//                 window.getComputedStyle(target).cursor === 'pointer';

//             setIsHovered(!!isInteractive);
//         };

//         const handleMouseDown = () => setIsActive(true);
//         const handleMouseUp = () => setIsActive(false);

//         window.addEventListener('mousemove', moveCursor);
//         window.addEventListener('mouseover', handleMouseOver);
//         window.addEventListener('mousedown', handleMouseDown);
//         window.addEventListener('mouseup', handleMouseUp);
//         document.addEventListener('mouseleave', () => setIsVisible(false));
//         document.addEventListener('mouseenter', () => setIsVisible(true));

//         return () => {
//             window.removeEventListener('mousemove', moveCursor);
//             window.removeEventListener('mouseover', handleMouseOver);
//             window.removeEventListener('mousedown', handleMouseDown);
//             window.removeEventListener('mouseup', handleMouseUp);
//         };
//     }, [mouseX, mouseY, isVisible]);

//     if (!isVisible) return null;

//     return (
//         <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
//             {/* Main Cursor Dot */}
//             <motion.div
//                 className="fixed top-0 left-0 w-2 h-2 bg-red-600 rounded-full z-30 shadow-[0_0_10px_rgba(220,38,38,0.3)]"
//                 style={{
//                     x: mouseX,
//                     y: mouseY,
//                     translateX: '-50%',
//                     translateY: '-50%',
//                 }}
//                 animate={{
//                     scale: isActive ? 0.8 : (isHovered ? 2.5 : 1),
//                     backgroundColor: isHovered ? '#ff0000' : '#dc2626',
//                 }}
//                 transition={{ type: 'spring', damping: 30, stiffness: 400 }}
//             />

//             {/* Animated Outer Ring / Aurora */}
//             <motion.div
//                 className="fixed top-0 left-0 w-8 h-8 border-2 border-red-600/30 rounded-full z-20"
//                 style={{
//                     x: trailX,
//                     y: trailY,
//                     translateX: '-50%',
//                     translateY: '-50%',
//                 }}
//                 animate={{
//                     scale: isActive ? 1.4 : (isHovered ? 1.8 : 1),
//                     borderColor: isHovered ? 'rgba(255, 0, 0, 0.5)' : 'rgba(220, 38, 38, 0.2)',
//                     borderWidth: isHovered ? '1px' : '2px',
//                 }}
//             />

//             {/* Liquid Tail Segments (No Arrowhead shape, just abstract dots) */}
//             {[...Array(4)].map((_, i) => (
//                 <TailSegment
//                     key={i}
//                     index={i}
//                     mouseX={mouseX}
//                     mouseY={mouseY}
//                     isHovered={isHovered}
//                 />
//             ))}
//         </div>
//     );
// }

// function TailSegment({ index, mouseX, mouseY, isHovered }: {
//     index: number,
//     mouseX: any,
//     mouseY: any,
//     isHovered: boolean
// }) {
//     // Each segment has more lag than the previous one
//     const springX = useSpring(mouseX, { damping: 15 + index * 5, stiffness: 120 - index * 15 });
//     const springY = useSpring(mouseY, { damping: 15 + index * 5, stiffness: 120 - index * 15 });

//     return (
//         <motion.div
//             className="fixed top-0 left-0 w-1 h-1 bg-red-500/30 rounded-full z-10"
//             style={{
//                 x: springX,
//                 y: springY,
//                 translateX: '-50%',
//                 translateY: '-50%',
//                 scale: 1 - index * 0.15,
//             }}
//             animate={{
//                 opacity: isHovered ? 0 : 0.6 - index * 0.1,
//             }}
//         />
//     );
// }










// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';

// export default function CustomCursor() {
//     const [isHovered, setIsHovered] = useState(false);
//     const [isActive, setIsActive] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);

//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);

//     /**
//      * NORMAL SMOOTH CONFIGURATION
//      * mass: 0.4 -> Makes the cursor feel weightless and snappy.
//      * stiffness: 450 -> Ensures it stays "glued" to the actual mouse position.
//      * damping: 35 -> Smooths out the movement without any overshoot or bounce.
//      */
//     const springConfig = {  
//         mass: 0.1,        // Lower mass = less inertia (faster start/stop)
//         stiffness: 2000,   // High stiffness = stays glued to the pointer
//         damping: 30       // High damping = zero wobble/vibration
//     };
    
//     const smoothX = useSpring(mouseX, springConfig);
//     const smoothY = useSpring(mouseY, springConfig);

//     useEffect(() => {
//         const moveCursor = (e: MouseEvent) => {
//             mouseX.set(e.clientX);
//             mouseY.set(e.clientY);
//             if (!isVisible) setIsVisible(true);
//         };

//         const handleMouseOver = (e: MouseEvent) => {
//             const target = e.target as HTMLElement;
//             const isInteractive =
//                 target.tagName === 'A' ||
//                 target.tagName === 'BUTTON' ||
//                 target.closest('a') ||
//                 target.closest('button') ||
//                 window.getComputedStyle(target).cursor === 'pointer';

//             setIsHovered(!!isInteractive);
//         };

//         const handleMouseDown = () => setIsActive(true);
//         const handleMouseUp = () => setIsActive(false);

//         window.addEventListener('mousemove', moveCursor);
//         window.addEventListener('mouseover', handleMouseOver);
//         window.addEventListener('mousedown', handleMouseDown);
//         window.addEventListener('mouseup', handleMouseUp);
//         document.addEventListener('mouseleave', () => setIsVisible(false));
//         document.addEventListener('mouseenter', () => setIsVisible(true));

//         return () => {
//             window.removeEventListener('mousemove', moveCursor);
//             window.removeEventListener('mouseover', handleMouseOver);
//             window.removeEventListener('mousedown', handleMouseDown);
//             window.removeEventListener('mouseup', handleMouseUp);
//         };
//     }, [mouseX, mouseY, isVisible]);

//     if (!isVisible) return null;

//     return (
//         <div className="fixed inset-0 pointer-events-none z-[9999]">
//             <motion.div
//                 className="fixed top-0 left-0 pointer-events-none flex items-center justify-center"
//                 style={{
//                     x: smoothX,
//                     y: smoothY,
//                     translateX: '-50%',
//                     translateY: '-50%',
//                     width: '32px', 
//                     height: '32px',
//                 }}
//                 animate={{
//                     // Just a very slight scale shift so the user knows they clicked
//                     scale: isActive ? 0.9 : (isHovered ? 1.15 : 1),
//                 }}
//                 transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//             >
//                 <img 
//                     src="/cursors/logo-cursor.svg" 
//                     alt="cursor" 
//                     className="w-full h-full object-contain"
//                 />
//             </motion.div>
//         </div>
//     );
// }




'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth but tight cursor movement
  const springConfig = {
    mass: 0.1,
    stiffness: 2000,
    damping: 30,
  };

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    document.addEventListener('mouseleave', () => setIsVisible(false));
    document.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-start justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%', // center horizontally
          translateY: '0%',   // TOP aligned to mouse
          width: '32px',
          height: '32px',
        }}
        animate={{
          scale: isActive ? 0.9 : isHovered ? 1.15 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <img
          src="/cursors/logo-cursor.svg"
          alt="cursor"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}
