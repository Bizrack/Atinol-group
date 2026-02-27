import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const EXPERTISE = [
  "Zero Trust & cloud security",
  "DevSecOps programs",
  "Cybersecurity strategy & secure networks",
  "Incident response & proactive monitoring",
];

export function AboutSnapshot() {
  return (
    <Section
      id="about"
      title="About T.A.G. Corp"
      subtitle="Experienced leadership. Practical guidance. Solutions designed to scale."
      variant="glass"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative aspect-[4/3] min-h-[240px] rounded-xl overflow-hidden bg-atinol-dark/5 order-2 md:order-1">
          <ImageWithFallback
            src="/assets/about.jpg"
            alt="T.A.G. Corp expertise in cybersecurity"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <p className="text-atinol-dark leading-relaxed text-base sm:text-lg">
            Founded by Ayo Asekun, an experienced cloud security professional
            with hands-on experience building Zero Trust, cloud security, and
            DevSecOps programs for growing and established organizations.
          </p>
          <p className="text-atinol-muted leading-relaxed text-base sm:text-lg">
            Clients work directly with experienced leadership, ensuring
            practical guidance, clear communication, and solutions designed to
            scale. When you partner with T.A.G. Corp, you are in capable hands.
          </p>
          <h3 className="font-semibold text-atinol-dark text-lg pt-2">
            Key expertise areas
          </h3>
          <ul className="space-y-3">
            {EXPERTISE.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-atinol-muted text-base sm:text-lg transition-colors hover:text-atinol-teal"
              >
                <span className="w-2 h-2 rounded-full bg-atinol-teal shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button href="/about" variant="outline" className="mt-8">
            Full About page →
          </Button>
        </div>
      </div>
    </Section>
  );
}
