import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Abhinav Saxena - Full Stack AI Developer & Founding Engineer",
  description:
    "Portfolio of Abhinav Saxena, a Full Stack AI Developer, Founding Engineer, Forward Deployed Engineer and Product Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${syne.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
