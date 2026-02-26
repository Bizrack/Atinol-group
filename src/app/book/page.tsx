import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Book a Consultation | The Atinol Group",
  description:
    "Schedule a consultation with T.A.G. Corp. Name, email, phone (optional), and a short service request description.",
};

export default function BookPage() {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-atinol-dark text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book a Consultation
          </h1>
          <p className="text-slate-300 text-lg">
            Tell us about your needs. We&apos;ll get back to you to schedule a
            call or meeting.
          </p>
        </div>
      </section>

      <Section variant="highlight">
        <div className="max-w-xl mx-auto">
          <p className="text-atinol-muted text-center mb-8">
            Only contact info—no CC or address. We need: name, email, phone
            (optional), and a short service request description.
          </p>
          <ContactForm />
        </div>
      </Section>

      <Section title="Or schedule directly" id="calendar">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-atinol-muted mb-6">
            Prefer to pick a time? Use the link below to open our calendar and
            book a slot. You can also email us at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-atinol-teal font-medium hover:underline"
            >
              {SITE.email}
            </a>
            .
          </p>
          <a
            href={SITE.calendarUrl}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold border-2 border-atinol-teal text-atinol-teal hover:bg-atinol-teal/10 transition-colors"
          >
            Open calendar to book →
          </a>
          {SITE.calendarUrl === "#" && (
            <p className="text-sm text-atinol-muted mt-4">
              Set <code className="text-xs bg-slate-200 px-1 rounded">calendarUrl</code> in{" "}
              <code className="text-xs bg-slate-200 px-1 rounded">src/lib/site-config.ts</code> for Calendly or Cal.com.
            </p>
          )}
        </div>
      </Section>

      <section className="py-12 px-4 bg-slate-50 text-center">
        <p className="text-atinol-muted text-sm mb-2">
          Prefer to reach out directly?
        </p>
        <a
          href={`mailto:${SITE.email}`}
          className="text-atinol-teal font-medium hover:underline"
        >
          {SITE.email}
        </a>
      </section>
    </>
  );
}
