import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Contact | The Atinol Group",
  description:
    "Get in touch with T.A.G. Corp. Send a message or reach us directly by email or phone.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mt-16 pt-10 pb-10 sm:pt-12 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg">
            Send us a message or reach us directly. We&apos;ll respond as soon as we can.
          </p>
        </div>
      </section>

      <Section variant="glass">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
          <p className="text-atinol-muted text-center text-lg">
            Use the form below to send a message, or use the contact details to
            email or call us.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Send us a message — form card */}
            <div>
              <h2 className="text-xl font-semibold text-atinol-dark mb-4">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Reach us directly — compact card beside form */}
            <div>
              <h2 className="text-xl font-semibold text-atinol-dark mb-4">
                Reach us directly
              </h2>
              <Card variant="glass" className="p-5">
                <ul className="space-y-3 text-sm">
                  <li>
                    <span className="block font-medium text-atinol-muted mb-0.5">
                      Email
                    </span>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-atinol-teal font-medium hover:underline break-all"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  {SITE.phone ? (
                    <li>
                      <span className="block font-medium text-atinol-muted mb-0.5">
                        Phone
                      </span>
                      <a
                        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                        className="text-atinol-teal font-medium hover:underline"
                      >
                        {SITE.phone}
                      </a>
                    </li>
                  ) : null}
                  <li>
                    <span className="block font-medium text-atinol-muted mb-0.5">
                      LinkedIn
                    </span>
                    <a
                      href={SITE.linkedInCompany}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-atinol-teal font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Company page
                      <span aria-hidden>↗</span>
                    </a>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
