// "use client"

// import { useMutation, useQuery } from "convex/react"
// import { api } from "../../convex/_generated/api"

// const X = () => {
//   const projects = useQuery(api.project.get)
//   const createProject = useMutation(api.project.create)

//   if (!projects) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div>
//       {/* Action bar */}
//       <div style={{ marginBottom: "16px" }}>
//         <button
//           onClick={() =>
//             createProject({
//               name: "New Project",
//             })
//           }
//         >
//           Add New
//         </button>
//       </div>

//       {/* Empty state */}
//       {projects.length === 0 && (
//         <div>No projects found</div>
//       )}

//       {/* List */}
//       {projects.map((project) => (
//         <div key={project._id} style={{ marginBottom: "12px" }}>
//           <p><strong>Name:</strong> {project.name}</p>
//           <p><strong>Status:</strong> {project.importStatus}</p>
//           <p><strong>Owner:</strong> {project.ownerId}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default X





"use client"

import { ProjectsView } from "../features/projects/components/project-view"

const HomePage = () => {

  return <ProjectsView />
}


export default HomePage