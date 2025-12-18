"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import TagAbout from '@/components/sections/about/TagAbout';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import { HelpCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="noiseGradient"
      cardStyle="glass-outline"
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
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765973792801-8rjle439.jpg"
          showcaseImageAlt="Cozy coffee shop interior with warm lighting"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765973792801-8rjle439.jpg"
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

      <div id="about-phone-timeline" data-section="about-phone-timeline">
        <AboutPhoneTimeline
          tag="Our Mission"
          title="Experience Coffee Crafted for You"
          description="Discover how our mobile app brings the Brew Haven experience to your fingertips. Order ahead, track your delivery, and join our loyalty program—all in one seamless platform."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765918460167-2sch9q6w.jpg",
            imageAlt: "Brew Haven App - Menu Screen"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765915788796-xbashtxq.jpg",
            imageAlt: "Brew Haven App - Order Tracking"
          }}
          textboxLayout="default"
          buttons={[
            { text: "Download App", href: "https://example.com" },
            { text: "Learn More", href: "about" }
          ]}
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
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765918460167-2sch9q6w.jpg",
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

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Coffee Stories & Updates"
          description="Explore our latest articles about our brand and new coffee releases"
          blogs={[
            {
              id: "1",
              tags: ["Brand", "Coffee", "Local"],
              title: "The Story Behind Brew Haven",
              excerpt: "Discover how our passion for exceptional coffee led to creating a community hub for coffee lovers",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765916824429-0pxxzdns.jpg",
              imageAlt: "Brew Haven Coffee Shop",
              authorName: "Brew Haven Team",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              tags: ["New Release", "Coffee", "Roastery"],
              title: "Introducing Our New Single-Origin Blend",
              excerpt: "We're excited to release our latest single-origin Ethiopian coffee with rich, complex notes",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765918460167-2sch9q6w.jpg",
              imageAlt: "New Coffee Blend",
              authorName: "Brew Haven Team",
              date: "10 Jan 2025"
            },
            {
              id: "3",
              tags: ["Coffee", "Tips", "Brewing"],
              title: "How to Brew the Perfect Cup at Home",
              excerpt: "Learn the secrets our baristas use to brew exceptional coffee in your own kitchen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765915788796-xbashtxq.jpg",
              imageAlt: "Coffee Brewing Guide",
              authorName: "Brew Haven Team",
              date: "5 Jan 2025"
            },
            {
              id: "4",
              tags: ["Sustainability", "Coffee", "Community"],
              title: "Our Commitment to Sustainable Coffee",
              excerpt: "Supporting fair-trade farmers and eco-friendly practices in every bean we source",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765916395877-9kequi57.jpg",
              imageAlt: "Sustainable Farming",
              authorName: "Brew Haven Team",
              date: "1 Jan 2025"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          carouselMode="buttons"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about Brew Haven and our offerings"
          tag="Help & Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We're open Monday to Friday from 6:00 AM to 6:00 PM, Saturday from 7:00 AM to 5:00 PM, and Sunday from 8:00 AM to 4:00 PM. We're closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer WiFi?",
              content: "Yes! We offer free high-speed WiFi to all our customers. Just ask for the WiFi password at the counter. It's a great spot for working, studying, or catching up with friends."
            },
            {
              id: "3",
              title: "Can I order online or book a table?",
              content: "Currently, we accept orders in-person. However, you can call us at (555) 123-4567 to place a phone order for pickup. Tables are first-come, first-served, but we always try to accommodate groups when possible."
            },
            {
              id: "4",
              title: "What payment methods do you accept?",
              content: "We accept cash, all major credit cards (Visa, Mastercard, American Express), and mobile payments (Apple Pay, Google Pay). We also offer a loyalty card for frequent visitors!"
            },
            {
              id: "5",
              title: "Do you have options for dietary restrictions?",
              content: "Absolutely! We offer oat, almond, and coconut milk alternatives, and all our pastries are labeled with common allergen information. Our baristas are happy to help you find the perfect drink for your dietary needs."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765973792801-8rjle439.jpg"
          imageAlt="Brew Haven Coffee Shop FAQ"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          mediaPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Tell us what you'd like to know...", rows: 5, required: true }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765917303210-h9ynol0c.jpg"
          imageAlt="Brew Haven Coffee Shop"
          mediaPosition="right"
          buttonText="Send Message"
          onSubmit={(data) => console.log('Contact form submitted:', data)}
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
