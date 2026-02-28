import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Book a Consultation | The Atinol Group",
  description:
    "Schedule a consultation with T.A.G. Corp. Name, email, phone (optional), and a short service request description.",
};

export default function BookPage() {
  return (
    <>
      <section className="mt-16 pt-10 pb-10 sm:pt-12 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 text-white">
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

      <Section variant="glass">
        <div className="max-w-4xl mx-auto">
          <p className="text-atinol-muted text-center text-lg mb-8 md:mb-10">
            Share your contact details and a short description. We need: name,
            email, phone (optional), and what you&apos;re looking for.
          </p>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
            {/* Send request — form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-brand mb-6">
                Send a request
              </h2>
              <ContactForm autoFocus />
            </div>

            {/* Or schedule directly — card */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-brand mb-6">
                Or schedule directly
              </h2>
              <Card variant="glass" className="border-l-4 border-l-atinol-teal">
                <p className="text-atinol-muted text-sm mb-6">
                  Prefer to pick a time? Open our calendar to book a slot, or
                  email us to arrange a call.
                </p>
                <a
                  href={SITE.calendarUrl}
                  className="inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-semibold border-2 border-atinol-teal text-atinol-teal hover:bg-atinol-teal/10 transition-colors mb-4"
                >
                  Open calendar to book →
                </a>
                <p className="text-atinol-muted text-sm">
                  Or email:{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-atinol-teal font-medium hover:underline"
                  >
                    {SITE.email}
                  </a>
                </p>
                {SITE.calendarUrl === "#" && (
                  <p className="text-xs text-atinol-muted mt-4 pt-4 border-t border-white/20">
                    Set <code className="bg-white/50 px-1 rounded">calendarUrl</code> in{" "}
                    <code className="bg-white/50 px-1 rounded">site-config.ts</code> for Calendly or Cal.com.
                  </p>
                )}
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
