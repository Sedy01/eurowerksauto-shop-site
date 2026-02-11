import type { Metadata } from 'next';
import { CONTACT, mapsUrl } from "../lib/contact"

export const metadata: Metadata = {
    title: "Contact | Eurowerks Automotive",
    description: "Get in touch! We're here to help."
};

export default function ContactPage() {
    return (
        <>
            <h1>Contact</h1>

            <div style={{ marginTop: 16}}>
                <p>
                    <strong>Phone:</strong> <a href={CONTACT.phoneHref}>{CONTACT.phoneNumber}</a>
                </p>
                <p>
                    <strong>Address:</strong>{" "}
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                        {CONTACT.address}
                    </a>
                </p>
                <p>
                    <strong>Directions:</strong>{" "}
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                        Open in Google Maps
                    </a>
                </p>
                <p>
                    <strong>Hours:</strong> {CONTACT.hours}
                </p>
            </div>
        </>
    );
}