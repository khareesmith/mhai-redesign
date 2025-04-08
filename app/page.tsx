import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import ServiceSection from "@/components/service-section"
import BrandStatement from "@/components/brand-statement"
import TestimonialSection from "@/components/testimonial-section"
import FeatureSection from "@/components/feature-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <MissionSection />
      <ServiceSection />
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
      <BrandStatement />
    </main>
  )
}

