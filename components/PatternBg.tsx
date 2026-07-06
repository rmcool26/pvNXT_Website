import * as React from "react";

interface PatternBgProps {
  opacity?: number;
  variant?: "light" | "dark";
  className?: string;
}

export default function PatternBg({
  opacity = 0.06,
  variant = "light",
  className = "",
}: PatternBgProps) {
  const bg = variant === "dark" ? "#113f4a" : "transparent";
  const img = "/assets/pat-pvnxt.png";

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundColor: bg !== "transparent" ? bg : "transparent",
        backgroundImage: `url(${img})`,
        backgroundSize: "400px",
        backgroundRepeat: "repeat",
        opacity,
      }}
    />
  );
}
