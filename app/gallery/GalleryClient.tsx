"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Photo = { src: string; alt: string };

export default function GalleryClient( { photos }: { photos: Photo[] }) {
    const [view, setView] = useState<"grid" | "carousel">("grid");
    const [autoScroll, setAutoScroll] = useState(true);
    const [paused, setPaused] = useState(false);

    const scrollerRef = useRef<HTMLDivElement | null>(null);

    const canAutoScroll = useMemo(
        () => view === "carousel" && autoScroll && !paused,
        [view, autoScroll, paused]
    );

    function scrollByCard(dir: 1 | -1) {
        const el = scrollerRef.current;
        if (!el) return;
        const amount = Math.max(260, Math.floor(el.clientWidth * 0.9));
        el.scrollBy({ left: dir * amount, behavior: "smooth" });
    }

    useEffect(() => {
        if (!canAutoScroll) return;

        const el = scrollerRef.current;
        if(!el) return;

        const id = window.setInterval(() => {
            const maxLeft = el.scrollWidth - el.clientWidth;
            if (el.scrollLeft >= maxLeft - 8) {
                el.scrollTo({ left: 0, behavior: "smooth" });
                return;
            }

            scrollByCard(1);
        }, 3200);

        return () => window.clearInterval(id);
    }, [canAutoScroll]);

    const controlBtnStyle: React.CSSProperties = {
        border: "1px solid rgba(255,255,255,0,16)",
        background: "rgba(255,255,255,0.04)",
        color:"inherit",
        borderRadius: 10,
        padding: "8px 10px",
        cursor: "pointer",
        opacity: 0.95,
    };

    const pillStyle = (active: boolean): React.CSSProperties => ({
        ...controlBtnStyle,
        padding: "8px 12px",
        opacity: active ? 1 : 0.7,
    });

    return (
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ 
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                alignItems: "center",
                marginTop: 16,
                marginBottom: 14,
            }}
            >
                <div style={{ display: "flex, gap: 8" }}>
                    <button type="button"
                        onClick={() => setView("grid")}
                        style={pillStyle(view === "grid")}
                        aria-pressed={view === "grid"}
                    >
                        Grid
                    </button>
                    <button type="button"
                        onClick={() => setView("carousel")}
                        style={pillStyle(view === "carousel")}
                        aria-pressed={view === "carousel"}
                    >
                        Carousel
                    </button>
                </div>

                {view === "carousel" && (
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <button type="button"
                            onClick={() => scrollByCard(-1)}
                            style={controlBtnStyle}
                            aria-label="Scroll left"
                        >
                            ←
                        </button>
                        <button type="button"
                            onClick={() => scrollByCard(1)}
                            style={controlBtnStyle}
                            aria-label="Scroll right"
                        >
                            →
                        </button>
                        <label style={{ display: "flex", gap: 8, alignItems: "center", opacity: 0.9 }}>
                            <input type="checkbox"
                                checked={autoScroll}
                                onChange={(e) => setAutoScroll(e.target.checked)}
                            />
                            Auto-scroll
                        </label>
                    </div>
                )}
            </div>

            {view === "grid" ? (
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 12,
                }}
                >
                    {photos.map((p) => (
                        <div key={p.src}
                        style={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: "4 / 3",
                            borderRadius: 14,
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.12)",
                            background: "rgba(255,255,255,0.03)",
                            }}
                        >
                        <Image src={p.src} alt = {p.alt} fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                        />                          
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <div ref={scrollerRef}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        onFocus={() => setPaused(true)}
                        onBlur={() => setPaused(false)}
                        onTouchStart={() => setPaused(true)}
                        style={{
                            display: "flex",
                            gap: 12,
                            overflowX: "auto",
                            paddingBottom: 10,
                            scrollSnapType: "x mandatory",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {photos.map((p) => (
                            <div key={p.src}
                                style={{
                                    position: "relative",
                                    flex: "0 0 auto",
                                    width: "clamp(240px, 70vw, 420px)",
                                    aspectRatio: "4 / 3",
                                    borderRadius: 14,
                                    overflow: "hidden",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    background: "rgba(255,255,255,0.03)",
                                    scrollSnapAlign: "start",
                                }}
                            >
                                <Image src={p.src} alt = {p.alt} fill
                                    sizes="(max-width: 640px) 90vw, 420px"
                                    style={{ objectFit: "cover" }}
                                />      
                            </div>
                        ))}
                    </div>

                    <p style={{ marginTop: 10, opacity: 0.7, fontSize: 13, lineHeight: 1.6 }}>
                        Tip: Drag/scroll the carousel. It pauses when you ineract
                    </p>
                </div>
            )}

            <p style={{ marginTop: 16, opacity: 0.7, fontSize: 13, lineHeight: 1.6 }}>
                More photos coming soon! Ask us about recent work.
            </p>
        </div>
    );
}