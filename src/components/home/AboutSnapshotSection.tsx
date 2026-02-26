import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const EXPERTISE = [
  "Zero Trust & cloud security",
  "DevSecOps programs",
  "Cybersecurity strategy & implementation",
  "Proactive monitoring & management",
];

export function AboutSnapshotSection() {
  return (
    <Section
      id="about"
      title="About T.A.G. Corp"
      subtitle="Experienced leadership. Practical guidance. Solutions that scale."
      variant="highlight"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-atinol-dark leading-relaxed mb-4">
            Founded by Ayo Asekun, an experienced cloud security professional
            with hands-on experience building Zero Trust, cloud security, and
            DevSecOps programs for growing and established organizations.
          </p>
          <p className="text-atinol-dark leading-relaxed">
            Clients work directly with experienced leadership, ensuring practical
            guidance, clear communication, and solutions designed to scale.
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
                className="flex items-center gap-2 text-atinol-dark"
              >
                <span className="w-2 h-2 rounded-full bg-atinol-teal shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Button href="/about" variant="outline">
          Full About Us →
        </Button>
      </div>
    </Section>
  );
}
