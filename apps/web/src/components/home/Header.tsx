import React from "react";

import Button from "../common/Button";
import { useQuery } from "convex/react";
import { api } from "@packages/backend/convex/_generated/api";
import { useAuth } from "@clerk/clerk-react";

export default function Header() {
  const { isSignedIn } = useAuth();
  
  const isOnboardingCompleted = useQuery(api.queries.users.getIsOnboardingCompleted.getIsOnboardingCompleted, isSignedIn ? {} : "skip");
  const role = useQuery(api.queries.users.getRole.getRole);

  return (
    <header className="flex items-center justify-between bg-secondary-900 p-2 px-6">
      <img src="./designs/logo.png" alt="Logo" className="h-20" />
      <div className="flex items-center space-x-4 pr-4">
        <Button text="Get Started" onClick={() => { }} href={isOnboardingCompleted ? `/${role}` : "/onboarding"} />
        <Button text="Log In" onClick={() => { }} href={isOnboardingCompleted ? `/${role}` : "/onboarding"} />
      </div>
    </header>
  );
}
