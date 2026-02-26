import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function BookingSection() {
  return (
    <Section
      id="contact"
      title="Ready to Get Started?"
      subtitle="Book a consultation and let our team help you build a security strategy that scales."
      variant="highlight"
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="text-atinol-dark mb-6">
          Whether you need help developing a cybersecurity strategy, implementing
          secure networks, or responding to a security incident, we have the
          expertise to help you achieve your goals.
        </p>
        <Button href="/book" className="text-lg px-8 py-3">
          Book a Consultation
        </Button>
      </div>
    </Section>
  );
}
