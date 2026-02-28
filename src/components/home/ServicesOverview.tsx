import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardLink } from "@/components/ui/Card";
import { SERVICES } from "@/lib/site-config";

export function ServicesOverview() {
  return (
    <Section
      id="services"
      title="Services Overview"
      subtitle="Comprehensive cybersecurity and IT solutions tailored to your needs."
      variant="glass"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((service, i) => (
          <div
            key={service.id}
            className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-duration:0.5s]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Card as="article" variant="glass" className="p-6 sm:p-8 h-full">
              <CardTitle as="h3">{service.name}</CardTitle>
              <p className="text-atinol-muted text-sm sm:text-base mb-6 leading-relaxed">
                {service.shortDesc}
              </p>
              <CardLink href={`/services#${service.slug}`}>
                Learn More
              </CardLink>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
