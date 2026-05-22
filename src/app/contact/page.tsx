"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function ContactPage() {
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
            <div id="contact" data-section="contact" className="pt-32 pb-20">
              <ContactSplit
                  tag="Contact Us"
                  title="Get in Touch"
                  description="We'd love to hear from you. Please reach out with any questions about our Montessori programs or to schedule a tour of our campus."
                  background={{ variant: "plain" }}
                  imageSrc="http://img.b2bpic.net/free-photo/cute-nursery-decorations_23-2147698731.jpg"
                  mediaPosition="right"
                  inputPlaceholder="Enter your email"
                  buttonText="Send Message"
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