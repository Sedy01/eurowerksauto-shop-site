import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
    title: "Photos | Eurowerks Automotive",
    description: "A look inside the shop. Photos of our space and work.",
};

const PHOTOS: { src: string; alt: string }[] = [
    { src: "/gallery/black-bmw.jpg", alt: "Shop photo 1" },
    { src: "/gallery/range-rover.jpg", alt: "Shop photo 2" },
    { src: "/gallery/silver-audi.jpg", alt: "Shop photo 3" },
    { src: "/gallery/silver-car.jpg", alt: "Shop photo 4" },
    { src: "/gallery/white-bmw.jpg", alt: "Shop photo 5" },
    { src: "/gallery/white-truck.jpg", alt: "Shop photo 6" },
];

export default function GalleryPage() {
    return (
        <div>
            <h1 style={{ fontSize: 34, margin: "0 0 12px" }}>
                Photos
            </h1>
            <p style={{ margin: "0 0 18px", opacity: 0.9, lineHeight: 1.7 }}>
                A look inside our shop.
            </p>
            <GalleryClient photos={PHOTOS} />
        </div>
    );
}