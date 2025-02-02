import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-2 w-full">
      <SidebarTrigger />

      <div>
        {/* @ts-expect-error this ignores web component errors */}
        <appkit-button />
      </div>
    </nav>
  );
};

export default Header;
