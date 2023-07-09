import Navbar from "@src/components/navbar/navbar";
import Provider from "@src/components/providers/provider";
import { vazirmatn } from "@src/styles/fonts/vazirmatn/vazirmatn";
import PWAMetaTags from "@src/utils/pwaMetaTags";
import "@styles/globals.scss";
import { Metadata } from "next";

const TITLE = `Sponsvisa`;
const DESCRIPTION = `A platform to share the companies that supports relocation!`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={vazirmatn.className}>
      <head>
        <PWAMetaTags title={TITLE} description={DESCRIPTION} />
      </head>
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
