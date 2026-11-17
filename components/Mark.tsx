// Markenzeichen: stilisierter Akkordeon-Balg (Bellows). Zehn vertikale
// Haarlinien, die oben/unten in flachen Trapezen zusammenlaufen.
export default function Mark({
  className = "",
  stroke = "currentColor",
}: {
  className?: string;
  stroke?: string;
}) {
  const bars = Array.from({ length: 10 });
  return (
    <svg
      viewBox="0 0 60 60"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10 L12 8 L48 8 L56 10 L56 50 L48 52 L12 52 L4 50 Z"
        stroke={stroke}
        strokeWidth="1.1"
      />
      {bars.map((_, i) => {
        const x = 8 + i * (44 / 9);
        return (
          <line
            key={i}
            x1={x}
            y1={11}
            x2={x}
            y2={49}
            stroke={stroke}
            strokeWidth="0.8"
            opacity={0.75}
          />
        );
      })}
      <circle cx="30" cy="30" r="2.6" fill={stroke} />
    </svg>
  );
}
