import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardLink } from "@/components/ui/Card";
import { SERVICES } from "@/lib/site-config";

export function ServicesOverviewSection() {
  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Comprehensive cybersecurity and IT consulting to keep your business safe."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <Card key={service.id} as="article">
            <CardTitle as="h3">{service.name}</CardTitle>
            <p className="text-atinol-muted text-sm mb-4">
              {service.shortDesc}
            </p>
            <CardLink href={`/services#${service.slug}`}>
              Learn More
            </CardLink>
          </Card>
        ))}
      </div>
    </Section>
  );
}
