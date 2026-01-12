







"use client"

import { Poppins } from "next/font/google"
import { ProjectsList } from "./projects-lists"
import { useCreateProject } from "./hooks/use-projects"
import {
  adjectives,
  colors,
  animals,
  uniqueNamesGenerator,
} from "unique-names-generator"
import { useState } from "react"
import { ProjectsCommandDialog } from "./projects-command-dialog"

const fonts = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
})

export const ProjectsView = () => {
  const creatProject = useCreateProject()
  const [commandOpen, setCommandOpen] = useState(false)

  return (
    <>
      <ProjectsCommandDialog
        open={commandOpen}
        onOpenChange={setCommandOpen}
      />

      <div className={`${fonts.className} min-h-screen bg-neutral-950 text-neutral-100`}>
        <div className="mx-auto max-w-6xl px-6 py-10 space-y-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold tracking-tight">
              Centaur
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              className="group flex h-28 flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-left transition hover:border-neutral-600 hover:bg-neutral-900 focus:outline-none"
              onClick={() => {
                const projectName = uniqueNamesGenerator({
                  dictionaries: [adjectives, colors, animals],
                  separator: "-",
                  length: 3,
                })
                creatProject({ name: projectName })
              }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-800 text-neutral-200">
                +
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-neutral-100">
                  New
                </span>
                <span className="rounded-md border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
                  ⌘J
                </span>
              </div>
            </button>

            <button
              className="group flex h-28 flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-left transition hover:border-neutral-600 hover:bg-neutral-900 focus:outline-none"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-800 text-neutral-200">
                ⎇
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-neutral-100">
                  Import
                </span>
                <span className="rounded-md border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
                  ⌘I
                </span>
              </div>
            </button>
          </div>

          <div className="max-w-3xl space-y-6">
            <ProjectsList onViewAll={() => setCommandOpen(true)} />
          </div>
        </div>
      </div>
    </>
  )
}
