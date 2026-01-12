






// "use client";

// import { useRouter } from "next/navigation";
// import { useState, useMemo } from "react";
// import { FaGithub } from "react-icons/fa";
// import { AlertCircleIcon, GlobeIcon, Loader2Icon } from "lucide-react";
// import { Doc } from "../../../../convex/_generated/dataModel";
// import { useProjects } from "./hooks/use-projects";

// interface ProjectsCommandDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// const getProjectIcon = (project: Doc<"projects">) => {
//   if (project.importStatus === "completed") {
//     return <FaGithub className="size-4 text-muted-foreground" />;
//   }

//   if (project.importStatus === "failed") {
//     return <AlertCircleIcon className="size-4 text-muted-foreground" />;
//   }

//   if (project.importStatus === "importing") {
//     return (
//       <Loader2Icon className="size-4 text-muted-foreground animate-spin" />
//     );
//   }

//   return <GlobeIcon className="size-4 text-muted-foreground" />;
// };

// export const ProjectsCommandDialog = ({
//   open,
//   onOpenChange,
// }: ProjectsCommandDialogProps) => {
//   const router = useRouter();
//   const projects = useProjects();
//   const [query, setQuery] = useState("");

//   const handleSelect = (projectId: string) => {
//     router.push(`/projects/${projectId}`);
//     onOpenChange(false);
//   };

//   const filteredProjects = useMemo(() => {
//     if (!projects) return [];
//     if (!query.trim()) return projects;

//     const q = query.toLowerCase();
//     return projects.filter((project) =>
//       project.name.toLowerCase().includes(q)
//     );
//   }, [projects, query]);

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-24">
//       <div className="w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-950 shadow-xl">
//         {/* Header */}
//         <div className="border-b border-neutral-800 px-4 py-3">
//           <h2 className="text-sm font-semibold text-neutral-200">
//             Search Projects
//           </h2>
//           <p className="mt-1 text-xs text-neutral-400">
//             Search and navigate to your projects
//           </p>
//         </div>

//         {/* Input */}
//         <div className="border-b border-neutral-800 px-4 py-2">
//           <input
//             autoFocus
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search projects..."
//             className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-500 outline-none"
//           />
//         </div>

//         {/* List */}
//         <div className="max-h-72 overflow-y-auto px-2 py-2">
//           {filteredProjects.length === 0 && (
//             <div className="px-3 py-6 text-center text-sm text-neutral-400">
//               No projects found.
//             </div>
//           )}

//           {filteredProjects.length > 0 && (
//             <ul className="space-y-1">
//               {filteredProjects.map((project) => (
//                 <li
//                   key={project._id}
//                   onClick={() => handleSelect(project._id)}
//                   className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-neutral-200 transition hover:bg-neutral-800"
//                 >
//                   {getProjectIcon(project)}
//                   <span className="truncate">{project.name}</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Footer */}
//         <div className="border-t border-neutral-800 px-4 py-2 text-right">
//           <button
//             onClick={() => onOpenChange(false)}
//             className="text-xs text-neutral-400 hover:text-white"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };






"use client";

import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { AlertCircleIcon, GlobeIcon, Loader2Icon } from "lucide-react";
import { Doc } from "../../../../convex/_generated/dataModel";
import { useProjects } from "./hooks/use-projects";

interface ProjectsCommandDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getProjectIcon = (project: Doc<"projects">) => {
  if (project.importStatus === "completed") {
    return <FaGithub className="size-4 text-muted-foreground" />;
  }

  if (project.importStatus === "failed") {
    return <AlertCircleIcon className="size-4 text-muted-foreground" />;
  }

  if (project.importStatus === "importing") {
    return (
      <Loader2Icon className="size-4 text-muted-foreground animate-spin" />
    );
  }

  return <GlobeIcon className="size-4 text-muted-foreground" />;
};

export const ProjectsCommandDialog = ({
  open,
  onOpenChange,
}: ProjectsCommandDialogProps) => {
  const router = useRouter();
  const projects = useProjects();
  const [query, setQuery] = useState("");

  const handleSelect = (projectId: string) => {
    router.push(`/projects/${projectId}`);
    onOpenChange(false);
  };

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (!query.trim()) return projects;
    const q = query.toLowerCase();
    return projects.filter((project) =>
      project.name.toLowerCase().includes(q)
    );
  }, [projects, query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-24">
      <div className="w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-950 shadow-xl">
        <div className="border-b border-neutral-800 px-4 py-3">
          <h2 className="text-sm font-semibold text-neutral-200">
            Search Projects
          </h2>
          <p className="mt-1 text-xs text-neutral-400">
            Search and navigate to your projects
          </p>
        </div>

        <div className="border-b border-neutral-800 px-4 py-2">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-500 outline-none"
          />
        </div>

        <div className="max-h-72 overflow-y-auto px-2 py-2">
          {filteredProjects.length === 0 && (
            <div className="px-3 py-6 text-center text-sm text-neutral-400">
              No projects found.
            </div>
          )}

          {filteredProjects.length > 0 && (
            <ul className="space-y-1">
              {filteredProjects.map((project) => (
                <li
                  key={project._id}
                  onClick={() => handleSelect(project._id)}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-neutral-200 transition hover:bg-neutral-800"
                >
                  {getProjectIcon(project)}
                  <span className="truncate">{project.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-neutral-800 px-4 py-2 text-right">
          <button
            onClick={() => onOpenChange(false)}
            className="text-xs text-neutral-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
