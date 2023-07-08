import Navbar from "@src/components/navbar/navbar";
import Provider from "@src/components/providers/provider";
import { raleway } from "@src/styles/fonts/raleway/raleway";
import { vazirFont } from "@src/styles/fonts/vazir/vazir";
import "@styles/globals.scss";
import { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: `Sponsvisa`,
  description: `A platform to share the companies that supports relocation!`,
};

const lang: `fa` | `en` = `en`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const font = lang === `fa` ? vazirFont : raleway;
  return (
    <html lang="en" className={font.className}>
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
