"use client";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const Tooltip_16 = ({
  text,
  position = "top",
  children,
  pixelColor = "#39ff14",
  backgroundColor = "#000000",
  borderColor = "#39ff14",
  delay = 0.2,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const getPosition = () => {
    switch (position) {
      case "top":
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)" };
      case "bottom":
        return { top: "100%", left: "50%", transform: "translateX(-50%)" };
      case "left":
        return { right: "100%", top: "50%", transform: "translateY(-50%)" };
      case "right":
        return { left: "100%", top: "50%", transform: "translateY(-50%)" };
      default:
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)" };
    }
  };

  const getInitialAnimation = () => {
    switch (position) {
      case "top":
        return { opacity: 0, y: 10 };
      case "bottom":
        return { opacity: 0, y: -10 };
      case "left":
        return { opacity: 0, x: 10 };
      case "right":
        return { opacity: 0, x: -10 };
      default:
        return { opacity: 0, y: 10 };
    }
  };

  useEffect(() => {
    let timeout;
    if (isVisible && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 50);
    }
    if (!isVisible) {
      setDisplayText("");
    }
    return () => clearTimeout(timeout);
  }, [isVisible, displayText, text]);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={getInitialAnimation()}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={getInitialAnimation()}
            transition={{ duration: 0.3, delay }}
            style={{
              ...getPosition(),
              position: "absolute",
              padding: "0.75rem 1.5rem",
              backgroundColor,
              color: pixelColor,
              whiteSpace: "nowrap",
              zIndex: 50,
              marginBottom: position === "top" ? "0.75rem" : 0,
              marginTop: position === "bottom" ? "0.75rem" : 0,
              marginLeft: position === "right" ? "0.75rem" : 0,
              marginRight: position === "left" ? "0.75rem" : 0,
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "0.875rem",
              border: `2px solid ${borderColor}`,
              boxShadow: `0 0 10px ${pixelColor}`,
              imageRendering: "pixelated",
            }}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              style={{ marginLeft: "2px" }}
            >
              _
            </motion.span>
            {/* Scanlines effect */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                background: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(57, 255, 20, 0.1) 2px,
                  rgba(57, 255, 20, 0.1) 4px
                )`,
                pointerEvents: "none",
              }}
            />
            {/* CRT flicker effect */}
            <motion.div
              animate={{
                opacity: [0.1, 0.15, 0.1],
                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                ease: "steps(3)",
              }}
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at 50% 50%, rgba(57, 255, 20, 0.1) 0%, transparent 100%)`,
                pointerEvents: "none",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Tooltip_16.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  children: PropTypes.node.isRequired,
  pixelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  delay: PropTypes.number,
  className: PropTypes.string,
};

export default Tooltip_16;
