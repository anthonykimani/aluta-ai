import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import ContextProvider from "@/context";
import { headers } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";

const geistVF = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-vf",
  weight: "100 900",
});

const geistMonoVF = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono-vf",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aluta AI",
  description: "aluta ai assistant",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = (await headers()).get("cookie");
  return (
    <html lang="en">
      <body
        className={`${geistVF.variable} ${geistMonoVF.variable} ${inter.variable} font-mono antialiased`}
      >
        <ContextProvider cookies={cookies}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <main className="w-full">
                <Header />
                {children}
              </main>
            </SidebarProvider>
          </ThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
