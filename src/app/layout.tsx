import Navbar from "@src/components/navbar/navbar";
import Provider from "@src/components/providers/provider";
import "@styles/globals.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sponsvisa`,
  description: `A platform to share the companies that supports relocation!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
