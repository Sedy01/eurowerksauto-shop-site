import type { Metadata } from 'next';

export const metadata: Metadata = { 
    title: "About | Eurowerks Automotive",
    description: 
    "Experience the Eurowerks Automotive difference! Precision European service built on passion, integrity, and expert craftsmanship."
};

export default function AboutPage() {
    return (
        <main style={{  
            maxWidth: 1100,
            margin: "0 auto",
            padding: "32px 16px 56px",
        }}
        >
            <h1 style={{ fontSize: 34, margin: "0 0 12px" }}>About</h1>

            <p style={{ margin: "0 0 18px", opacity: 0.9, lineHeight: 1.7 }}>
                Eurowerks Automotive is a local mechanic shop focused on honest diagnostics,
                clean workmanship, and clear communication. If something isn't needed, we'll
                tell you. If it is needed, we'll explain why.
            </p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 14,
                marginTop: 18,
            }}
            >
                <div style={{ 
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 14,
                    padding: 16,
                }}
                >
                    <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>What we do</h2>
                    <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.7}}>
                        Maintenance, inspections, diagnostics, and repairs — with an emphasis on 
                        doing it right the first time.
                    </p>
                </div>

                <div style={{ 
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 14,
                    padding: 16,
                }}
                >
                    <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>How we work</h2>
                    <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.7}}>
                        Straight answers, no pressue. We confirm pricing and options before work
                        starts, and we keep you updated if anything changes.
                    </p>
                </div>

                <div style={{ 
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 14,
                    padding: 16,
                }}
                >
                    <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>What to expect</h2>
                    <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.7}}>
                        A clean shop, meticulous care, and a clear plan forward. Share your concerns 
                        and we'll provide a precise diagnosis first. Followed by expert recommendations
                        and swift resolutions.
                    </p>
                </div>                
            </div>

            <div style={{ marginTop: 22 }}>
                <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Quick notes</h2>
                <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.9, lineHeight: 1.8 }}>
                    <li>Serving the local area</li>
                    <li>Appointments recommended</li>
                    <li>Clear estimates before work begins</li>
                </ul>
            </div>
        </main>
    );
}