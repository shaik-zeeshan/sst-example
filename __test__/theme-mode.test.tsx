import { expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeToggle } from "@/components/theme-toggle";
import "@/app/globals.css";
import userEvent from "@testing-library/user-event";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

test("theme mode toggle", async () => {
  render(<ThemeToggle />, { wrapper: Wrapper });

  const toggle = screen.getByTestId("theme-toggle");
  await userEvent.click(toggle);

  const lightMenu = screen.getByTestId("light-theme");
  await userEvent.click(lightMenu);

  await waitFor(() => {
    expect(document.documentElement).toHaveClass("light");
  });

  await userEvent.click(toggle);
  const darkMenu = screen.getByTestId("dark-theme");
  await userEvent.click(darkMenu);

  await waitFor(() => {
    expect(document.documentElement).toHaveClass("dark");
  });
});
