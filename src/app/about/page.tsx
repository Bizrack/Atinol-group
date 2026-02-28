import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "About Us | The Atinol Group",
  description:
    "Founded by Ayo Asekun. T.A.G. Corp delivers expert cloud security, Zero Trust, and DevSecOps with hands-on leadership.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mt-16 pt-10 pb-10 sm:pt-12 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About The Atinol Group
          </h1>
          <p className="text-slate-300 text-lg">
            {SITE.tagline}
          </p>
        </div>
      </section>

      {/* Company Story + Mission & Vision in a clearer layout */}
      <Section id="story">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Company Story — takes 3 cols on large screens */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient-brand mb-6">
              Company Story
            </h2>
            <Card variant="glass" className="!p-6 sm:!p-8">
              <p className="text-atinol-dark text-lg leading-relaxed mb-4">
                <span className="font-semibold">Founded by {SITE.ceoName}</span>
                —an experienced cloud security professional with hands-on
                experience building Zero Trust, cloud security, and DevSecOps
                programs for growing and established organizations.
              </p>
              <p className="text-atinol-muted leading-relaxed">
                At T.A.G. Corp., we pride ourselves on providing top-notch
                expertise and customized solutions to meet the unique needs of
                each of our clients. Our comprehensive suite of services
                includes IT consulting, secure architecturing, cybersecurity
                risk assessments, vulnerability assessments, incident response,
                and more. Whether you need help developing a cybersecurity
                strategy, implementing secure networks, or responding to a
                security incident, we have the expertise and experience to help
                you achieve your goals.
              </p>
            </Card>
          </div>

          {/* Mission & Vision — 2 cols on large screens, stacked cards */}
          <div id="mission" className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient-brand">
              Mission & Vision
            </h2>
            <Card variant="glass" as="article" className="border-l-4 border-l-atinol-teal">
              <CardTitle as="h3">Mission</CardTitle>
              <p className="text-atinol-muted leading-relaxed text-sm sm:text-base">
                To safeguard our clients&apos; assets in a cyber world by
                delivering practical, scalable security solutions and working
                directly with experienced leadership—no runaround, just results.
              </p>
            </Card>
            <Card variant="glass" as="article" className="border-l-4 border-l-atinol-green">
              <CardTitle as="h3">Vision</CardTitle>
              <p className="text-atinol-muted leading-relaxed text-sm sm:text-base">
                We believe cybersecurity is not just a compliance requirement
                but an ongoing process. We offer proactive monitoring and
                management so our clients stay ahead of the curve and keep
                their business safe from cyber threats.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section title="Experience" id="experience" variant="glass-dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-center">
            {/* Main message */}
            <div className="md:col-span-3">
              <p className="text-slate-200 leading-relaxed text-lg">
                Clients work directly with experienced leadership, ensuring
                practical guidance, clear communication, and solutions designed
                to scale. When you partner with T.A.G. Corp, you are in capable
                hands and know your security strategy is guided by proven
                experience.
              </p>
            </div>
            {/* Leadership + CTA card */}
            <div className="md:col-span-2">
              <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 text-center">
                <p className="text-white font-semibold text-lg mb-0.5">
                  {SITE.ceoName}
                </p>
                <p className="text-slate-300 text-sm mb-4">Founder & CEO</p>
                <a
                  href={SITE.linkedInCEO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-atinol-teal-light hover:underline text-sm mb-6"
                >
                  LinkedIn profile ↗
                </a>
                <Button
                  href="/book"
                  variant="primary"
                  className="!text-white border-0 w-full sm:w-auto"
                >
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
