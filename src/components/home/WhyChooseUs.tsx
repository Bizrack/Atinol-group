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
      variant="glass-dark"
    >
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {WHY_CHOOSE_US.map((item, i) => (
          <li
            key={i}
            className="flex gap-4 p-5 sm:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            <span className="text-2xl sm:text-3xl shrink-0" aria-hidden>
              {icons[i]}
            </span>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
