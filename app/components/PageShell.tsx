"use client";
import React, { useEffect, useState } from "react";
import ui from "../styles/ui.module.css";


type Props = {
  children: React.ReactNode;
  width?: "normal" | "wide";
  floatingRail?: React.ReactNode;
};

export default function PageShell({ children, width = "wide", floatingRail }: Props) {
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    if (!floatingRail) return;

    const hero = document.querySelector("#hero");
    if (!hero) {
      setShowDock(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowDock(!entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [floatingRail]);

  return (
    <div className={ui.pageBg}>
      <div
        className={`${ui.pageContainer} ${
          width === "wide" ? ui.containerWide : ui.containerNormal
        }`}
      >
        <main className={ui.pageMain}>{children}</main>
      </div>

      {floatingRail && showDock ? (
        <div className={ui.floatingRail} aria-label="Quick actions">
          {floatingRail}
        </div>
      ) : null}
    </div>
  );
}
