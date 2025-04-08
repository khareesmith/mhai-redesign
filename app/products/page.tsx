import React from "react";

// TODO: Import components once created
import ProductHeader from "@/components/product-header";
import ClarionFeatureOverview from "@/components/clarion-feature-overview";
import ClarionPillars from "@/components/clarion-pillars";
import ClarionJourney from "@/components/clarion-journey";
import ClarionFAQs from "@/components/clarion-faqs";

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ProductHeader />
      <ClarionFeatureOverview />
      <ClarionPillars />
      <ClarionJourney />
      <ClarionFAQs />
      {/* <h1 className="pt-24 text-4xl">Products Page (Placeholder)</h1> */}{/* Placeholder Content */}
    </main>
  );
} 