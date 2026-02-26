import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

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
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-atinol-dark leading-relaxed mb-4">
            Founded by Ayo Asekun, an experienced cloud security professional
            with hands-on experience building Zero Trust, cloud security, and
            DevSecOps programs for growing and established organizations.
          </p>
          <p className="text-atinol-muted leading-relaxed">
            Clients work directly with experienced leadership, ensuring
            practical guidance, clear communication, and solutions designed to
            scale. When you partner with T.A.G. Corp, you are in capable hands.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-atinol-dark mb-3">
            Key expertise areas
          </h3>
          <ul className="space-y-2">
            {EXPERTISE.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-atinol-muted"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-atinol-teal" />
                {item}
              </li>
            ))}
          </ul>
          <Button href="/about" variant="outline" className="mt-6">
            Full About page →
          </Button>
        </div>
      </div>
    </Section>
  );
}
