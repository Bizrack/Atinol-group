import { Hero } from "@/components/home/Hero";
import { ShortDescription } from "@/components/home/ShortDescription";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BookingSection } from "@/components/home/BookingSection";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShortDescription />
      <AboutSnapshot />
      <ServicesOverview />
      <WhyChooseUs />
      <BookingSection />
      <Testimonials />
    </>
  );
}
