import { Hero } from "@/components/home/Hero";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BookingSection } from "@/components/home/BookingSection";
// import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <ServicesOverview />
      <WhyChooseUs />
      <BookingSection />
      {/* Testimonials – uncomment when client provides testimony */}
      {/* <Testimonials /> */}
    </>
  );
}
