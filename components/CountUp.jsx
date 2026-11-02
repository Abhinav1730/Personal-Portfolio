import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

// Counts every number in a value like "60-80%" up from zero
const CountUp = ({ value }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const [text, setText] = useState(value);

  useEffect(() => {
    if (!isInView || reducedMotion) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const amount = Math.min((now - start) / 1200, 1);
      const eased = 1 - (1 - amount) ** 3;
      setText(value.replace(/\d+/g, (n) => Math.round(n * eased)));
      if (amount < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reducedMotion, value]);

  return <span ref={ref}>{text}</span>;
};

export default CountUp;
