"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { BookOpen, Smile, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Philosophy",
          id: "#about",
        },
        {
          name: "Programs",
          id: "#features",
        },
        {
          name: "Our Team",
          id: "#team",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Little Inspirers"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Nurturing curious minds through Montessori learning"
      description="Little Inspirers Montessori empowers children to learn independently and grow confidently in a thoughtfully prepared environment in Fort Worth."
      tag="Enrollment Open"
      buttons={[
        {
          text: "Schedule a Tour Today",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-boys-playing-with-toys_23-2148572949.jpg",
          imageAlt: "Montessori classroom setting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-curious-girl-observing-leaf_23-2149018946.jpg",
          imageAlt: "Curious child exploring materials",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tables-chairs-restaurant-filtered-image-processed-vinta_1232-2708.jpg",
          imageAlt: "Warm classroom scene",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/serious-schoolboy-white-t-shirt-writes-down-records-notepad-busy-with-studying_273609-44842.jpg",
          imageAlt: "Child with wooden manipulatives",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mother-daughter-kitchen_23-2148070422.jpg",
          imageAlt: "Teacher guiding a child",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sisters-drawing-blackboard_23-2147848691.jpg",
          imageAlt: "Montessori school interior",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Our Developmental Philosophy"
      metrics={[
        {
          icon: BookOpen,
          label: "Child-Centered",
          value: "100%",
        },
        {
          icon: Users,
          label: "Qualified Staff",
          value: "Certified",
        },
        {
          icon: Smile,
          label: "Happy Learners",
          value: "200+",
        },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Practical Life",
          tags: [
            "Independence",
            "Coordination",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/view-from-cute-girls-playing-with-dough-kitchen_132075-13655.jpg",
        },
        {
          id: "f2",
          title: "Sensorial Development",
          tags: [
            "Cognitive",
            "Discovery",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/blurry-girl-holding-wooden-toy_23-2149355244.jpg",
        },
        {
          id: "f3",
          title: "Language & Literacy",
          tags: [
            "Communication",
            "Writing",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/books-lying-pillow-library_23-2147863742.jpg",
        },
      ]}
      title="Core Curriculum Pillars"
      description="Our Montessori-based program fosters independence, social growth, and intellectual curiosity through hands-on discovery."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "t1",
          name: "Sarah Miller",
          role: "Lead Guide",
          description: "10+ years experience in early childhood Montessori.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-mother-with-little-son-home_273609-14784.jpg",
        },
        {
          id: "t2",
          name: "David Thompson",
          role: "Head of School",
          description: "Passionate about building community-focused classrooms.",
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-woman-holding-train-toy_23-2147664279.jpg",
        },
        {
          id: "t3",
          name: "Elena Rodriguez",
          role: "Assistant Guide",
          description: "Specialist in toddler sensorial development.",
          imageSrc: "http://img.b2bpic.net/free-photo/teacher-helping-young-girl-with-writing-lesson_1098-1861.jpg",
        },
      ]}
      title="Meet Our Dedicated Educators"
      description="Our team of Montessori-certified professionals is committed to guiding your child through each developmental milestone."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Jessica L.",
          date: "Oct 2023",
          title: "Great Transition",
          quote: "My daughter has flourished since starting here. The teachers are incredible.",
          tag: "Parent",
          avatarSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-mother-son-beach-sunlight_181624-8765.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/young-boys-playing-with-toys_23-2148572949.jpg",
          imageAlt: "happy parent portrait with child",
        },
        {
          id: "2",
          name: "Mark R.",
          date: "Sep 2023",
          title: "Life Changing",
          quote: "The Montessori approach is clear in every detail. Highly recommended.",
          tag: "Parent",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-smiling-father-his-daughter-home_624325-3627.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-curious-girl-observing-leaf_23-2149018946.jpg",
          imageAlt: "happy parent portrait with child",
        },
        {
          id: "3",
          name: "Sarah W.",
          date: "Aug 2023",
          title: "Supportive Community",
          quote: "We felt welcomed immediately. The curriculum is truly unique.",
          tag: "Parent",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-woman-with-her-two-children_23-2147637086.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/tables-chairs-restaurant-filtered-image-processed-vinta_1232-2708.jpg",
          imageAlt: "happy parent portrait with child",
        },
        {
          id: "4",
          name: "David H.",
          date: "Jul 2023",
          title: "Highly Professional",
          quote: "Safe, clean, and inspiring environment for our toddler.",
          tag: "Parent",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-mother-daughter_1170-2674.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-schoolboy-white-t-shirt-writes-down-records-notepad-busy-with-studying_273609-44842.jpg",
          imageAlt: "happy parent portrait with child",
        },
        {
          id: "5",
          name: "Linda M.",
          date: "Jun 2023",
          title: "Excellent Choice",
          quote: "Everything we wanted for our son's early development.",
          tag: "Parent",
          avatarSrc: "http://img.b2bpic.net/free-photo/father-with-his-son-having-picnic-park_1303-16242.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mother-daughter-kitchen_23-2148070422.jpg",
          imageAlt: "happy parent portrait with child",
        },
      ]}
      title="Hear from Our Families"
      description="Trust our parents' experiences in building a strong foundation for their children at Little Inspirers."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What age range do you serve?",
          content: "We currently support children from 18 months through 6 years old.",
        },
        {
          id: "q2",
          title: "What is the Montessori philosophy?",
          content: "A child-centered approach valuing independence, hands-on learning, and respectful environment.",
        },
        {
          id: "q3",
          title: "How do I enroll my child?",
          content: "Schedule a tour, attend an interview, and submit your application via our online portal.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Get clear answers to the most common questions regarding our Montessori program."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Ready to Start Your Journey?"
      description="Get in touch to schedule a private tour of our facility and see our classrooms in action."
      imageSrc="http://img.b2bpic.net/free-photo/cute-nursery-decorations_23-2147698731.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Little Inspirers Montessori"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Contact",
        href: "#contact",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
