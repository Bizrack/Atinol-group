import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { CalendarEmbed } from "@/components/booking/CalendarEmbed";
import { SITE, SERVICES } from "@/lib/site-config";

export const metadata = {
  title: "Book a Consultation | The Atinol Group",
  description:
    "Schedule a consultation with T.A.G. Corp. Name, email, phone (optional), and a short service request description.",
};

type BookPageProps = {
  searchParams: Promise<{ service?: string }> | { service?: string };
};

function getServiceBySlug(slug: string | undefined) {
  if (!slug) return null;
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

export default async function BookPage(props: BookPageProps) {
  const searchParams = await Promise.resolve(props.searchParams);
  const serviceSlug = typeof searchParams.service === "string" ? searchParams.service : undefined;
  const service = getServiceBySlug(serviceSlug);

  const pageTitle = service
    ? `Get a quote: ${service.name}`
    : "Book a Consultation";
  const pageDescription = service
    ? `You're requesting a quote for ${service.name}. Share your contact details and a short description of your needs—we'll get back to you to schedule a call or meeting.`
    : "Tell us about your needs. We'll get back to you to schedule a call or meeting.";
  const formIntro = service
    ? `Request a quote for ${service.name}. Share your contact details and a short description of what you need.`
    : "Share your contact details and a short description. We need: name, email, phone (optional), and what you're looking for.";
  const formHeading = service ? `Request quote: ${service.name}` : "Send a request";

  return (
    <>
      <section className="mt-14 sm:mt-16 pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 px-4 sm:px-6 lg:px-8 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {pageTitle}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            {pageDescription}
          </p>
        </div>
      </section>

      <Section variant="glass">
        <div className="max-w-4xl mx-auto">
          <p className="text-atinol-muted text-center text-base sm:text-lg mb-6 sm:mb-8 md:mb-10 px-1">
            {formIntro}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* Send request — form */}
            <div className="lg:col-span-3 min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-brand mb-4 sm:mb-6">
                {formHeading}
              </h2>
              <ContactForm autoFocus formType="booking" />
            </div>

            {/* Or schedule directly — card */}
            <div className="lg:col-span-2 min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-brand mb-4 sm:mb-6">
                Or schedule directly
              </h2>
              <Card variant="glass" className="border-l-4 border-l-atinol-teal">
                <p className="text-atinol-muted text-sm mb-6">
                  Prefer to pick a time? Open our calendar to book a slot, or
                  email us to arrange a call.
                </p>
                <a
                  href={SITE.calendarUrl}
                  className="inline-flex items-center justify-center w-full rounded-xl px-4 py-3.5 min-h-[48px] font-semibold border-2 border-atinol-teal text-atinol-teal hover:bg-atinol-teal/10 active:bg-atinol-teal/15 transition-colors mb-4 touch-manipulation"
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
              </Card>
            </div>
          </div>

          {SITE.calendarUrl && (SITE.calendarUrl as string) !== "#" && (
            <div className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-brand mb-6 text-center">
                Or pick a time below
              </h2>
              <CalendarEmbed calendarUrl={SITE.calendarUrl} />
              <p className="text-center text-atinol-muted text-sm mt-4">
                <a
                  href={SITE.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-atinol-teal font-medium hover:underline"
                >
                  Open calendar in new tab →
                </a>
              </p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
