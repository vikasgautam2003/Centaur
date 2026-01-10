// "use client";

// import { ReactNode } from "react";
// import {
//   Authenticated,
//   AuthLoading,
//   ConvexReactClient,
//   Unauthenticated,
// } from "convex/react";
// import { ConvexProviderWithClerk } from "convex/react-clerk";
// import {
//   ClerkProvider,
//   useAuth,
//   SignInButton,
//   SignUpButton,
// } from "@clerk/nextjs";

// const convex = new ConvexReactClient(
//   process.env.NEXT_PUBLIC_CONVEX_URL!
// );

// export const Providers = ({ children }: { children: ReactNode }) => {
//   return (
//     <ClerkProvider>
//       <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
//         {/* While auth state is loading */}
//         <AuthLoading>
//           <div>Checking authentication...</div>
//         </AuthLoading>

//         {/* When user is NOT authenticated */}
//         <Unauthenticated>
//           <div style={{ padding: "2rem" }}>
//             <p>You are not authenticated.</p>

//             <div style={{ marginTop: "1rem" }}>
//               <SignInButton mode="modal">
//                 <button>Sign In</button>
//               </SignInButton>

//               <SignUpButton mode="modal">
//                 <button style={{ marginLeft: "8px" }}>
//                   Sign Up
//                 </button>
//               </SignUpButton>
//             </div>
//           </div>
//         </Unauthenticated>

//         {/* When user IS authenticated */}
//         <Authenticated>
//           {children}
//         </Authenticated>
//       </ConvexProviderWithClerk>
//     </ClerkProvider>
//   );
// };








"use client";

import { ReactNode } from "react";
import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs";

import { UnauthenticatedView } from "../features/auth/unauthenticated-view";
import { AuthLoadingView } from "../features/auth/auth-loading-view";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
);

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {/* Auth state loading */}
        <AuthLoading>
          <AuthLoadingView />
        </AuthLoading>

        {/* Not signed in */}
        <Unauthenticated>
          <UnauthenticatedView />
        </Unauthenticated>

        {/* Signed in */}
        <Authenticated>
          {children}
        </Authenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
