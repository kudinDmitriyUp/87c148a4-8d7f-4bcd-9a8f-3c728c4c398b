"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="noiseGradient"
      cardStyle="gradient-subtle"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Order Now", href: "contact" }}
          brandName="Brew Haven"
          logoAlt="Brew Haven Coffee Shop"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Your Local Coffee Haven"
          description="Freshly roasted beans, artisanal brews, and a cozy atmosphere where community comes together one cup at a time."
          tags={["Specialty Coffee", "Local Roastery", "Craft Beverages", "Community Space"]}
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Visit Us Today", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765916824429-0pxxzdns.jpg"
          showcaseImageAlt="Cozy coffee shop interior with warm lighting"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765916824429-0pxxzdns.jpg"
          imageAlt="Coffee shop counter with barista"
          showDimOverlay={false}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="Founded by local coffee enthusiasts, Brew Haven started as a passion for bringing exceptional coffee experiences to our community. We source beans from sustainable farms around the world, roast them with care, and serve them with genuine hospitality. Every cup tells a story of craftsmanship and dedication."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSeven
          title="Featured Menu Items"
          description="Discover our most loved beverages and pastries crafted fresh daily"
          products={[
            {
              id: "1",
              name: "Signature Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765915787387-5p0aogqw.jpg",
              imageAlt: "Rich espresso shot with crema"
            },
            {
              id: "2",
              name: "Artisan Cappuccino",
              price: "$5.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765915788796-xbashtxq.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "3",
              name: "Butter Croissant",
              price: "$4.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765916395877-9kequi57.jpg",
              imageAlt: "Fresh flaky croissant"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEight
          title="What Our Regulars Say"
          description="Join hundreds of satisfied customers who have made Brew Haven their daily destination"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Local Artist",
              company: "Studio Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765915790825-3vs0z748.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Software Developer",
              company: "Tech Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765915791742-v7cfapkf.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Maria Rodriguez",
              role: "Teacher",
              company: "Local School",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765915792524-hjkilmv4.jpg",
              imageAlt: "Maria Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Freelancer",
              company: "Writer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765915793412-qppqeupy.jpg",
              imageAlt: "David Thompson"
            },
            {
              id: "5",
              name: "Emma Watson",
              role: "Student",
              company: "University",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765915794265-4rfp78x2.jpg",
              imageAlt: "Emma Watson"
            },
            {
              id: "6",
              name: "Michael Lopez",
              role: "Business Owner",
              company: "Local Entrepreneur",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765915795100-90m8ztg5.jpg",
              imageAlt: "Michael Lopez"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about visiting Brew Haven"
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We are open Monday through Friday from 6:00 AM to 8:00 PM, Saturday 7:00 AM to 9:00 PM, and Sunday 8:00 AM to 7:00 PM. We are closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer WiFi for customers?",
              content: "Yes! We provide free high-speed WiFi for all our customers. Our space is perfect for working, studying, or just relaxing with a good cup of coffee."
            },
            {
              id: "3",
              title: "Can I order ahead online?",
              content: "Currently, we accept orders in-person and by phone. Call us at (555) 123-4567 to place an order for pickup. We're working on adding online ordering soon!"
            },
            {
              id: "4",
              title: "Do you have gluten-free options?",
              content: "Yes! We offer several gluten-free pastries and beverages. Our baristas are trained to handle dietary requirements. Please let us know your needs when ordering."
            },
            {
              id: "5",
              title: "What payment methods do you accept?",
              content: "We accept cash, credit cards, debit cards, and mobile payment apps like Apple Pay and Google Pay for your convenience."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Visit Brew Haven"
          ctaDescription="Stop by today and experience the warmth of our community. We're always happy to welcome new friends."
          ctaButton={{ text: "Get Directions", href: "https://maps.google.com" }}
          ctaIcon={MapPin}
          faqs={[
            {
              id: "1",
              title: "Where are you located?",
              content: "123 Main Street, Downtown District. Easy street parking available. We're located between the library and the community center."
            },
            {
              id: "2",
              title: "How can I contact you?",
              content: "Phone: (555) 123-4567 | Email: hello@brewhaven.local | Hours: Mon-Fri 6AM-8PM, Sat 7AM-9PM, Sun 8AM-7PM"
            },
            {
              id: "3",
              title: "Do you host events?",
              content: "Yes! We love hosting community events, local artist showcases, and live music nights. Contact us for more information about hosting your event."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "Menu", href: "products" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Hours", href: "#faq" },
                { label: "Reviews", href: "testimonials" }
              ]
            },
            {
              items: [
                { label: "Location: 123 Main St", href: "https://maps.google.com" },
                { label: "Call: (555) 123-4567", href: "tel:+15551234567" },
                { label: "Email: hello@brewhaven.local", href: "mailto:hello@brewhaven.local" }
              ]
            }
          ]}
          logoText="Brew Haven"
          logoAlt="Brew Haven Coffee Shop"
        />
      </div>
    </ThemeProvider>
  );
}
