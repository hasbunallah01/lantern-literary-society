import { Hero } from "@/components/home/Hero";
import { FeaturedConversation } from "@/components/home/FeaturedConversation";
import { WhyBookCrew } from "@/components/home/WhyBookCrew";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { FeaturedSpotlight } from "@/components/home/FeaturedSpotlight";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyAuthorsChooseUs } from "@/components/home/WhyAuthorsChooseUs";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTABanner } from "@/components/home/CTABanner";
import { StayInspired } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedConversation />
      <WhyBookCrew />
      <WhatWeDo />
      <FeaturedSpotlight />
      <HowItWorks />
      <WhyAuthorsChooseUs />
      <FAQPreview />
      <CTABanner />
      <StayInspired />
    </>
  );
}
