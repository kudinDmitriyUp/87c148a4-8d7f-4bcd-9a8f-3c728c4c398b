"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

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
            { name: "Reviews", id: "testimonials" }
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
                { label: "Contact", href: "#contact" },
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
