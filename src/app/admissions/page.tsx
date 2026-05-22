"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TimelineProcessFlow from '@/components/cardStack/layouts/timelines/TimelineProcessFlow';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function AdmissionsPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "/" },
            { name: "Programs", id: "/programs" },
            { name: "Admissions", id: "/admissions" },
            { name: "Contact", id: "/#contact" },
          ]}
          brandName="Little Inspirers"
        />
        <div className="pt-32 pb-20">
          <TimelineProcessFlow
            title="Enrollment Process"
            description="Steps to join our Little Inspirers family."
            textboxLayout="split"
            animationType="slide-up"
            items={[
              { content: "Schedule a Tour", media: "1", reverse: false },
              { content: "Submit Application", media: "2", reverse: true },
              { content: "Parent Interview", media: "3", reverse: false },
              { content: "Enrollment Confirmation", media: "4", reverse: true },
            ]}
          />
        </div>
        <FooterLogoReveal
          logoText="Little Inspirers Montessori"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Contact", href: "/#contact" }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}