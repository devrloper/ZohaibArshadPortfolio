"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DoorLoader({ duration = 1.2 }: { duration?: number }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration * 1000);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex">
          {/* Left Door */}
          <motion.div
            className="bg-black w-1/2 h-screen"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration }}
          />

          {/* Right Door */}
          <motion.div
            className="bg-black w-1/2 h-screen"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
