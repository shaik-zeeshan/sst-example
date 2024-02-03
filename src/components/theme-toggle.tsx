"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" data-testid="theme-toggle">
          <SunIcon
            className="visible h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:invisible dark:-rotate-90 dark:scale-0"
            data-testid="light-theme-icon"
          />
          <MoonIcon
            className="invisible absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:visible dark:rotate-0 dark:scale-100 "
            data-testid="dark-theme-icon"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          data-testid="light-theme"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          data-testid="dark-theme"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
