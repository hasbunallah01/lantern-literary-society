import type { Metadata } from "next";
import {
  TermsHero,
  TermsSections,
  TermsCTA,
} from "@/components/terms/TermsSections";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The responsibilities, expectations, and agreements that apply when using The Lantern Literary Society — author and platform responsibilities, editorial review, intellectual property, payments, acceptable use, and more.",
};

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsSections />
      <TermsCTA />
    </>
  );
}
