import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SERVICES } from "@/lib/site-config";

const SERVICE_DETAILS: Record<
  string,
  { description: string; whoFor: string; benefits: string[]; price?: string }
> = {
  "it-consulting": {
    description:
      "Strategic IT consulting to align technology with your business goals and security posture.",
    whoFor: "Organizations needing clarity on strategy, tools, or compliance.",
    benefits: ["Clear roadmap", "Vendor evaluation", "Business alignment"],
    price: "Custom quote",
  },
  "secure-architecturing": {
    description:
      "Design and implement secure network and cloud architectures built for resilience.",
    whoFor: "Teams building or modernizing infrastructure.",
    benefits: ["Zero Trust design", "Cloud & hybrid", "Documentation"],
    price: "Custom quote",
  },
  "risk-assessments": {
    description:
      "Identify and prioritize cybersecurity risks with actionable findings.",
    whoFor: "Any organization assessing security posture.",
    benefits: ["Risk register", "Executive views", "Remediation guidance"],
    price: "Custom quote",
  },
  "vulnerability-assessments": {
    description:
      "Proactive discovery of weaknesses before they can be exploited.",
    whoFor: "Teams needing visibility into vulnerabilities and patch priorities.",
    benefits: ["Scoped scanning", "Fewer false positives", "SDLC integration"],
    price: "Custom quote",
  },
  "incident-response": {
    description:
      "Rapid, expert response when security incidents occur.",
    whoFor: "Organizations wanting a clear playbook and expert support.",
    benefits: ["24/7 readiness", "Containment & forensics", "Post-incident review"],
    price: "Custom quote",
  },
  "monitoring-management": {
    description:
      "Ongoing monitoring and management to keep you ahead of threats.",
    whoFor: "Teams that want continuous visibility.",
    benefits: ["Proactive alerting", "Regular reviews", "Ongoing improvement"],
    price: "Custom quote",
  },
};

export const metadata = {
  title: "Services | The Atinol Group",
  description:
    "IT consulting, secure architecturing, risk and vulnerability assessments, incident response, and proactive monitoring. Tailored to your needs.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mt-16 pt-10 pb-10 sm:pt-12 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-slate-300 text-lg">
            Comprehensive cybersecurity and IT solutions tailored to your
            organization.
          </p>
        </div>
      </section>

      <Section variant="glass">
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gradient-brand mb-4">
            What we offer
          </h2>
          <p className="text-atinol-muted text-lg">
            From strategy to hands-on implementation—each service is tailored to
            your organization&apos;s needs and scale.
          </p>
        </div>

        <Card variant="glass" className="max-w-5xl mx-auto overflow-hidden border-l-4 border-l-atinol-teal">
          {/* Desktop: table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20 bg-white/10">
                  <th className="py-4 px-4 sm:px-6 font-semibold text-atinol-dark">Service</th>
                  <th className="py-4 px-4 sm:px-6 font-semibold text-atinol-dark">Description</th>
                  <th className="py-4 px-4 sm:px-6 font-semibold text-atinol-dark">Who it&apos;s for</th>
                  <th className="py-4 px-4 sm:px-6 font-semibold text-atinol-dark text-center">Price</th>
                  <th className="py-4 px-4 sm:px-6 font-semibold text-atinol-dark text-center w-40">Action</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((service) => {
                  const detail = SERVICE_DETAILS[service.id] ?? {
                    description: service.shortDesc,
                    whoFor: "Organizations needing expert security and IT guidance.",
                    benefits: [],
                    price: "Custom quote",
                  };
                  return (
                    <tr
                      key={service.id}
                      id={service.slug}
                      className="scroll-mt-24 border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-4 sm:px-6 font-medium text-atinol-dark">
                        {service.name}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-atinol-muted text-sm max-w-xs">
                        {detail.description}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-atinol-muted text-sm max-w-[200px]">
                        {detail.whoFor}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-center font-medium text-atinol-teal">
                        {detail.price ?? "Custom quote"}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-center">
                        <Button href={`/book?service=${service.slug}`} className="text-sm py-2">
                          Get quote
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile: pricing cards */}
          <div className="md:hidden divide-y divide-white/10">
            {SERVICES.map((service) => {
              const detail = SERVICE_DETAILS[service.id] ?? {
                description: service.shortDesc,
                whoFor: "Organizations needing expert security and IT guidance.",
                benefits: [],
                price: "Custom quote",
              };
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="scroll-mt-24 p-4 sm:p-6 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-atinol-dark">{service.name}</h3>
                    <span className="shrink-0 font-medium text-atinol-teal text-sm">
                      {detail.price ?? "Custom quote"}
                    </span>
                  </div>
                  <p className="text-atinol-muted text-sm mb-2">{detail.description}</p>
                  <p className="text-atinol-muted text-xs mb-4">{detail.whoFor}</p>
                  <Button href={`/book?service=${service.slug}`} className="w-full sm:w-auto">
                    Get quote
                  </Button>
                </div>
              );
            })}
          </div>
        </Card>
      </Section>

      <Section id="cta" variant="glass-dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-300 mb-8">
            Tell us about your needs and we&apos;ll help you choose the right
            approach.
          </p>
          <Button
            href="/book"
            variant="primary"
            className="!text-white border-0"
          >
            Book a Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}
