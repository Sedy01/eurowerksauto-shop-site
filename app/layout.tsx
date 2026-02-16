import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CONTACT } from "./lib/contact";
import Link from "next/link";
import styles from "./layout.module.css";


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
  description: "Your Home For European Auto Repair 🇩🇪🏎 | Service, Repair and Modifications 🏁",
  themeColor: "#0b0b0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <Link href="/" className={`${styles.link} ${styles.brand}`}>
              Eurowerks Automotive
            </Link>

            <Link href="/services" className={styles.link}>
              Services
            </Link>
            <Link href="/about" className={styles.link}>
              About
            </Link>
            <Link href="/gallery" className={styles.link}>
              Gallery
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </nav>
        </header>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <small>
              © {new Date().getFullYear()} Eurowerks Automotive •{" "}
              <a className={styles.footerLink} href={CONTACT.phoneHref}>
                Call {CONTACT.phoneNumber}
              </a>
            </small>
          </div>
        </footer>
      </body>
    </html>
  )
}