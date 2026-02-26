import { useState, useCallback, useRef, useEffect } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function useScramble(originalText: string, duration = 2.5) {
  // Speed scales with text length so every string takes ~`duration` seconds
  const nonSpaceLen = originalText.replace(/ /g, '').length || 1;
  const speed = nonSpaceLen / (duration * 60);

  const [displayText, setDisplayText] = useState(originalText);
  const frameRef = useRef<number | null>(null);
  const iterationRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const scramble = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    iterationRef.current = 0;

    const animate = () => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < Math.floor(iterationRef.current)) return originalText[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iterationRef.current < originalText.length) {
        iterationRef.current += speed;
        frameRef.current = requestAnimationFrame(animate);
      } else {
        isAnimatingRef.current = false;
        setDisplayText(originalText);
      }
    };

    isAnimatingRef.current = true;
    frameRef.current = requestAnimationFrame(animate);
  }, [originalText, speed]);

  const reset = useCallback(() => {
    // If an animation is in progress, let it finish — don't interrupt it
    if (isAnimatingRef.current) return;
    setDisplayText(originalText);
  }, [originalText]);

  // Keep a stable ref so the mount effect doesn't need scramble as a dep
  const scrambleRef = useRef(scramble);
  scrambleRef.current = scramble;

  // Auto-play on mount / page load
  useEffect(() => {
    scrambleRef.current();
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { displayText, scramble, reset };
}
