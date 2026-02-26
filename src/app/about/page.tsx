import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "About Us | The Atinol Group",
  description:
    "Founded by Ayo Asekun. T.A.G. Corp delivers expert cloud security, Zero Trust, and DevSecOps with hands-on leadership.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-atinol-dark text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About The Atinol Group
          </h1>
          <p className="text-slate-300 text-lg">
            {SITE.tagline}
          </p>
        </div>
      </section>

      <Section title="Company Story" id="story">
        <div className="prose prose-slate max-w-none">
          <p className="text-atinol-dark leading-relaxed mb-4">
            The Atinol Group Corp (T.A.G. Corp) was founded by Ayo Asekun, an
            experienced cloud security professional with hands-on experience
            building Zero Trust, cloud security, and DevSecOps programs for
            growing and established organizations.
          </p>
          <p className="text-atinol-muted leading-relaxed">
            At T.A.G. Corp., we pride ourselves on providing top-notch expertise
            and customized solutions to meet the unique needs of each of our
            clients. Our comprehensive suite of services includes IT consulting,
            secure architecturing, cybersecurity risk assessments, vulnerability
            assessments, incident response, and more. Whether you need help
            developing a cybersecurity strategy, implementing secure networks, or
            responding to a security incident, we have the expertise and
            experience to help you achieve your goals.
          </p>
        </div>
      </Section>

      <Section title="Mission & Vision" id="mission" variant="highlight">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-atinol-dark text-lg mb-2">
              Mission
            </h3>
            <p className="text-atinol-muted leading-relaxed">
              To safeguard our clients&apos; assets in a cyber world by delivering
              practical, scalable security solutions and working directly with
              experienced leadership—no runaround, just results.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-atinol-dark text-lg mb-2">
              Vision
            </h3>
            <p className="text-atinol-muted leading-relaxed">
              We believe cybersecurity is not just a compliance requirement but
              an ongoing process. We offer proactive monitoring and management
              so our clients stay ahead of the curve and keep their business safe
              from cyber threats.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Experience" id="experience" variant="dark">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-slate-200 leading-relaxed mb-6">
            Clients work directly with experienced leadership, ensuring
            practical guidance, clear communication, and solutions designed to
            scale. When you partner with T.A.G. Corp, you are in capable hands
            and know your security strategy is guided by proven experience.
          </p>
          <p className="text-slate-300 mb-6">
            <strong className="text-white">{SITE.ceoName}</strong>
            <br />
            Founder & CEO
          </p>
          <a
            href={SITE.linkedInCEO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-atinol-teal-light hover:underline"
          >
            LinkedIn profile ↗
          </a>
        </div>
      </Section>

      <section className="py-12 px-4 text-center bg-slate-50">
        <Button href="/book">Book a Consultation</Button>
      </section>
    </>
  );
}
