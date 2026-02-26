import { Section } from "@/components/ui/Section";
import { WHY_CHOOSE_US } from "@/lib/site-config";

const icons = [
  "👤",
  "🎯",
  "⚡",
  "🔒",
];

export function WhyChooseUs() {
  return (
    <Section
      title="Why Choose Us"
      subtitle="Partner with a team that puts your security first."
      variant="dark"
    >
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WHY_CHOOSE_US.map((item, i) => (
          <li
            key={i}
            className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <span className="text-2xl shrink-0" aria-hidden>
              {icons[i]}
            </span>
            <p className="text-slate-200 text-sm leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
