import Provider from "@src/components/providers/provider";
import "@styles/globals.scss";

export const metadata = {
  title: "Sponsvisa",
  description: "A platform to share the companies that supports relocation!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
