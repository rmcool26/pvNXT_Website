"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SolarHeroCanvas: React.FC = () => {
  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return null;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 80, damping: 25 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const orb1X = useTransform(smoothX, [-1, 1], [-18, 18]);
  const orb1Y = useTransform(smoothY, [-1, 1], [-18, 18]);
  const orb2X = useTransform(smoothX, [-1, 1], [-35, 35]);
  const orb2Y = useTransform(smoothY, [-1, 1], [-35, 35]);
  const orb3X = useTransform(smoothX, [-1, 1], [-60, 60]);
  const orb3Y = useTransform(smoothY, [-1, 1], [-60, 60]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) * 2 - 1);
      mouseY.set((clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useGSAP(() => {
    gsap.to(".sun-glow", {
      scale: 1.06,
      opacity: 0.9,
      repeat: -1,
      yoyo: true,
      duration: 3.2,
      ease: "sine.inOut",
    });
    gsap.to(".rays-rotate", {
      rotate: 360,
      duration: 120,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const cells = [
    { top: "15%", left: "10%" },
    { top: "25%", left: "75%" },
    { top: "50%", left: "15%" },
    { top: "70%", left: "80%" },
    { top: "40%", left: "60%" },
    { top: "80%", left: "30%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Aurora Orbs */}
      <motion.div
        style={{
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, #069fb1 0%, #baf0f5 100%)",
          opacity: 0.35,
          filter: "blur(64px)",
          position: "absolute",
          top: "-10%",
          right: "-10%",
          x: orb1X,
          y: orb1Y,
        }}
      />
      <motion.div
        style={{
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "radial-gradient(circle, #069fb1 0%, #baf0f5 100%)",
          opacity: 0.28,
          filter: "blur(64px)",
          position: "absolute",
          bottom: "-5%",
          left: "-5%",
          x: orb2X,
          y: orb2Y,
        }}
      />
      <motion.div
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, #069fb1 0%, #baf0f5 100%)",
          opacity: 0.45,
          filter: "blur(64px)",
          position: "absolute",
          top: "40%",
          right: "5%",
          x: orb3X,
          y: orb3Y,
        }}
      />

      {/* Sun Glow */}
      <div 
        className="sun-glow absolute top-12 right-24 w-32 h-32 rounded-full" 
        style={{ background: "radial-gradient(circle, #069fb1 0%, transparent 70%)", opacity: 0.8 }}
      />

      {/* Sun Rays */}
      <div 
        className="rays-rotate absolute -top-48 -right-48 w-[600px] h-[600px] opacity-[0.06]" 
        style={{ background: "conic-gradient(from 0deg, transparent 0deg, #069fb1 12deg, transparent 30deg)" }}
      />

      {/* Floating Panel Cells */}
      {cells.map((cell, i) => (
        <motion.div
          key={i}
          className="absolute w-[72px] h-[40px] rounded-[6px] border border-[#069fb1]/20 bg-white/[0.04]"
          style={{ top: cell.top, left: cell.left }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 5.5 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default SolarHeroCanvas;
