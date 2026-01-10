"use client";

export const AuthLoadingView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />

        {/* Optional text */}
        <p className="text-sm text-gray-600">
          Checking authentication…
        </p>
      </div>
    </div>
  );
};
