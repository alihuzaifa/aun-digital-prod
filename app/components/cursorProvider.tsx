"use client";

import React, { useState, useEffect, createContext, useCallback } from "react";
import { useMotionValue, motion, useSpring } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { CursorContextType, CursorProviderProps, CursorState } from "@/types";

// Create context with the defined type
export const CursorContext = createContext<CursorContextType | undefined>(
  undefined
);

const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  // Initialize the cursor state
  const [cursor, setCursor] = useState<CursorState>({
    size: 20,
    background: "#1990ba",
  });
  // State to track if the cursor is hovering
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Check if the viewport width is less than or equal to 1200px
  const smallViewportIsActive = useMediaQuery({ query: "(max-width: 1400px)" });

  // Initialize motion values for cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for smooth cursor movement
  const springConfig = { damping: 20, stiffness: 290, mass: 0.45 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Handle mouse move events
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!smallViewportIsActive) {
      mouseX.set(e.clientX - cursor.size / 2);
      mouseY.set(e.clientY - cursor.size / 2);
    } else {
      setCursor({ size: 0, background: "none" });
    }
  }, [smallViewportIsActive, cursor.size, mouseX, mouseY]);

  // Handle mouse enter events
  const mouseEnterHandle = () => {
    setCursor({ size: 40, background: "#00423a" });
    setIsHovering(true);
  };

  // Handle mouse leave events
  const mouseLeaveHandler = () => {
    setCursor({ size: 20, background: "#473936" });
    setIsHovering(false);
  };

  // Set up and clean up mouse move event listener
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <CursorContext.Provider value={{ mouseEnterHandle, mouseLeaveHandler }}>
      <motion.div
        className="fixed z-[99] rounded-full pointer-events-none transition-all duration-300"
        style={{
          left: springX,
          top: springY,
          width: cursor.size,
          height: cursor.size,
          backgroundColor: cursor.background,
          mixBlendMode: isHovering ? "difference" : "normal",
          transition: "width 0.2s ease-in-out, height 0.2s ease-in-out",
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;