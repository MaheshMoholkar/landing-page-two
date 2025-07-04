"use client";

import EcosystemIcon from "@/assets/icons/ecosystem.svg";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      offsetX.set(e.clientX - rect.left);
      offsetY.set(e.clientY - rect.top);
    };
    const handleMouseLeave = () => {
      offsetX.set(-100);
      offsetY.set(-100);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [offsetX, offsetY]);

  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl relative">
      <motion.div
        ref={ref}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          maskImage,
        }}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};

export const Features = () => {
  return (
    <div id="features" className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-[600px] mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders and see your progress simply and
            quickly
          </p>
        </div>
        <div className="mt-16 flex flex-col md:max-w-5xl md:mx-auto gap-4 sm:flex-row sm:flex-1">
          {features.map(({ title, description }, idx) => (
            <FeatureCard key={idx} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};
