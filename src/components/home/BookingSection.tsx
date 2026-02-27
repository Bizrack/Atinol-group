import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function BookingSection() {
  return (
    <Section
      id="contact"
      title="Ready to Get Started?"
      subtitle="Book a consultation and let our team help you build a security strategy that scales."
      variant="glass"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-atinol-dark mb-8 sm:mb-10 text-base sm:text-lg md:text-xl leading-relaxed">
          Whether you need help developing a cybersecurity strategy, implementing
          secure networks, or responding to a security incident, we have the
          expertise to help you achieve your goals.
        </p>
        <Button href="/book" className="text-base sm:text-lg px-8 py-4">
          Book a Consultation
        </Button>
      </div>
    </Section>
  );
}
