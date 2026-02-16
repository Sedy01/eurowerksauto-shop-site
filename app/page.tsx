import { CONTACT, mapsUrl } from "./lib/contact";
import styles from "./page.module.css"
import Image from "next/image";


export default function Home() {
  return (
    <>
      <section className={`${styles.fullBleed} ${styles.hero}`}>
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
            <a className={styles.btnPrimary} href={CONTACT.phoneHref}>
              Call {CONTACT.phoneNumber}
            </a>

            <a
              className={styles.btnSecondary}
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className={styles.sectionPanel}>
        <div className={styles.infoStrip}>
          <div className={`${styles.card} ${styles.glassGradient} ${styles.cardGlow}`}>
            <p className={styles.cardTitle}>Address</p>
            <p className={styles.cardValue}>{CONTACT.address}</p>
            <p className={styles.subtle}>
              <a
                className={styles.reviewBtn}
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
            </p>
          </div>

          <div className={`${styles.card} ${styles.glassGradient} ${styles.cardGlow}`}>
            <p className={styles.cardTitle}>Hours</p>
            <p className={styles.cardValue}>{CONTACT.hours}</p>
            <p className={styles.subtle}>Mon-Fri serivce. Weekends closed.</p>
          </div>

          <div className={`${styles.card} ${styles.glassGradient} ${styles.cardGlow}`}>
            <p className={styles.cardTitle}>Reviews</p>

            <div className={styles.reviewRow}>
              <span style={{ fontSize: 18, fontWeight: 900 }}>{RATING.toFixed(1)}</span>
              <StarRow value={RATING} />
              <span style={{ opacity: 0.85 }}>( {REVIEW_COUNT} reviews)</span>
            </div>

            <a
              className={styles.reviewBtn}
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read reviews on Google
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.section1} ${styles.sectionPanel} ${styles.glassGradient} ${styles.panelGlow}`}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Services</h2>
            <p className={styles.sectionDesc}>
              Routine maintenance, diagnostics, and repairs for your vehicle with 
              clear communication and no pressure.
            </p>
          </div>

          <div className={styles.sectionCtaRow}>
            <a className={styles.btnPrimary} href={CONTACT.phoneHref}>
              Call to book
            </a>
            <a className={styles.btnSecondary} href="/services">
              View all services
            </a>
          </div>
        </div>

        <div className={styles.grid3}>
          <div className={`${styles.card} ${styles.glassGradient} ${styles.featureItem} ${styles.cardGlow}`}>
            <h3 className={styles.featureTitle}>Maintenance</h3>
            <ul className={styles.featureList}>
              <li>Oil & filter changes</li>
              <li>Fluid checks</li>
              <li>Scheduled service</li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.glassGradient} ${styles.featureItem} ${styles.cardGlow}`}>
            <h3 className={styles.featureTitle}>Diagnostics</h3>
            <ul className={styles.featureList}>
              <li>Check engine light</li>
              <li>Noise / vibration issues</li>
              <li>Electrical troubleshooting</li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.glassGradient} ${styles.featureItem} ${styles.cardGlow}`}>
            <h3 className={styles.featureTitle}>Brakes & Tires</h3>
            <ul className={styles.featureList}>
              <li>Brake inspections</li>
              <li>Pads & rotors</li>
              <li>Tire install & replacement</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionPanel} ${styles.glassGradient} ${styles.panelGlow}`}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Gallery</h2>
            <p className={styles.sectionDesc}>
              A quick look at the shop and some of the work we do.
            </p>
          </div>

          <div className={styles.sectionCtaRow}>
            <a className={styles.btnSecondary} href="/gallery">
              View Gallery
            </a>
          </div>
        </div>

        <div className={styles.galleryRow}>
          <div className={`${styles.card} ${styles.glassGradient} ${styles.galleryCard} ${styles.cardGlow}`}>
            <h3 className={styles.sectionTitle}>Selected works</h3>

            <div className={styles.galleryGrid}>
              {[
                "/gallery/black-bmw.jpg",
                "/gallery/range-rover.jpg",
                "/gallery/silver-audi.jpg",
                "/gallery/silver-car.jpg",
                "/gallery/white-bmw.jpg",
                "/gallery/white-truck.jpg",
              ].map((src) => (
                <div key={src} className={styles.galleryItem}>
                  <Image 
                    src={src}
                    alt="Eurowerks Automotive work"
                    fill
                    className={styles.galleryImg}
                    sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw" 
                  />
                </div>
              ))}
            </div>

            <div className={styles.sectionCtaRow}>
              <a className={styles.btnSecondary} href="/gallery">
                View full gallery
              </a>
            </div>
          </div>

          <div className={`${styles.card} ${styles.glassGradient} ${styles.galleryCard} ${styles.cardGlow}`}>
            <h3 className={styles.sectionTitle}>Need an estimate?</h3>
            <p className={styles.sectionDesc} style={{ marginTop: 10 }}>
              Call or message us! We'll confirm what's needed and next steps.
            </p>
            <div className={styles.sectionCtaRow}>
              <a className={styles.btnPrimary} href={CONTACT.phoneHref}>
                Call now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.ctaStrip} ${styles.glassGradient} ${styles.cardGlow}`}>
        <div>
          <p className={styles.sectionTitle}>Ready to book?</p>
          <p className={styles.ctaStripSub}>
            Call us and we'll get you scheduled.
          </p>
        </div>

        <div className={styles.sectionCtaRow} style={{ marginTop: 0 }}>
          <a className={styles.btnPrimary} href={CONTACT.phoneHref}>
            Call {CONTACT.phoneNumber}
          </a>
          <a className={styles.btnSecondary} href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Get Directions
          </a>
        </div>
      </section>

    </>
  );
}

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=d49a4369f0d2dc0b&sxsrf=AE3TifOvwu5XntPbr7sivM_jKVMocwtizA:1765935835056&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_fg0GovNJV67plFsLPgCSBn3LhjU07mSxYPrqJ9sE_ZxjcNzimEAIAc99V6KgesSgFdtxXGZqc0_ksYqiOCSduUzzGmmUVS5nYbwQhDEKexOWJ0BQ%3D%3D&q=Eurowerks+Automotive+Reviews&sa=X&ved=2ahUKEwjS85PRv8ORAxXq5MkDHTUrN_wQ0bkNegQINhAD&biw=1600&bih=777&dpr=1";
const RATING = 4.4;
const REVIEW_COUNT = 20;

function StarRow( { value }: { value: number}) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return "★";
    if (i == full && half) return "★";
    return "☆";
  }).join("");

  return (
    <span aria-label={`${value} out of 5 stars`} className={styles.stars}>
      {stars}
    </span>
  );
}
