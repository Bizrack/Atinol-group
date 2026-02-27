import { Button } from "@/components/ui/Button";

export function ShortDescriptionSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-atinol-dark leading-relaxed">
          At T.A.G. Corp., we pride ourselves on providing top-notch expertise
          and customized solutions to meet the unique needs of each of our
          clients. Our comprehensive suite of services includes IT consulting,
          secure architecturing, cybersecurity risk assessments, vulnerability
          assessments, incident response, and more.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/book">Book a Consultation</Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
