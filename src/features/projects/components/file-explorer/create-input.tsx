"use client"

import { ChevronRightIcon } from "lucide-react"
import { FileIcon, FolderIcon } from "@react-symbols/icons/utils"
import { useState } from "react"

export const CreateInput = ({
  type,
  level,
  onSubmit,
  onCancel
}: {
  type: "file" | "folder"
  level: number
  onSubmit: (name: string) => void
  onCancel: () => void
}) => {
  const [value, setValue] = useState("")

  const handleSubmit = () => {
    const trimmedValue = value.trim()
    if (trimmedValue) onSubmit(trimmedValue)
    else onCancel()
  }

  return (
    <div
      style={{ paddingLeft: `${level * 16}px` }}
      className="group flex items-center gap-2 px-2 py-1.5 rounded-md bg-zinc-900/60"
    >
      {type === "folder" && (
        <ChevronRightIcon className="w-4 h-4 shrink-0 text-zinc-500" />
      )}

      {type === "file" && (
        <FileIcon fileName={value} autoAssign className="w-4 h-4 shrink-0 opacity-80" />
      )}

      {type === "folder" && (
        <FolderIcon folderName={value} className="w-4 h-4 shrink-0 text-yellow-400" />
      )}

      <input
        autoFocus
        type="text"
        value={value}
        placeholder={type === "file" ? "new-file.tsx" : "new-folder"}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit()
          if (e.key === "Escape") onCancel()
        }}
        className="
          flex-1
          bg-transparent
          text-sm
          text-zinc-200
          outline-none
          placeholder:text-zinc-500
          focus:text-white
        "
      />
    </div>
  )
}
