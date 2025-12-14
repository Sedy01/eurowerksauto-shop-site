import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CONTACT } from "./lib/contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eurowerks Automotive | Mississauga Auto Repair",
  description: "Your Home For European Auto Repair 🇩🇪🏎 | Service, Repair and Modifications 🏁"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header style={{ padding: "16px 32px", borderBottom: "1px solid #333" }}>
          <nav style={{display: "flex", gap: 16, alignItems:"center" }}>
            <a href="/" style={{ fontWeight: 700, textDecoration: "none" }}>
              Eurowerks Automotive
            </a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main style={{ padding: 32}}>{children}</main>

        <footer style={{ padding: "16px 32px", borderTop: "1px solid #333" }}>
          <small>
            © {new Date().getFullYear()} Eurowerks Automotive •{" "}
            <a href={CONTACT.phoneHref}>Call {CONTACT.phoneNumber}</a>
          </small>
        </footer>
      </body>
    </html>
  );
}
