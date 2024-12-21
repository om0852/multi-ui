"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Skeleton_2Props {
  className?: string;
}

const Skeleton_2: React.FC<Skeleton_2Props> = ({ className = "" }) => {
  return (
    <motion.div
      className={clsx("bg-gray-200 animate-pulse rounded-md", className)}
    />
  );
};

export default Skeleton_2;
