"use client";

export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  }
  return <button className="theme-toggle" onClick={toggle} type="button" aria-label={label} title={label}><span>◐</span></button>;
}
