








// import { useProjectsPartial } from "./hooks/use-projects";
// import { Doc } from "../../../../convex/_generated/dataModel";
// import Link from "next/link";
// import {  ArrowRight, AlertCircleIcon, ArrowRightIcon, GlobeIcon, Loader2Icon} from "lucide-react";
// import { formatDistanceToNow } from "date-fns";
// import {FaGithub} from "react-icons/fa";

// interface ProjectsListProps {
//     onViewAll: () => void;
// }

// const formalTimeStamp = (timestamp: number) => {
//     return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
// }




// const getProjectIcon = (project: Doc<"projects">) => {
//   if (project.importStatus === "completed") {
//     return <FaGithub className="size-4 text-muted-foreground" />
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
// }



// const ContinueCard = ({
//   data,
// }: {
//   data: Doc<"projects">;
// }) => {
//   return (
//     <div className="mb-8 rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6">
//       <span className="text-xs uppercase tracking-wide text-neutral-400">
//         Last updated
//       </span>

//       <Link
//         href={`/projects/${data._id}`}
//         className="group mt-4 block rounded-2xl border border-neutral-800 bg-neutral-950 px-5 py-4 transition hover:border-neutral-600 hover:bg-neutral-900"
//       >
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-4 min-w-0">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800">
//               {getProjectIcon(data)}
//             </div>

//             <div className="flex flex-col min-w-0">
//               <span className="truncate text-base font-semibold text-neutral-50 group-hover:text-white">
//                 {data.name}
//               </span>
//               <span className="text-xs text-neutral-500">
//                 {formalTimeStamp(data.updatedAt)}
//               </span>
//             </div>
//           </div>

//           <ArrowRightIcon className="h-4 w-4 text-neutral-400 group-hover:text-white" />
//         </div>
//       </Link>
//     </div>
//   );
// };





// const ProjectItem = ({
//   data,
// }: {
//   data: Doc<"projects">;
// }) => {
//   return (
//     <li className="list-none">
//       <Link href={`/projects/${data._id}`} className="group block">
//         <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-5 py-4 transition hover:border-neutral-700 hover:bg-neutral-900">
          
//           <div className="flex items-center gap-4 min-w-0">
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-800">
//               {getProjectIcon(data)}
//             </div>

//             <div className="flex flex-col min-w-0">
//               <span className="truncate font-medium text-neutral-50 group-hover:text-white">
//                 {data.name}
//               </span>

//               {data.importStatus && (
//                 <span className="text-xs text-neutral-500">
//                   {data.importStatus}
//                 </span>
//               )}
//             </div>
//           </div>

//           <span className="shrink-0 text-xs text-neutral-400">
//             {formalTimeStamp(data.updatedAt)}
//           </span>
//         </div>
//       </Link>
//     </li>
//   );
// };



// export const ProjectsList = ({
//     onViewAll,
// }: ProjectsListProps) => {

//     const projects = useProjectsPartial(6);

//     if (projects == undefined) {
//         return (
//           <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-sm text-neutral-400">
//             Loading projects…
//           </div>
//         );
//     }


//     const [mostRecent, ...rest] = projects;

//     return (
//         <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
//             {mostRecent ? <ContinueCard data={mostRecent} /> : null}
//             {rest.length > 0 && (
//                 <div className="space-y-4">
//                     <div className="flex items-center justify-between">
//                         <span className="text-sm font-semibold tracking-wide text-neutral-200">
//                           Projects
//                         </span>
//                         <button
//                           onClick={onViewAll}
//                           className="flex items-center gap-1 rounded-lg px-2 py-1 text-sm text-neutral-400 transition hover:text-white"
//                         >
//                           <span>View all</span>
//                           <ArrowRight className="h-4 w-4" />
//                         </button>
//                     </div>

//                     <ul className="space-y-3">
//                         {rest.map((project) => (
//                             <ProjectItem
//                               key={project._id}
//                               data={project}
//                             />
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     )
// }














import { useProjectsPartial } from "./hooks/use-projects";
import { Doc } from "../../../../convex/_generated/dataModel";
import Link from "next/link";
import {
  ArrowRight,
  AlertCircleIcon,
  ArrowRightIcon,
  GlobeIcon,
  Loader2Icon,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { FaGithub } from "react-icons/fa";

interface ProjectsListProps {
  onViewAll: () => void;
}

const formalTimeStamp = (timestamp: number) => {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};

const getProjectIcon = (project: Doc<"projects">) => {
  if (project.importStatus === "completed") {
    return <FaGithub className="size-4 text-neutral-300" />;
  }

  if (project.importStatus === "failed") {
    return <AlertCircleIcon className="size-4 text-red-400" />;
  }

  if (project.importStatus === "importing") {
    return (
      <Loader2Icon className="size-4 animate-spin text-neutral-400" />
    );
  }

  return <GlobeIcon className="size-4 text-neutral-400" />;
};

const ContinueCard = ({ data }: { data: Doc<"projects"> }) => {
  return (
    <div className="mb-8 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-sm">
      <span className="text-xs uppercase tracking-widest text-neutral-400">
        Last updated
      </span>

      <Link
        href={`/projects/${data._id}`}
        className="group mt-4 block rounded-2xl border border-neutral-800 bg-neutral-950 px-5 py-4 transition-all hover:border-neutral-600 hover:bg-neutral-900 hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800">
              {getProjectIcon(data)}
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="truncate text-base font-semibold text-neutral-50 group-hover:text-white">
                {data.name}
              </span>
              <span className="text-xs text-neutral-500">
                {formalTimeStamp(data.updatedAt)}
              </span>
            </div>
          </div>

          <ArrowRightIcon className="h-4 w-4 text-neutral-400 transition group-hover:text-white" />
        </div>
      </Link>
    </div>
  );
};

const ProjectItem = ({ data }: { data: Doc<"projects"> }) => {
  return (
    <li className="list-none">
      <Link href={`/projects/${data._id}`} className="group block">
        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/70 px-5 py-4 transition-all hover:border-neutral-700 hover:bg-neutral-900 hover:shadow-sm">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-800">
              {getProjectIcon(data)}
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="truncate font-medium text-neutral-50 group-hover:text-white">
                {data.name}
              </span>

              {data.importStatus && (
                <span className="text-xs text-neutral-500">
                  {data.importStatus}
                </span>
              )}
            </div>
          </div>

          <span className="shrink-0 text-xs text-neutral-400">
            {formalTimeStamp(data.updatedAt)}
          </span>
        </div>
      </Link>
    </li>
  );
};

export const ProjectsList = ({ onViewAll }: ProjectsListProps) => {
  const projects = useProjectsPartial(6);

  if (projects == undefined) {
    return (
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-sm text-neutral-400">
        Loading projects…
      </div>
    );
  }

const [mostRecent, ...rest] = projects;

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-sm">
      {mostRecent ? <ContinueCard data={mostRecent} /> : null}

      {rest.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold tracking-wide text-neutral-200">
              Projects
            </span>
            <button
              onClick={onViewAll}
              className="flex items-center gap-1 rounded-lg px-2 py-1 text-sm text-neutral-400 transition hover:text-white"
            >
              <span>View all</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <ul className="space-y-3">
            {rest.map((project) => (
              <ProjectItem key={project._id} data={project} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};






