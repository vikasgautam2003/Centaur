"use client";

import { ShieldAlertIcon } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export const UnauthenticatedView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col items-center p-6 text-center">
          {/* Icon */}
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
            <ShieldAlertIcon className="h-6 w-6" />
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900">
            Unauthorized Access
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-600">
            You must be signed in to access this resource.
          </p>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <SignInButton mode="modal">
              <button
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                Sign in
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button
                className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                Sign up
              </button>
            </SignUpButton>
          </div>
        </div>
      </div>
    </div>
  );
};
