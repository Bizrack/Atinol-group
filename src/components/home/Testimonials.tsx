import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const TESTIMONIALS = [
  {
    quote:
      "T.A.G. Corp provided clear, practical guidance on our Zero Trust rollout. We got solutions that actually scale.",
    author: "IT Director, Mid-size Enterprise",
  },
  {
    quote:
      "Fast response and hands-on expertise. Our security posture improved significantly after working with their team.",
    author: "CISO, Technology Company",
  },
  {
    quote:
      "Working directly with experienced leadership made all the difference. No runaround—just results.",
    author: "Operations Lead, Growing Startup",
  },
];

export function Testimonials() {
  return (
    <Section
      title="What Clients Say"
      subtitle="Trusted by organizations who take security seriously."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map((t, i) => (
          <Card key={i} as="blockquote" variant="glass" className="p-6 sm:p-8">
            <p className="text-atinol-dark italic mb-6 text-base sm:text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <footer className="text-sm sm:text-base text-atinol-muted">— {t.author}</footer>
          </Card>
        ))}
      </div>
    </Section>
  );
}
