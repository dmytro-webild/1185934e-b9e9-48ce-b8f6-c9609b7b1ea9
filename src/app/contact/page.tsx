"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function ContactPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
        <ReactLenis root>
            <div id="nav" data-section="nav">
              <NavbarLayoutFloatingInline
                  navItems={[
                      { name: "Home", id: "/" },
                      { name: "About", id: "/about" },
                      { name: "Contact", id: "/contact" },
                  ]}
                  brandName="Little Inspirers"
              />
            </div>
            <div id="contact" data-section="contact" className="pt-32 pb-20">
              <ContactCTA
                  tag="Contact Us"
                  title="Get in Touch"
                  description="We'd love to hear from you. Please reach out with any questions about our Montessori programs or to schedule a tour of our campus."
                  background={{ variant: "plain" }}
                  useInvertedBackground={false}
                  buttons={[
                    { text: "Send Message", onClick: () => console.log("Submit") }
                  ]}
              />
            </div>
            <FooterSimple
                columns={[
                  {
                    title: "Pages",                    items: [
                      { label: "Home", href: "/" },
                      { label: "About", href: "/about" },
                      { label: "Contact", href: "/contact" }
                    ]
                  }
                ]}
                bottomLeftText="© 2024 Little Inspirers"
                bottomRightText="All rights reserved"
            />
        </ReactLenis>
    </ThemeProvider>
  );
}