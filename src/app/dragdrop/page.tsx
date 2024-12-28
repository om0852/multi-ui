// App.tsx

import React from "react";
import {
  DragArea,
  DragContainer,
  DragProvider,
} from "./_components/DragDrop_1";

const App: React.FC = () => {
  return (
    <>
      {/* First Drag Context */}
      <DragProvider>
        <div className="flex flex-col gap-4">
          <DragContainer taskId="task-1">
            <div>Task 1</div>
          </DragContainer>
          <DragArea areaId="area-1" />
          <DragContainer taskId="task-2">
            <div>Task 2</div>
          </DragContainer>
          <DragArea areaId="area-2" />
          <DragContainer taskId="task-3">
            <div>Task 3</div>
          </DragContainer>
        </div>
      </DragProvider>

      {/* Second Drag Context */}
      <DragProvider>
        <div className="flex flex-col gap-4 mt-10">
          <DragContainer taskId="task-4">
            <div>Task 4</div>
          </DragContainer>
          <DragArea areaId="area-3" />
          <DragContainer taskId="task-5">
            <div>Task 5</div>
          </DragContainer>
          <DragArea areaId="area-4" />
          <DragContainer taskId="task-6">
            <div>Task 6</div>
          </DragContainer>
        </div>
      </DragProvider>
    </>
  );
};

export default App;
