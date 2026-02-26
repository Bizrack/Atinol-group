import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Privacy Policy | The Atinol Group",
  description: "Privacy policy and terms for The Atinol Group Corp.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-atinol-dark text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-300">
            {SITE.legalName}
          </p>
        </div>
      </section>

      <Section>
        <div className="prose prose-slate max-w-2xl mx-auto">
          <p className="text-atinol-muted leading-relaxed">
            Terms &amp; conditions and privacy practices follow industry
            standards applicable to professional IT and cybersecurity
            consulting services.
          </p>
          <p className="text-atinol-muted leading-relaxed mt-4">
            We collect only the information you provide when contacting us (e.g.
            name, email, phone, and service request description). We use it
            solely to respond to your inquiry and deliver our services. We do
            not sell or share your information with third parties for marketing.
          </p>
          <p className="text-atinol-muted leading-relaxed mt-4">
            For questions about this policy or your data, contact us at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-atinol-teal hover:underline"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
