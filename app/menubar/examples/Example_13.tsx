// "use client";

// import * as React from "react";
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarSub,
//   MenubarTrigger,
//   MenubarCheckboxItem,
// } from "../_components/Menubar_131";
// import { useState } from "react";

// export default function Example_13() {
//   const [editorSettings, setEditorSettings] = useState({
//     wordWrap: true,
//     lineNumbers: true,
//     minimap: false,
//     darkMode: false,
//   });

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold mb-4">Text Editor Settings</h2>
//       <Menubar>
//         <MenubarTrigger>Format</MenubarTrigger>
//         <MenubarContent>
//           <MenubarItem>
//             Indent
//             <MenubarShortcut>Tab</MenubarShortcut>
//           </MenubarItem>
//           <MenubarItem>
//             Outdent
//             <MenubarShortcut>⇧Tab</MenubarShortcut>
//           </MenubarItem>
//           <MenubarSeparator />
//           <MenubarSub label="Convert Case">
//             <MenubarContent>
//               <MenubarItem>UPPERCASE</MenubarItem>
//               <MenubarItem>lowercase</MenubarItem>
//               <MenubarItem>Title Case</MenubarItem>
//             </MenubarContent>
//           </MenubarSub>
//           <MenubarSeparator />
//           <MenubarItem>
//             Format Document
//             <MenubarShortcut>⌘⇧F</MenubarShortcut>
//           </MenubarItem>
//         </MenubarContent>

//         <MenubarTrigger>View</MenubarTrigger>
//         <MenubarContent>
//           <MenubarCheckboxItem
//             checked={editorSettings.wordWrap}
//             onChange={(checked: boolean) =>
//               setEditorSettings((prev) => ({ ...prev, wordWrap: checked }))
//             }
//           >
//             Word Wrap
//             <MenubarShortcut>⌘W</MenubarShortcut>
//           </MenubarCheckboxItem>
//           <MenubarCheckboxItem
//             checked={editorSettings.lineNumbers}
//             onChange={(checked: boolean) =>
//               setEditorSettings((prev) => ({ ...prev, lineNumbers: checked }))
//             }
//           >
//             Line Numbers
//             <MenubarShortcut>⌘L</MenubarShortcut>
//           </MenubarCheckboxItem>
//           <MenubarCheckboxItem
//             checked={editorSettings.minimap}
//             onChange={(checked: boolean) =>
//               setEditorSettings((prev) => ({ ...prev, minimap: checked }))
//             }
//           >
//             Minimap
//             <MenubarShortcut>⌘M</MenubarShortcut>
//           </MenubarCheckboxItem>
//           <MenubarSeparator />
//           <MenubarCheckboxItem
//             checked={editorSettings.darkMode}
//             onChange={(checked: boolean) =>
//               setEditorSettings((prev) => ({ ...prev, darkMode: checked }))
//             }
//           >
//             Dark Mode
//             <MenubarShortcut>⌘D</MenubarShortcut>
//           </MenubarCheckboxItem>
//         </MenubarContent>
//       </Menubar>

//       <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
//         <p>Word Wrap: {editorSettings.wordWrap ? "Enabled" : "Disabled"}</p>
//         <p>Line Numbers: {editorSettings.lineNumbers ? "Shown" : "Hidden"}</p>
//         <p>Minimap: {editorSettings.minimap ? "Visible" : "Hidden"}</p>
//         <p>Theme: {editorSettings.darkMode ? "Dark" : "Light"}</p>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const Example_13 = () => {
  return (
    <div>
      
    </div>
  )
}

export default Example_13
