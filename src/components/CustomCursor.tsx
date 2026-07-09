import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    let ringX = 0;
    let ringY = 0;
    let dotX = 0;
    let dotY = 0;
    let animFrame: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }
    };

    const animate = () => {
      ringX += (dotX - ringX) * 0.15;
      ringY += (dotY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      animFrame = requestAnimationFrame(animate);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <Box
        ref={dotRef}
        sx={{
          position: 'fixed',
          width: clicking ? 8 : 6,
          height: clicking ? 8 : 6,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.15s, height 0.15s',
          boxShadow: '0 0 8px #00e5ff, 0 0 16px #00e5ff',
        }}
      />
      <Box
        ref={ringRef}
        sx={{
          position: 'fixed',
          width: clicking ? 24 : 32,
          height: clicking ? 24 : 32,
          borderRadius: '50%',
          border: '1.5px solid',
          borderColor: 'primary.main',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.15s, height 0.15s',
          opacity: 0.6,
          boxShadow: '0 0 6px rgba(0, 229, 255, 0.4)',
        }}
      />
    </>
  );
}
