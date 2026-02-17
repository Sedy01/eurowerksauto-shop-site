import { CONTACT, mapsUrl } from "./lib/contact";
import styles from "./page.module.css";
import Image from "next/image";
import ui from "./styles/ui.module.css";
import PageShell from "./components/PageShell";
import QuickDock from "./components/QuickDock";


export default function Home() {
  return (
    <PageShell width="wide">
      <QuickDock label="Quick Info" heroSelector="#hero">
        <div className={ui.quickDockList}>
          <a className={ui.quickDockItemPrimary} href={CONTACT.phoneHref}>
            Call
          </a>
          <a
            className={ui.quickDockItem}
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
          </a>
        </div>
      </QuickDock>

      <section id="hero" className={`${styles.fullBleed} ${styles.hero}`}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className={styles.heroOverlay} />

        <div className={styles.heroInner}>
          <p className={styles.kicker}>European Auto Repair • Mississauga</p>

          <h1 className={styles.title}>Eurowerks Automotive</h1>

          <p className={styles.subtitle}>
            Your Home For European Auto Repair 🇩🇪🏎 | Service, Repair and Modifications 🏁
          </p>

          <div className={styles.ctaRow}>
            <a className={ui.btnPrimary} href={CONTACT.phoneHref}>
              Call {CONTACT.phoneNumber}
            </a>

            <a
              className={ui.btnSecondary}
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <div className={`${ui.container} ${ui.stack}`}>
        {/* Address / Hours / Reviews */}
        <div className={`${ui.sectionFrame} ${ui.sectionFrameWide}`}>
          <section className={`${ui.sectionPanel} ${ui.glassGradient} ${ui.panelGlow}`}>
            <div className={styles.infoStrip}>
              <div className={`${ui.card} ${ui.glassGradient} ${ui.cardGlow}`}>
                <p className={ui.cardTitle}>Address</p>
                <p className={ui.cardValue}>{CONTACT.address}</p>
                <p className={ui.subtle}>
                  <a
                    className={ui.reviewBtn}
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Maps
                  </a>
                </p>
              </div>

              <div className={`${ui.card} ${ui.glassGradient} ${ui.cardGlow}`}>
                <p className={ui.cardTitle}>Hours</p>
                <p className={ui.cardValue}>{CONTACT.hours}</p>
                <p className={ui.subtle}>Mon-Fri service. Weekends closed.</p>
              </div>

              <div className={`${ui.card} ${ui.glassGradient} ${ui.cardGlow}`}>
                <p className={ui.cardTitle}>Reviews</p>

                <div className={ui.reviewRow}>
                  <span style={{ fontSize: 18, fontWeight: 900 }}>
                    {RATING.toFixed(1)}
                  </span>
                  <StarRow value={RATING} />
                  <span style={{ opacity: 0.85 }}>( {REVIEW_COUNT} reviews)</span>
                </div>

                <a
                  className={ui.reviewBtn}
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read reviews on Google
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Services */}
        <div className={`${ui.sectionFrame} ${ui.sectionFrameWide}`}>
          <section className={`${ui.sectionPanel} ${ui.glassGradient} ${ui.panelGlow}`}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={ui.sectionTitle}>Services</h2>
                <p className={ui.sectionDesc}>
                  Routine maintenance, diagnostics, and repairs for your vehicle with clear
                  communication and no pressure.
                </p>
              </div>

              <div className={ui.sectionCtaRow}>
                <a className={ui.btnPrimary} href={CONTACT.phoneHref}>
                  Call to book
                </a>
                <a className={ui.btnSecondary} href="/services">
                  View all services
                </a>
              </div>
            </div>

            <div className={ui.grid3}>
              <div className={`${ui.card} ${ui.glassGradient} ${styles.featureItem} ${ui.cardGlow}`}>
                <h3 className={styles.featureTitle}>Maintenance</h3>
                <ul className={styles.featureList}>
                  <li>Oil & filter changes</li>
                  <li>Fluid checks</li>
                  <li>Scheduled service</li>
                </ul>
              </div>

              <div className={`${ui.card} ${ui.glassGradient} ${styles.featureItem} ${ui.cardGlow}`}>
                <h3 className={styles.featureTitle}>Diagnostics</h3>
                <ul className={styles.featureList}>
                  <li>Check engine light</li>
                  <li>Noise / vibration issues</li>
                  <li>Electrical troubleshooting</li>
                </ul>
              </div>

              <div className={`${ui.card} ${ui.glassGradient} ${styles.featureItem} ${ui.cardGlow}`}>
                <h3 className={styles.featureTitle}>Brakes & Tires</h3>
                <ul className={styles.featureList}>
                  <li>Brake inspections</li>
                  <li>Pads & rotors</li>
                  <li>Tire install & replacement</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Gallery */}
        <div className={`${ui.sectionFrame} ${ui.sectionFrameWide}`}>
          <section className={`${ui.sectionPanel} ${ui.glassGradient} ${ui.panelGlow}`}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={ui.sectionTitle}>Gallery</h2>
                <p className={ui.sectionDesc}>
                  A quick look at the shop and some of the work we do.
                </p>
              </div>

              <div className={ui.sectionCtaRow}>
                <a className={ui.btnSecondary} href="/gallery">
                  View Gallery
                </a>
              </div>
            </div>

            <div className={ui.galleryRow}>
              <div className={`${ui.card} ${ui.glassGradient} ${styles.galleryCard} ${ui.cardGlow}`}>
                <h3 className={ui.sectionTitle}>Selected works</h3>

                <div className={ui.galleryGrid}>
                  {[
                    "/gallery/black-bmw.jpg",
                    "/gallery/range-rover.jpg",
                    "/gallery/silver-audi.jpg",
                    "/gallery/silver-car.jpg",
                    "/gallery/white-bmw.jpg",
                    "/gallery/white-truck.jpg",
                  ].map((src) => (
                    <div key={src} className={ui.galleryItem}>
                      <Image
                        src={src}
                        alt="Eurowerks Automotive work"
                        fill
                        className={ui.galleryImg}
                        sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>

                <div className={ui.sectionCtaRow}>
                  <a className={ui.btnSecondary} href="/gallery">
                    View full gallery
                  </a>
                </div>
              </div>

              <div className={`${ui.card} ${ui.glassGradient} ${styles.galleryCard} ${ui.cardGlow}`}>
                <h3 className={ui.sectionTitle}>Need an estimate?</h3>
                <p className={ui.sectionDesc} style={{ marginTop: 10 }}>
                  Call or message us! We&apos;ll confirm what&apos;s needed and next steps.
                </p>
                <div className={ui.sectionCtaRow}>
                  <a className={ui.btnPrimary} href={CONTACT.phoneHref}>
                    Call now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <section className={`${ui.ctaStrip} ${ui.glassGradient} ${ui.cardGlow}`}>
          <div>
            <p className={ui.sectionTitle}>Ready to book?</p>
            <p className={ui.ctaStripSub}>Call us and we&apos;ll get you scheduled.</p>
          </div>

          <div className={ui.sectionCtaRow} style={{ marginTop: 0 }}>
            <a className={ui.btnPrimary} href={CONTACT.phoneHref}>
              Call {CONTACT.phoneNumber}
            </a>
            <a
              className={ui.btnSecondary}
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=d49a4369f0d2dc0b&sxsrf=AE3TifOvwu5XntPbr7sivM_jKVMocwtizA:1765935835056&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_fg0GovNJV67plFsLPgCSBn3LhjU07mSxYPrqJ9sE_ZxjcNzimEAIAc99V6KgesSgFdtxXGZqc0_ksYqiOCSduUzzGmmUVS5nYbwQhDEKexOWJ0BQ%3D%3D&q=Eurowerks+Automotive+Reviews&sa=X&ved=2ahUKEwjS85PRv8ORAxXq5MkDHTUrN_wQ0bkNegQINhAD&biw=1600&bih=777&dpr=1";

const RATING = 4.4;
const REVIEW_COUNT = 20;

function StarRow({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;

  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return "★";
    if (i === full && half) return "★";
    return "☆";
  }).join("");

  return (
    <span aria-label={`${value} out of 5 stars`} className={ui.stars}>
      {stars}
    </span>
  );
}
