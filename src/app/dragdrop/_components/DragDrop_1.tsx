"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface Task {
  id: string;
  content: ReactNode;
}

interface DragDropContextType {
  onDragStart: (task: Task) => void;
  onDrop: (areaId: string) => void;
  draggedTask: Task | null;
}

const DragDropContext = createContext<DragDropContextType | null>(null);

export const DragProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const onDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const onDrop = (areaId: string) => {
    console.log(`Dropped in area: ${areaId}`);
    if (draggedTask) {
      console.log(`Dropped Task: ${draggedTask.content}`);
      setDraggedTask(null);
    }
  };

  return (
    <DragDropContext.Provider value={{ onDragStart, onDrop, draggedTask }}>
      {children}
    </DragDropContext.Provider>
  );
};

export const DragContainer: React.FC<{ taskId: string; children: ReactNode }> = ({ taskId, children }) => {
  const { onDragStart } = useContext(DragDropContext)!;
  const task = { id: taskId, content: children };

  return (
    <motion.div
      className="bg-blue-500 text-white p-4 rounded shadow cursor-pointer"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragStart={() => onDragStart(task)}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export const DragArea: React.FC<{ areaId: string }> = ({ areaId }) => {
  const { onDrop } = useContext(DragDropContext)!;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative w-16 h-16 rounded-full border-2 ${
        isHovered ? "border-green-500 bg-green-200" : "border-gray-400 bg-gray-100"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsHovered(true);
      }}
      onDragLeave={() => setIsHovered(false)}
      onDrop={() => {
        onDrop(areaId);
        setIsHovered(false);
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500 opacity-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      )}
    </motion.div>
  );
};
