"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function ProgramsPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Programs", id: "/programs" },
              { name: "Admissions", id: "/admissions" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Little Inspirers"
          />
        </div>
        <div id="programs" data-section="programs" className="pt-32 pb-20">
          <FeatureCardTwentyThree
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { id: "p1", title: "Toddler Program (18m-3y)", tags: ["Sensorial", "Life Skills"] },
              { id: "p2", title: "Primary Program (3y-6y)", tags: ["Academic", "Social"] },
            ]}
            title="Our Montessori Programs"
            description="Age-appropriate learning pathways designed to support the natural development of your child."
          />
        </div>
        <FooterLogoReveal
          logoText="Little Inspirers Montessori"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Contact", href: "/contact" }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}