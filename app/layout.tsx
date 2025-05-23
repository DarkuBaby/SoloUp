import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { UserProvider } from "@/context/user-context";
import { MobileNav } from "@/components/mobile-nav";
import { LevelUpNotification } from "@/components/level-up-notification";
import UpdateNotification from "@/components/update-notification"; // <-- Add this

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Solo Up - An advance App</title>
        <meta
          name="description"
          content="Solo Up App inspired by Solo Leveling"
        />
      </head>
      <body className="bg-[#0a0e14]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <UserProvider>
            {children}
            <MobileNav />
            <LevelUpNotification />
            <UpdateNotification /> {/* <-- Add the popup here */}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
