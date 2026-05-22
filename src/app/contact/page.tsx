"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function ContactPage() {
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
            <ContactSplit
                tag="Contact Us"
                title="Let's Connect"
                description="We'd love to hear from you. Reach out to schedule a tour or ask any questions about our program."
                background={{ variant: "plain" }}
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