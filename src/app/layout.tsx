
//Next.js
import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";

//Global Css
import "./globals.css";

//Theme Provider
import { ThemeProvider } from "next-themes";

//Clerk Provider
import {
  ClerkProvider,

} from '@clerk/nextjs'



//Fonts
const interFont = Inter({ subsets: ["latin"] });
const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ['500','700'],
  variable:"--font-barlow",
})

//MetaData
export const metadata: Metadata = {
  title: "GoShop",
  description: "Welcome to GoShop , your ultimate choice for online shoping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${interFont.className} ${barlowFont.variable}`}>
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
   </ClerkProvider>
  );
}
