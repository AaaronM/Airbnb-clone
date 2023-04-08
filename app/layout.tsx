import Navbar from "./components/Navbar/Navbar";
// __________NAVBAR__________
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone 2023",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
