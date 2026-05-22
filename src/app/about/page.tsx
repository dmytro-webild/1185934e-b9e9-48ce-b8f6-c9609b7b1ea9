"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function AboutPage() {
  return (
    <ThemeProvider>
        <ReactLenis root>
            <NavbarStyleFullscreen
                navItems={[
                    { name: "Home", id: "/" },
                    { name: "About", id: "/about" },
                    { name: "Contact", id: "/contact" },
                ]}
                brandName="Little Inspirers"
            />
            <MetricSplitMediaAbout
                title="Our Story & Mission"
                description="We are dedicated to providing a nurturing Montessori environment that respects each child's pace and innate curiosity. Founded on the principles of Maria Montessori, our goal is to foster a lifelong love for learning."
                metrics={[
                    { value: "18mo - 6y", title: "Age Range" },
                    { value: "Certified", title: "Staff Qualifications" },
                    { value: "Community", title: "Focused Environment" }
                ]}
                useInvertedBackground={false}
            />
            <FooterLogoReveal
                logoText="Little Inspirers Montessori"
                leftLink={{ text: "Privacy Policy", href: "#" }}
                rightLink={{ text: "Contact", href: "/contact" }}
            />
        </ReactLenis>
    </ThemeProvider>
  );
}