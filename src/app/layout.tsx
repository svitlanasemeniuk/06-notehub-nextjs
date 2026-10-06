import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { TanStackProvider } from "../components/TanStackProvider/TanStackProvider";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Менеджер твоїх нотаток",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {/* Усі наші сторінки (Home, Notes) будуть рендеритися замість {children} */}
          {children} 
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}