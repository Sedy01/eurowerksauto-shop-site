import { CONTACT, mapsUrl } from "./lib/contact";


export default function Home() {
  return (
    <>
      <h1 style={{ fontSize: 40, marginBottom: 8}}>Eurowerks Automotive</h1>
      <p style={{ fontSize: 18, marginTop: 0}}>
        Your Home For European Auto Repair 🇩🇪🏎 | Service, Repair and Modifications 🏁
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
          <a
            href={CONTACT.phoneHref}
            style={{
              padding: "10px 14px",
              border: "1px solid #444",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Call {CONTACT.phoneNumber}
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 10px",
              border: "1px solid #444",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Get Directions
          </a>
        </div>

        <div style={{ marginTop: 28}}>
          <p style={{ marginBottom: 6}}>
            <strong>Address:</strong> {CONTACT.address}
          </p>
          <p style={{ marginTop: 0}}>
            <strong>Hours:</strong> {CONTACT.hours}
          </p>
        </div>

        <ReviewsBlock />
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
    <span aria-label={`${value} out of 5 stars`} style={{ letterSpacing: 1 }}>
      {stars}
    </span>
  );
}

function ReviewsBlock() {
  return (
    <section style={{ marginTop: 28 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>
        Reviews
      </h2>

      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ fontSize: 18, fontWeight: 800 }}>{RATING.toFixed(1)}</span>
        <StarRow value={RATING} />
        <span style={{ opacity: 0.85 }}>({REVIEW_COUNT} reviews)</span>
      </div>

      <div style={{ marginTop: 12 }}>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: "inline-block",
            padding: "10px 14px",
            border: "1px solid #444",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          Read reviews on Google
        </a>
      </div>
    </section>
  );
}