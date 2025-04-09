import React from "react";

// TODO: Import components once created
import CTASection from "@/components/cta-section";
import ProductHeader from "@/components/product-header";
import LyrisFeatureOverview from "@/components/lyris-feature-overview";
import LyrisPillars from "@/components/lyris-pillars";
import LyrisJourney from "@/components/lyris-journey";
import LyrisFAQs from "@/components/lyris-faqs";

export default function ProductsPage() {
  return (
    <>
      <ProductHeader />
      <LyrisFeatureOverview />
      <LyrisPillars />
      <LyrisJourney />
      <LyrisFAQs />
      <CTASection />
    </>
  );
} 