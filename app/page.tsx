import { LanternHero, Pillars, Committee, Gatherings } from "@/components/home/LanternHome";
import { StayInspired } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <LanternHero />
      <Pillars />
      <Committee />
      <Gatherings />
      <StayInspired />
    </>
  );
}
