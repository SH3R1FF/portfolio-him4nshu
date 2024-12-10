import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import {Providers} from "./providers";
import Footer from "@/components/footer";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const metadata: Metadata = {
  title: "Him4nshu",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
          <script src="https://kit.fontawesome.com/160be924aa.js" crossOrigin="anonymous"></script>
        </head>
      <body className={prompt.className} >
        <Providers>
          <div className="bg-neutral-950 ">
            <Nav/>
            {children}
            <Footer/>
          </div>
        </Providers>
      </body>
    </html>
  );
}
