import { getItemPadding } from "./constants";

export const LoadingRow = ({
  className = "",
  level = 0,
}: {
  className?: string;
  level?: number;
}) => {
  return (
    <div
      className={`h-6 flex items-center text-gray-400 ${className}`}
      style={{ paddingLeft: getItemPadding(level, true) }}
    >
      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};
