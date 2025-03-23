import React from "react";

import Button from "../common/Button";

export default function Header() {
    return (
      <header className="flex items-center justify-between bg-secondary-900 p-2 px-6">
        <img src="./designs/logo.png" alt="Logo" className="h-20" />
        <div className="flex items-center space-x-4 pr-4">
          {/* TODO: check if isOnboardingCompleted for user, if yes -> link to sitter / owner home instead */}
          <Button text="Get Started" onClick={() => {}} href="/onboarding" />
          <Button text="Log In" onClick={() => {}} href="/onboarding" />
        </div>
      </header>
    );
}
