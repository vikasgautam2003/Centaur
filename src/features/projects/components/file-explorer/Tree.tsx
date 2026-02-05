import { useCreateFile, useCreateFolder, useDeleteFile, useFolderContents, useRenameFile } from "../hooks/use-files";

import { getItemPadding } from "./constants";
import { LoadingRow } from "./loading-row";
import { CreateInput } from "./create-input";
import { Doc, Id } from "../../../../../convex/_generated/dataModel";
import { useState } from "react";


export const Tree = ({

    item,
    level = 0,
    projectId,
}: {
    item: Doc<"files">;
    level?: number;
    projectId: Id<"projects">;

}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isRenamingm, setIsRenaming] = useState(false);
    const [creating, setCreating] = useState<"file" | "folder" | null>(null);

    const renameFile = useRenameFile();
    const deleteFile = useDeleteFile();
    const createFile = useCreateFile();
    const createFolder = useCreateFolder();

    const folderContents = useFolderContents({
        projectId,
        parentId: item._id,
        enabled: item.type === "folder" && isOpen,
    });

    if(item.type === 'file')
    {
        return (
            <div>
                I am a file!
            </div>
        )
    }


    return (
        <div>
            I am a folder!
        </div>
    )

}