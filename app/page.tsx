import { CONTACT, mapsUrl} from "./lib/contact";

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
    </>
  );
}