// import { getItemPadding } from "./constants";
// import { Doc } from "../../../../../convex/_generated/dataModel";
// import React from "react";


// export const TreeItemWrapper = ({
//     item, 
//     children, 
//     level, 
//     isActive, 
//     onclick,
//     onDoubleClick,
//     onRename,
//     onDelete,
//     onCreateFile,
//     onCreateFolder
// }: {

//     item: Doc<"files">;
//     children: React.ReactNode;
//     level: number;
//     isActive?: boolean;
//     onclick?: () => void;
//     onDoubleClick?: () => void;
//     onRename?: () => void;
//     onDelete?: () => void;
//     onCreateFile?: () => void;
//     onCreateFolder?: () => void;

// }) => {

//     return (

//     )
// }











import React, { useState } from "react";
import { getItemPadding } from "./constants";
import { Doc } from "../../../../../convex/_generated/dataModel";

export const TreeItemWrapper = ({
  item,
  children,
  level,
  isActive = false,
  onClick,
  onDoubleClick,
  onRename,
  onDelete,
  onCreateFile,
  onCreateFolder,
}: {
  item: Doc<"files">;
  children: React.ReactNode;
  level: number;
  isActive?: boolean;
  onClick?: () => void;
  onDoubleClick?: () => void;
  onRename?: () => void;
  onDelete?: () => void;
  onCreateFile?: () => void;
  onCreateFolder?: () => void;
}) => {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);

  const openMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY });
  };

  const closeMenu = () => setMenu(null);

  return (
    <>
      {/* Tree row */}
      <button
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onContextMenu={openMenu}
        onKeyDown={(e) => {
          if (e.key === "Enter") onRename?.();
        }}
        style={{
          paddingLeft: getItemPadding(level, item.type === "file"),
          height: 22,
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: isActive ? "#2a2a2a" : "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        {children}
      </button>

      {/* Right click menu */}
      {menu && (
        <div
          style={{
            position: "fixed",
            top: menu.y,
            left: menu.x,
            background: "#1e1e1e",
            border: "1px solid #333",
            borderRadius: 6,
            padding: 6,
            minWidth: 160,
            zIndex: 9999,
          }}
          onMouseLeave={closeMenu}
        >
          {item.type === "folder" && (
            <>
              <MenuItem onClick={() => { onCreateFile?.(); closeMenu(); }}>
                New File
              </MenuItem>
              <MenuItem onClick={() => { onCreateFolder?.(); closeMenu(); }}>
                New Folder
              </MenuItem>
              <Divider />
            </>
          )}

          <MenuItem onClick={() => { onRename?.(); closeMenu(); }}>
            Rename
          </MenuItem>

          <MenuItem danger onClick={() => { onDelete?.(); closeMenu(); }}>
            Delete
          </MenuItem>
        </div>
      )}
    </>
  );
};


/* ---------- small helpers ---------- */

const MenuItem = ({
  children,
  onClick,
  danger = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}) => (
  <div
    onClick={onClick}
    style={{
      padding: "6px 10px",
      cursor: "pointer",
      borderRadius: 4,
      color: danger ? "#ff6b6b" : "#ddd",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
  >
    {children}
  </div>
);

const Divider = () => (
  <div style={{ height: 1, background: "#333", margin: "4px 0" }} />
);
