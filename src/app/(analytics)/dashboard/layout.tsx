import React from "react";

import Header from "@/components/header.component";
import Sidebar from "@/components/sidebar.component";
import { TooltipProvider } from "@/components/ui/tooltip";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <TooltipProvider>
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pr-14">
          <Header />
          {children}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default DashboardLayout;
