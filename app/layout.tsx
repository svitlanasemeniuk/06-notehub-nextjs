import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { TanStackProvider } from "@/components/TanStackProvider/TanStackProvider";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Manager of your notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="wrapper">
        <TanStackProvider>
          <Header />
          <main className="mainContent">
            {children}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}