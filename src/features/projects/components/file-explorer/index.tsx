"use client"

import {
  ChevronRightIcon,
  CopyMinusIcon,
  FilePlusCornerIcon,
  FolderPlusIcon
} from "lucide-react"
import { useState } from "react"
import { Id } from "../../../../../convex/_generated/dataModel"
import { useProject } from "../hooks/use-projects"

export const FileExplorer = ({
  projectId
}: {
  projectId: Id<"projects">
}) => {
  const [isOpen, setIsOpen] = useState(true)

  const project = useProject(projectId)
  const files: string[] = []

  return (
    <div className="h-full w-full bg-zinc-950/95 backdrop-blur text-zinc-200 border-r border-zinc-800 overflow-y-auto">
      <div className="p-2">
        <div className="text-xs uppercase tracking-wider text-zinc-500 px-2 py-2">
          Explorer
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer select-none hover:bg-zinc-800/70 transition-colors"
        >
          <ChevronRightIcon
            className={`w-4 h-4 shrink-0 text-zinc-400 transition-transform duration-200 group-hover:text-white ${
              isOpen ? "rotate-90" : ""
            }`}
          />

          <p className="text-sm font-medium text-zinc-300 truncate group-hover:text-white">
            {project?.name ?? "Loading..."}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              setIsOpen(true)
            }}
            className="ml-auto p-1.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
          >
            <FilePlusCornerIcon className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              setIsOpen(true)
              // for creating the folder logic will follow
            }}
            className="ml-auto p-1.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
          >
            <FolderPlusIcon className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              setIsOpen(true)
              // Reset Collapse
            }}
            className="ml-auto p-1.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
          >
            <CopyMinusIcon className="w-4 h-4" />
          </button>
        </div>

        {isOpen && files.length === 0 && (
          <div className="ml-6 mt-2 text-xs text-zinc-500 italic">
            No files yet
          </div>
        )}
      </div>
    </div>
  )
}
