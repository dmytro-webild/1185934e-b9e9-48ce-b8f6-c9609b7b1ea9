"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function AboutPage() {
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
            <FooterLogoReveal
                logoText="Little Inspirers Montessori"
                leftLink={{ text: "Privacy Policy", href: "#" }}
                rightLink={{ text: "Contact", href: "/contact" }}
            />
        </ReactLenis>
    </ThemeProvider>
  );
}