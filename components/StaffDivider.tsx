// Musikalische Notenlinien als Abschnittstrenner mit zwei platzierten Noten.
export default function StaffDivider() {
  return (
    <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-10">
      <div className="staff">
        <span className="staff-note" style={{ left: "18%" }} />
        <span className="staff-note" style={{ left: "62%" }} />
      </div>
    </div>
  );
}
