import { Button } from "@/components/ui/Button";

export function ShortDescription() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-atinol-dark leading-relaxed mb-6">
          At T.A.G. Corp., we pride ourselves on providing top-notch expertise
          and customized solutions to meet the unique needs of each of our
          clients. Our comprehensive suite of services includes IT consulting,
          secure architecturing, cybersecurity risk assessments, vulnerability
          assessments, incident response, and more.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/book">Book a Consultation</Button>
          <Button href="/#contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
