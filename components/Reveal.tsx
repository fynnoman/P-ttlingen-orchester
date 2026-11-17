"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type Props = {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
};

export default function Reveal({
  as = "div",
  children,
  className = "",
  stagger = false,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            const t = window.setTimeout(() => setVisible(true), delay);
            return () => window.clearTimeout(t);
          }
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      className={`${stagger ? "reveal-child" : "reveal"} ${
        visible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
