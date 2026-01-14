// "use client";

// import { Allotment } from "allotment";



// import { Navbar } from "./Navbar";
// import { Id } from "../../../../convex/_generated/dataModel";

// const MIN_SIDEBAR_WIDTH = 200;
// const MAX_SIDEBAR_WIDTH = 800;
// const DEFAULT_CONVERSATION_SIDEBAR_WIDTH = 400;
// const DEFAULT_MAIN_SIZE = 1000;



// export const ProjectIdLayout = ({
//   children,
//   projectId,
// }: {
//   children: React.ReactNode;
//   projectId: Id<"projects">;
// }) => {
//   return (
//     <div className="w-full h-screen flex flex-col">
//       <Navbar projectId={projectId} />
//       <div className="flex-1 flex overflow-hidden">
//         <Allotment
//           className="flex-1 h-full"
//           defaultSizes={[
//             DEFAULT_CONVERSATION_SIDEBAR_WIDTH,
//             DEFAULT_MAIN_SIZE,
//           ]}
//         >

//           <Allotment.Pane
//             snap
//             minSize={MIN_SIDEBAR_WIDTH}
//             maxSize={MAX_SIDEBAR_WIDTH}
//             preferredSize={DEFAULT_CONVERSATION_SIDEBAR_WIDTH}
//           >
//             <div>Conservative Chat</div>
//           </Allotment.Pane>
//           <Allotment.Pane>
//             {children}
//           </Allotment.Pane>
//         </Allotment>
//       </div>
//     </div>
//   );
// };







"use client";

import { Allotment } from "allotment";
import { Navbar } from "./Navbar";
import { Id } from "../../../../convex/_generated/dataModel";

const MIN_SIDEBAR_WIDTH = 200;
const MAX_SIDEBAR_WIDTH = 800;
const DEFAULT_CONVERSATION_SIDEBAR_WIDTH = 400;
const DEFAULT_MAIN_SIZE = 1000;

export const ProjectIdLayout = ({
  children,
  projectId,
}: {
  children: React.ReactNode;
  projectId: Id<"projects">;
}) => {
  return (
    <div className="w-full h-screen flex flex-col bg-black text-white">
      <Navbar projectId={projectId} />

      <div className="flex-1 flex overflow-hidden bg-black">
        <Allotment
          className="flex-1 h-full bg-black"
          defaultSizes={[
            DEFAULT_CONVERSATION_SIDEBAR_WIDTH,
            DEFAULT_MAIN_SIZE,
          ]}
        >
          <Allotment.Pane
            snap
            minSize={MIN_SIDEBAR_WIDTH}
            maxSize={MAX_SIDEBAR_WIDTH}
            preferredSize={DEFAULT_CONVERSATION_SIDEBAR_WIDTH}
          >
            <div className="h-full bg-black text-white p-4">
              Conservative Chat
            </div>
          </Allotment.Pane>

          <Allotment.Pane>
            <div className="h-full bg-black text-white">
              {children}
            </div>
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  );
};

