"use client";
import React from "react";
import ui from "../styles/ui.module.css";


type Props = {
  children: React.ReactNode;
  label?: string;
  heroSelector?: string;
};

export default function QuickDock({
  children,
  label = "Quick Info",
  heroSelector = "#hero",
}: Props) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const hero = document.querySelector(heroSelector);
    if (!hero) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 }
    );

    obs.observe(hero);
    return () => obs.disconnect();
  }, [heroSelector]);

  if (!visible) return null;

  return (
    <div className={ui.quickDock}>
      <button type="button" className={ui.quickDockTrigger} aria-label={label}>
        {label}
      </button>

      <div className={ui.quickDockMenu} aria-label={`${label} menu`}>
        {children}
      </div>
    </div>
  );
}
