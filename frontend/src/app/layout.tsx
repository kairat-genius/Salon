import { Header } from "@/widgets/Header";
import "./globals.css";
import {ReactNode} from "react";

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {

  return (
    <html lang="en">
    <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
