import { CONTACT, mapsUrl } from "../lib/contact";

const services = [
    {
        title: "Maintenance",
        items: ["Routine maintenace", "Scheduled service", "Fluid checks & top-ups"],
    },
    {
        title: "Oil Changes",
        items: ["Oil & filter changes", "Service reminders (as needed)"],
    },
    {
        title: "Brakes",
        items: ["Brake inspections", "Pads & rotors", "Brake fluid (as needed)"],
    },
    {
        title: "Tires",
        items: ["Tire installment & replacement", "Seasonal tire changeovers", "Tire checks"],
    },
    {
        title: "Diagnostics",
        items: ["Check engine light", "Drivability issues", "No-start / warning lighs"],
    },
];

function CTA() {
    return (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16} }>
            <a href={CONTACT.phoneHref} style={{ 
                padding: "10px 14px",
                border: "1px solid #444",
                borderRadius: 8,
                textDecoration: "none",
            }}>
                Call {CONTACT.phoneNumber}
            </a>

            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{
                padding: "10px 14px",
                border: "1px solid #444",
                borderRadius: 8,
                textDecoration: "none",
            }}>
                Get Directions
            </a>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <>
            <h1><strong>Services:</strong></h1>
            <p>
                Need something not listed? Call us! We'll be glad to assist.
            </p>

            <CTA />

            <div style={{ marginTop: 24, 
                display: "grid", 
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                alignItems: "stretch", 
                }}>
                {services.map((s) => (
                    <section key={s.title} style={{ 
                        border: "1px solid #333", 
                        borderRadius: 12,
                        padding: 16,
                        background: "rgba(255, 255, 255, 0.02",
                        minHeight: 170,
                    }}>
                        <h2 style={{ 
                            marginTop: 0,
                            marginBottom: 10, 
                            fontSize: 22,
                            fontWeight: 800, 
                            }}>{s.title}
                            </h2>
                        <ul style={{ 
                            marginBottom: 0,
                            paddingLeft: 18,
                            lineHeight: 1.6,
                            opacity: 0.9, 
                            }}>
                            {s.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            <div style={{ marginTop: 24 }}>
                <p style={{ marginBottom:6 }}>
                    <strong>Address:</strong> {CONTACT.address}
                </p>
                <p style={{ marginTop: 0 }}>
                    <strong>Hours:</strong> {CONTACT.hours}
                </p>
            </div>

            <CTA />
        </>
    );
}