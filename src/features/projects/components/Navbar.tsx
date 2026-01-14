// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { CloudCheckIcon } from "lucide-react";
// import { UserButton } from "@clerk/nextjs";
// import { Poppins } from "next/font/google";
// import { Id } from "../../../../convex/_generated/dataModel";
// import { useProject } from "./hooks/use-projects";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });


// export const Navbar = ({
//   projectId,
// }: {
//   projectId: Id<"projects">;
// }) => {

//     const project = useProject(projectId);
//   return (
//     <nav
//       className={`${font.className} flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-950`}
//     >
//       <div className="flex items-center gap-3 min-w-0">
//         <Link
//           href="/"
//           className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-neutral-900"
//         >
//           <Image src="/logo.png" alt="Logo" width={20} height={20} />
//           <span className="text-sm font-semibold text-neutral-100">
//             Centaur
//           </span>
//         </Link>

//         <div className="h-4 w-px bg-neutral-800" />

//         <span className="max-w-48 truncate text-sm font-medium text-neutral-200">
//           {project?.name || "Loading..."}
//         </span>

//         <CloudCheckIcon className="ml-1 h-4 w-4 text-neutral-400" />
//       </div>

//       <div className="flex items-center gap-2">
//         <UserButton />
//       </div>
//     </nav>
//   );
// };









"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CloudCheckIcon, LoaderIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { formatDistanceToNow } from "date-fns";

import { Id } from "../../../../convex/_generated/dataModel";
import { useProject, useRenameProject } from "./hooks/use-projects";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const Navbar = ({
  projectId,
}: {
  projectId: Id<"projects">;
}) => {
  const project = useProject(projectId);
  const renameProject = useRenameProject(projectId);

  const [isRenaming, setIsRenaming] = useState(false);
  const [name, setName] = useState("");

  const handleStartRename = () => {
    if (!project) return;
    setName(project.name);
    setIsRenaming(true);
  };

  const handleSubmit = () => {
    if (!project) return;
    setIsRenaming(false);

    const trimmedName = name.trim();
    if (!trimmedName || trimmedName === project.name) return;

    renameProject({ id: projectId, name: trimmedName });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "Escape") {
      setIsRenaming(false);
    }
  };

  return (
    <nav
      className={`${font.className} flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-950`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-neutral-900"
        >
          <Image src="/logo.png" alt="Logo" width={20} height={20} />
          <span className="text-sm font-semibold text-neutral-100">
            Polaris
          </span>
        </Link>

        <div className="h-4 w-px bg-neutral-800" />

        {isRenaming ? (
          <input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => e.currentTarget.select()}
            onBlur={handleSubmit}
            onKeyDown={handleKeyDown}
            className="max-w-48 truncate bg-neutral-900 text-sm font-medium text-neutral-100 outline-none ring-1 ring-neutral-700 focus:ring-neutral-500 rounded-md px-2 py-1"
          />
        ) : (
          <span
            onClick={handleStartRename}
            className="max-w-48 truncate cursor-pointer text-sm font-medium text-neutral-200 transition hover:text-white"
          >
            {project?.name ?? "Loading..."}
          </span>
        )}

        {project?.importStatus === "importing" ? (
          <LoaderIcon className="ml-1 h-4 w-4 animate-spin text-neutral-400" />
        ) : (
          <div className="group relative ml-1">
            <CloudCheckIcon className="h-4 w-4 text-neutral-400" />
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max -translate-x-1/2 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 opacity-0 transition group-hover:opacity-100">
              Saved{" "}
              {project?.updatedAt
                ? formatDistanceToNow(project.updatedAt, {
                    addSuffix: true,
                  })
                : "Loading..."}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <UserButton />
      </div>
    </nav>
  );
};
