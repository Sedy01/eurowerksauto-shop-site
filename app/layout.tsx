import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./layout.module.css";
import { CONTACT, mapsUrl } from "./lib/contact";
import QuickDock from "./components/QuickDock";
import ui from "./styles/ui.module.css";


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

        <QuickDock label="Quick Info" heroSelector="#hero">
          <div className={`${ui.sectionPanel} ${ui.glassGradient} ${ui.cardGlow}`}>
            <div className={ui.sectionCtaRow} style={{ marginTop: 0 }}>
              <a className={ui.btnPrimary} href={CONTACT.phoneHref}>
                Call
              </a>
              <a
                className={ui.btnSecondary}
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
            </div>
          </div>
        </QuickDock>

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
  );
}
