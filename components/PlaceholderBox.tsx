import React from "react";

interface PlaceholderBoxProps {
  label: string;
  ratio?: string;
  bg?: string;
}

export default function PlaceholderBox({ label, ratio = "16/9", bg = "#e6f7f9" }: PlaceholderBoxProps) {
  return (
    <div 
      className="border-2 border-dashed border-pvnxt-soft rounded-2xl flex items-center justify-center text-center p-6"
      style={{ 
        aspectRatio: ratio, 
        backgroundColor: `${bg}66` // adding 40% opacity
      }}
      aria-label={label}
    >
      <span className="text-[13px] text-muted max-w-md">{label}</span>
    </div>
  );
}
