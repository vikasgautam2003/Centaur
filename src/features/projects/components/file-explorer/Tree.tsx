import { useCreateFile, useCreateFolder, useDeleteFile, useFolderContents, useRenameFile } from "../hooks/use-files";

import { getItemPadding } from "./constants";
import { LoadingRow } from "./loading-row";
import { CreateInput } from "./create-input";
import { Doc, Id } from "../../../../../convex/_generated/dataModel";
import { useState } from "react";
import { TreeItemWrapper } from "./tree-item-wrapper";
import { FileIcon, FolderIcon } from "@react-symbols/icons/utils";


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
        const fileName = item.name;
        return (
            <TreeItemWrapper 
            item= {item}
            level={level}
            isActive={false}
            onClick={() => {}}
            onDoubleClick={() => {}}
            onRename={() => {
                setIsRenaming(true);
            }}
            onDelete={() => {
                deleteFile({ id: item._id})
            }}
           
            
            >
                <FileIcon fileName={item.name} autoAssign className="size-4" />
                <span>{fileName} </span>
            </TreeItemWrapper>
        )
    }


    return (
        <div>
            I am a folder!
        </div>
    )

}