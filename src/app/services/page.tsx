import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { SERVICES } from "@/lib/site-config";

const SERVICE_DETAILS: Record<
  string,
  { description: string; whoFor: string; benefits: string[] }
> = {
  "it-consulting": {
    description:
      "Strategic IT consulting to align technology with your business goals and security posture. We help you make informed decisions about architecture, tools, and processes.",
    whoFor:
      "Organizations that need clarity on security strategy, technology choices, or compliance without hiring a full-time CISO.",
    benefits: [
      "Clear roadmap and priorities",
      "Vendor and tool evaluation",
      "Alignment with business objectives",
    ],
  },
  "secure-architecturing": {
    description:
      "Design and implement secure network and cloud architectures built for resilience. From Zero Trust to hybrid cloud, we build foundations that scale.",
    whoFor:
      "Teams building or modernizing infrastructure who want security built in from the start.",
    benefits: [
      "Zero Trust and defense-in-depth",
      "Cloud and hybrid design",
      "Documentation and handoff",
    ],
  },
  "risk-assessments": {
    description:
      "Identify and prioritize cybersecurity risks so you can focus resources where they matter most. We deliver actionable findings, not checklists.",
    whoFor:
      "Any organization that needs to understand where they stand and what to fix first.",
    benefits: [
      "Prioritized risk register",
      "Executive and technical views",
      "Remediation guidance",
    ],
  },
  "vulnerability-assessments": {
    description:
      "Proactive discovery of weaknesses in systems and applications before they can be exploited. Regular assessments keep your attack surface under control.",
    whoFor:
      "Teams that need ongoing visibility into vulnerabilities and patch priorities.",
    benefits: [
      "Scoped scanning and reporting",
      "Reduction of false positives",
      "Integration with your SDLC",
    ],
  },
  "incident-response": {
    description:
      "Rapid, expert response when security incidents occur. We help contain, investigate, and recover while minimizing impact and improving readiness.",
    whoFor:
      "Organizations that want a clear playbook and expert support when incidents happen.",
    benefits: [
      "24/7 readiness and playbooks",
      "Containment and forensics",
      "Post-incident review",
    ],
  },
  "monitoring-management": {
    description:
      "Ongoing monitoring and management to help you stay ahead of the curve. We treat security as a process, not a one-time project.",
    whoFor:
      "Teams that want continuous visibility and someone watching the glass.",
    benefits: [
      "Proactive alerting and tuning",
      "Regular reporting and reviews",
      "Ongoing improvement",
    ],
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

      <Section>
        <div className="space-y-20">
          {SERVICES.map((service) => {
            const detail = SERVICE_DETAILS[service.id] ?? {
              description: service.shortDesc,
              whoFor: "Organizations that need expert security and IT guidance.",
              benefits: ["Custom solutions", "Proven expertise", "Clear communication"],
            };
            return (
              <article
                key={service.id}
                id={service.slug}
                className="scroll-mt-24"
              >
                <Card variant="glass" className="max-w-4xl mx-auto">
                  <CardTitle as="h2">{service.name}</CardTitle>
                  <p className="text-atinol-muted mb-6">{detail.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-atinol-dark mb-2">
                      Who it&apos;s for
                    </h4>
                    <p className="text-atinol-muted text-sm">
                      {detail.whoFor}
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-atinol-dark mb-2">
                      Benefits
                    </h4>
                    <ul className="list-disc list-inside text-atinol-muted text-sm space-y-1">
                      {detail.benefits.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <Button href="/book">Book Consultation</Button>
                </Card>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
