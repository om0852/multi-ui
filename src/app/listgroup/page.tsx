"use client"
import React from "react";
import { ListGroup, ListItem } from "./_components/ListGroup_4";

const App: React.FC = () => {
    const items = ["Home", "Profile", "Messages", "Settings"];
  
    return (
      <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          Animated List Variants
        </h1>
  
        {/* Default List */}
        <ListGroup variant="default" className="mb-6">
          {items.map((item, index) => (
            <ListItem key={index} animationType="hover-scale">
              {item}
            </ListItem>
          ))}
        </ListGroup>
  
        {/* Gradient List */}
        <ListGroup variant="gradient" className="mb-6">
          {items.map((item, index) => (
            <ListItem key={index} animationType="rotate">
              {item}
            </ListItem>
          ))}
        </ListGroup>
  
        {/* Highlighted List */}
        <ListGroup variant="highlighted" className="mb-6">
          {items.map((item, index) => (
            <ListItem key={index} animationType="bounce">
              {item}
            </ListItem>
          ))}
        </ListGroup>
      </div>
    );
  };
  
export default App;
