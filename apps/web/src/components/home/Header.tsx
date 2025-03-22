import React from "react";

import Button from "../common/Button";

export default function Header() {
    return (
      <header className="flex items-center justify-between bg-secondary-900 p-2 px-6">
        <img src="./designs/logo.png" alt="Logo" className="h-20" />
        <div className="flex items-center space-x-4 pr-4">
          <Button text="Get Started" onClick={() => {}} />
          <Button text="Log In" onClick={() => {}} />
        </div>
      </header>
    );
}
