import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Intro from "@/components/Intro";
import StaffDivider from "@/components/StaffDivider";
import Pillars from "@/components/Pillars";
import Manifesto from "@/components/Manifesto";
import Quote from "@/components/Quote";
import KontaktCTA from "@/components/KontaktCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Showcase />
      <Intro />
      <StaffDivider />
      <Pillars />
      <Manifesto />
      <Quote />
      <KontaktCTA />
    </>
  );
}
