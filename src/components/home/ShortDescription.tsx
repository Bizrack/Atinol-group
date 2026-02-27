import { Button } from "@/components/ui/Button";

export function ShortDescription() {
  return (
    <section className="pt-20 pb-14 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-md border-y border-white/20 text-atinol-dark">
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <p className="text-base sm:text-lg md:text-xl text-atinol-dark leading-relaxed mb-8 md:mb-10">
          At T.A.G. Corp., we pride ourselves on providing top-notch expertise
          and customized solutions to meet the unique needs of each of our
          clients. Our comprehensive suite of services includes IT consulting,
          secure architecturing, cybersecurity risk assessments, vulnerability
          assessments, incident response, and more.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Button href="/book">Book a Consultation</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
