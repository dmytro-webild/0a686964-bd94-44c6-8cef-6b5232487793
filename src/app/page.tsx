"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroOverlayTestimonial from "@/components/sections/hero/HeroOverlayTestimonial";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import TeamCardSix from "@/components/sections/team/TeamCardSix";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Star, Sparkles, ChefHat, UtensilsCrossed, Heart } from "lucide-react";

export default function LandscapingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="large"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            brandName="Iconic Resto Bar"
            navItems={[
              { name: "Menu", id: "services" },
              { name: "About Us", id: "about" },
              { name: "Team", id: "team" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" }
            ]}
            button={{ text: "Book a Table", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            tag="Experience Excellence"
            tagIcon={Star}
            title="Iconic Resto Bar: Unforgettable Dining & Drinks"
            description="Discover a vibrant atmosphere, exquisite flavors, and craft cocktails. Join us for an experience rated 4.6 stars by 108 of our guests."
            buttons={[
              { text: "View Menu", href: "#services" },
              { text: "Make Reservation", href: "#contact" }
            ]}
            buttonAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/various-color-cocktails-lamp-bottles_140725-869.jpg"
            imageAlt="Stylish interior of a vibrant resto bar with dim lighting and seating"
            showDimOverlay={true}
            textPosition="top"
            testimonials={[
              {
                name: "Anna L.",                handle: "Food Critic",                testimonial: "Iconic Resto Bar truly lives up to its name. The dishes are a culinary masterpiece, and the cocktails are simply divine!",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/serious-executive-with-short-hair-crossed-arms_1149-89.jpg",                imageAlt: "Anna L."
              },
              {
                name: "Mark P.",                handle: "Regular Guest",                testimonial: "Our go-to spot for any celebration. The ambiance is perfect, and the staff always makes us feel like VIPs.",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-blond-bearded-guy-happy-man-look-away-smiling-concept-men-health-lifestyle-cross-arms-chest-white-background_176420-54432.jpg",                imageAlt: "Mark P."
              }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="Our Story"
            tagIcon={Sparkles}
            tagAnimation="slide-up"
            title="Crafting culinary memories since 2018 – where passion meets plate, and every visit is a celebration."
            description="Elena Rodriguez, Chef & Owner"
            subdescription="Established in 2018"
            icon={ChefHat}
            videoSrc="http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208276.jpg"
            mediaAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardNineteen
            tag="Our Offerings"
            tagIcon={UtensilsCrossed}
            title="Savor the Iconic Experience"
            description="From gourmet dishes to signature cocktails, we cater to every palate."
            buttonAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            imageContainerClassName="!rotate-0 !aspect-square"
            features={[
              {
                tag: "Dining",                title: "Gourmet Cuisine",                subtitle: "Seasonal & Exquisite",                description: "Indulge in our carefully curated menu featuring fresh, seasonal ingredients and innovative culinary techniques.",                imageSrc: "http://img.b2bpic.net/free-photo/head-cook-throwing-fresh-chopped-herbs-pan-improve-taste-meal-while-professional-kitchen-master-chef-seasoning-dish-prepared-food-contest-held-fine-dining-restaurant_482257-40137.jpg",                imageAlt: "Plate of gourmet food in a restaurant setting"
              },
              {
                tag: "Drinks",                title: "Signature Cocktails",                subtitle: "Artisanal Mixology",                description: "Our expert mixologists craft unique cocktails, fine wines, and premium spirits to perfectly complement your meal.",                imageSrc: "http://img.b2bpic.net/free-photo/close-up-bartender-cocktail-shaker_23-2149132167.jpg",                imageAlt: "Expertly crafted cocktail on a bar counter"
              },
              {
                tag: "Events",                title: "Private & Corporate Events",                subtitle: "Tailored Celebrations",                description: "Host your next special occasion or corporate gathering in our elegant private dining spaces, customized to your needs.",                imageSrc: "http://img.b2bpic.net/free-photo/bouquet-table_1157-797.jpg",                imageAlt: "Elegant private dining room set up for an event"
              },
              {
                tag: "Ambiance",                title: "Vibrant & Chic Atmosphere",                subtitle: "Modern & Welcoming",                description: "Experience a sophisticated yet lively setting, perfect for a romantic dinner, a night out with friends, or a business lunch.",                imageSrc: "http://img.b2bpic.net/free-photo/3d-modern-lamp-design_23-2151047610.jpg",                imageAlt: "Stylish and lively restaurant interior at night"
              }
            ]}
          />
        </div>

        <div id="why-us" data-section="why-us">
          <TeamCardSix
            title="Why Choose Iconic Resto Bar"
            description="More than just a meal, it's an unforgettable experience."
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            members={[
              {
                id: "1",                name: "Culinary Excellence",                role: "Award-winning chefs crafting innovative, seasonal dishes with passion.",                imageSrc: "http://img.b2bpic.net/free-photo/woman-cooking-tomahawk-beef-steak-gourmet-dish-stove_482257-121134.jpg",                imageAlt: "Chef preparing a gourmet dish in a professional kitchen"
              },
              {
                id: "2",                name: "Signature Drinks",                role: "Expert mixologists creating bespoke cocktails and curating an exquisite wine list.",                imageSrc: "http://img.b2bpic.net/free-photo/preparing-refreshing-cocktail-bar_23-2148176752.jpg",                imageAlt: "Bartender skillfully mixing a cocktail"
              },
              {
                id: "3",                name: "Unmatched Ambiance",                role: "A sophisticated yet lively setting, perfect for any occasion from intimate dinners to celebrations.",                imageSrc: "http://img.b2bpic.net/free-photo/cocktail-refreshment-neo-futuristic-style_23-2151370363.jpg",                imageAlt: "Guests enjoying drinks and conversation in a stylish bar"
              }
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardOne
            tag="Our Visionaries"
            title="Meet the Minds Behind Iconic"
            description="Dedicated to delivering exceptional taste and service."
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            members={[
              {
                id: "1",                name: "Elena Rodriguez",                role: "Chef & Owner",                imageSrc: "http://img.b2bpic.net/free-photo/portrait-pretty-doctor-hospital_23-2148733946.jpg",                imageAlt: "Portrait of Elena Rodriguez, Chef and Owner"
              },
              {
                id: "2",                name: "Marco Bianchi",                role: "Head Mixologist",                imageSrc: "http://img.b2bpic.net/free-photo/happy-bartender-holding-glass-draft-beer-while-working-bar_637285-5694.jpg",                imageAlt: "Portrait of Marco Bianchi, Head Mixologist"
              },
              {
                id: "3",                name: "Sophie Dubois",                role: "Restaurant Manager",                imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-pretty-waitress_1098-15705.jpg",                imageAlt: "Portrait of Sophie Dubois, Restaurant Manager"
              }
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve
            cardTag="Loved by Our Guests"
            cardTagIcon={Heart}
            cardTitle="Join over 100 happy guests who rave about our food, drinks, and unforgettable atmosphere."
            buttons={[{ text: "Make a Reservation", href: "#contact" }]}
            buttonAnimation="slide-up"
            cardAnimation="slide-up"
            useInvertedBackground={false}
            testimonials={[
              {
                id: "1",                name: "Jessica L.",                imageSrc: "http://img.b2bpic.net/free-photo/attractive-feminine-tender-young-woman-curlyhaired-chubby-smiling-silly-look-camera-blue-eyes-girlfriend-attend-first-date-liking-spend-time-together-boyfriend-have-fun-look-happy-white-background_176420-50549.jpg",                imageAlt: "Jessica L."
              },
              {
                id: "2",                name: "Robert S.",                imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-kitchen_107420-12357.jpg",                imageAlt: "Robert S."
              },
              {
                id: "3",                name: "Maria C.",                imageSrc: "http://img.b2bpic.net/free-photo/young-caucasian-woman-smiling-confident-looking-side-street_839833-24417.jpg",                imageAlt: "Maria C."
              },
              {
                id: "4",                name: "Tom K.",                imageSrc: "http://img.b2bpic.net/free-photo/business-concept-portrait-handsome-serious-business-man-suit-looking-work-laptop-white-background_1258-103931.jpg",                imageAlt: "Tom K."
              }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            tag="FAQs"
            title="Your Questions, Answered"
            description="Find quick answers about reservations, menu, events, and more."
            textboxLayout="default"
            useInvertedBackground={false}
            faqsAnimation="slide-up"
            faqs={[
              {
                id: "1",                title: "How do I make a reservation?",                content: "You can easily make a reservation through our website's contact form, by calling us directly, or by using our online booking partner link on the contact page."
              },
              {
                id: "2",                title: "Do you accommodate dietary restrictions?",                content: "Yes, we strive to accommodate all dietary needs. Please inform us of any allergies or restrictions when making your reservation or upon arrival, and our chefs will be happy to assist."
              },
              {
                id: "3",                title: "Can I book Iconic Resto Bar for a private event?",                content: "Absolutely! We offer private dining options for various events, from intimate celebrations to corporate gatherings. Please contact us to discuss your specific requirements and availability."
              },
              {
                id: "4",                title: "What is your dress code?",                content: "We encourage smart casual attire. While we don't enforce a strict dress code, many of our guests choose to dress up for the evening to match our sophisticated ambiance."
              },
              {
                id: "5",                title: "Is there parking available?",                content: "Yes, we offer valet parking services. There are also several public parking garages within a short walking distance from the restaurant."
              },
              {
                id: "6",                title: "Do you offer takeout or delivery?",                content: "Currently, we focus on providing a full-service dine-in experience to ensure the highest quality of our dishes. We do not offer takeout or delivery services at this time."
              }
            ]}
          />
        </div>

        <div id="contact" data-section="contact" className="relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <video
              src="http://img.b2bpic.net/free-photo/people-relaxing-by-vaping-from-hookah-bar_23-2149191824.jpg"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <ContactSplitForm
            title="Book Your Table or Event"
            description="Contact us to make a reservation or inquire about private events. We'll get back to you within 24 hours."
            useInvertedBackground={false}
            mediaAnimation="none"
            buttonText="Send Request"
            contentClassName="!grid-cols-1 max-w-[600px] mx-auto"
            mediaWrapperClassName="hidden"
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number" }
            ]}
            multiSelect={{
              name: "inquiryType",              label: "Type of Inquiry",              options: ["Table Reservation", "Private Event Inquiry", "General Inquiry"]
            }}
            textarea={{ name: "message", placeholder: "Tell us about your reservation or event needs...", rows: 4, required: true }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              {
                title: "Menu",                items: [
                  { label: "Dining", href: "#services" },
                  { label: "Drinks", href: "#services" },
                  { label: "Private Events", href: "#services" },
                  { label: "Catering", href: "#contact" }
                ]
              },
              {
                title: "Company",                items: [
                  { label: "About Us", href: "#about" },
                  { label: "Our Team", href: "#team" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "FAQs", href: "#faq" }
                ]
              },
              {
                title: "Contact",                items: [
                  { label: "(555) 123-4567", href: "tel:5551234567" },
                  { label: "hello@iconicrestobar.com", href: "mailto:hello@iconicrestobar.com" },
                  { label: "123 Main St, Anytown, CA", href: "#contact" }
                ]
              }
            ]}
            bottomLeftText="© 2026 Iconic Resto Bar"
            bottomRightText="All rights reserved"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
