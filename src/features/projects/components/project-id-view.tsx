// "use client"

// import { useState } from "react";
// import { Id } from "../../../../convex/_generated/dataModel"


// const Tab = ({
//     label, 
//     isActive,
//     onClick
// }: {

//     label: string,
//     isActive: boolean,
//     onClick: () => void;
// }) => {
//     return (
//         <div onClick={onClick}>
//             <span>
//                 {label}
//             </span>
//         </div>
//     )
// }


// export const ProjectIdView = ({ 
//   projectId
// }: { 
//   projectId: Id<"projects">
// }) => {

//     const [activeView, setActiveView] = useState<"editor"  | "preview">("editor");

//     return (
//         <div>
//             <nav>
//                  <Tab 
//                label="Code"
//                isActive={activeView === "editor"}
//                onClick={() => setActiveView("editor")}
//                />
//                <Tab 
//                label="Preview"
//                isActive={activeView === "preview"}
//                onClick={() => setActiveView("preview")}
//                />
//             </nav>
//             <div className="flex-1 relative">
//                 <div >
//                     <div>Editor</div>
//                 </div>
//             </div>
//             <div className="flex-1 relative">
//                 <div >
//                     <div>Preview</div>
//                 </div>
//             </div>
//         </div>
//     )
// }









"use client"

import { useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel"
import { Allotment } from "allotment";
import { FaGithub } from "react-icons/fa";
import { FileExplorer} from "./file-explorer"

const MIN_SIDEBAR_WIDTH = 200;
const MAX_SIDEBAR_WIDTH = 800;
const DEFAULT_SIDEBAR_WIDTH = 350;
const DEFAULT_MAIN_SIZE = 1000;


const Tab = ({
  label,
  isActive,
  onClick
}: {
  label: string,
  isActive: boolean,
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        px-4 py-2 cursor-pointer select-none
        text-sm font-medium transition-all duration-200
        ${isActive 
          ? "text-white border-b-2 border-white" 
          : "text-gray-400 hover:text-gray-200"}
      `}
    >
      <span>{label}</span>
    </div>
  )
}

export const ProjectIdView = ({
  projectId
}: {
  projectId: Id<"projects">
}) => {
  const [activeView, setActiveView] = useState<"editor" | "preview">("editor");

  return (
    <div className="h-full flex flex-col bg-black text-white">
     <nav className="flex items-center gap-2 border-b border-gray-800 px-4">
  <Tab
    label="Code"
    isActive={activeView === "editor"}
    onClick={() => setActiveView("editor")}
  />
  <Tab
    label="Preview"
    isActive={activeView === "preview"}
    onClick={() => setActiveView("preview")}
  />

  <div className="ml-auto">
    <div className="
      flex items-center gap-2
      px-3 py-1.5
      rounded-md
      text-sm font-medium
      text-gray-300
      border border-gray-700
      hover:border-gray-500
      hover:text-white
      transition-all duration-200
      cursor-pointer
    ">
      <FaGithub className="text-base" />
      <span>Export</span>
    </div>
  </div>
</nav>


      <div className="flex-1 relative overflow-hidden">
        <div
          className={`
            absolute inset-0 transition-opacity duration-300
            ${activeView === "editor" ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          {/* <div className="h-full p-6 bg-black">Editor</div> */}
          <Allotment defaultSizes={[DEFAULT_SIDEBAR_WIDTH, DEFAULT_MAIN_SIZE]}>
            <Allotment.Pane
            snap
            minSize={MIN_SIDEBAR_WIDTH}
            maxSize={MAX_SIDEBAR_WIDTH}
            preferredSize={DEFAULT_SIDEBAR_WIDTH}
            >
              <FileExplorer projectId={projectId} />
            </Allotment.Pane>
            <Allotment.Pane>
              <p>Editor View</p>
            </Allotment.Pane>
          </Allotment>
        </div>

        <div
          className={`
            absolute inset-0 transition-opacity duration-300
            ${activeView === "preview" ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          <div className="h-full p-6 bg-black">Preview</div>
        </div>
      </div>
    </div>
  )
}
