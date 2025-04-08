import React from "react";
import AboutHero from "@/components/about-hero";
import AboutMissionValues from "@/components/about-mission-values";
import AboutStoryBrief from "@/components/about-story-brief";
import TeamSection from "@/components/team-section";
// Potentially add other sections like Team later

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16 sm:pt-24"> {/* Added padding-top */} 
      <AboutHero />
      <AboutMissionValues />
      <AboutStoryBrief />
      <TeamSection />
    </main>
  );
} 