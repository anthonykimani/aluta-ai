import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { ThemeSwitcher } from "../theme-switcher";
import { ScrambleText } from "../scramble";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-2 w-full border border-gray-200 dark:border-gray-800">
      <SidebarTrigger />
      <ScrambleText
        text="aluta ai"
        className="whitespace-pre-wrap md:whitespace-nowrap"
      />
      <div className="flex items-center">
        <ThemeSwitcher />
        <div>
          {/* @ts-expect-error this ignores web component errors */}
          <appkit-button />
        </div>
      </div>
    </nav>
  );
};

export default Header;

