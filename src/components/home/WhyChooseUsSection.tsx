import { Section } from "@/components/ui/Section";
import { WHY_CHOOSE_US } from "@/lib/site-config";

export function WhyChooseUsSection() {
  return (
    <Section
      title="Why Choose Us"
      subtitle="When you partner with T.A.G. Corp, you are in capable hands."
      variant="dark"
    >
      <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {WHY_CHOOSE_US.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <span
              className="w-6 h-6 rounded-full bg-atinol-teal/30 flex items-center justify-center shrink-0 mt-0.5"
              aria-hidden
            >
              <span className="w-2 h-2 rounded-full bg-atinol-teal-light" />
            </span>
            <span className="text-slate-200">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
