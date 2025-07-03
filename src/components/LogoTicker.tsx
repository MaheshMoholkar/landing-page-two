"use client";

import acmeLogo from "@/assets/images/acme.png";
import quantumLogo from "@/assets/images/quantum.png";
import echoLogo from "@/assets/images/echo.png";
import celestialLogo from "@/assets/images/celestial.png";
import pulseLogo from "@/assets/images/pulse.png";
import apexLogo from "@/assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  // Array of logos for easier duplication
  const logos = [
    { src: acmeLogo, alt: "Acme Logo" },
    { src: quantumLogo, alt: "Quantum Logo" },
    { src: echoLogo, alt: "Echo Logo" },
    { src: celestialLogo, alt: "Celestial Logo" },
    { src: pulseLogo, alt: "Pulse Logo" },
    { src: apexLogo, alt: "Apex Logo" },
  ];

  return (
    <div className="py-8 md:py-12 bg-black text-white">
      <div className="container">
        <h2 className="text-center text-xl text-white/70 mb-8">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: ["0%", "-50%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <Image
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
