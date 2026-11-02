import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

const spring = { stiffness: 200, damping: 20 };

const TiltCard = ({ className, children }) => {
  const ref = useRef();
  const reducedMotion = useReducedMotion();
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(260px at ${glowX}px ${glowY}px, rgba(255, 138, 117, 0.16), transparent 70%)`;

  const onMouseMove = (event) => {
    if (reducedMotion) return;
    const box = ref.current.getBoundingClientRect();
    const x = event.clientX - box.left;
    const y = event.clientY - box.top;
    glowX.set(x);
    glowY.set(y);
    rotateY.set((x / box.width - 0.5) * 10);
    rotateX.set((0.5 - y / box.height) * 10);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900, backgroundImage: glow }}
      className={className}
    >
      {children}
    </motion.article>
  );
};

export default TiltCard;
