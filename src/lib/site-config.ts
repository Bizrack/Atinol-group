export const SITE = {
  name: "The Atinol Group",
  legalName: "The Atinol Group Corp (T.A.G. Corp)",
  tagline: "Safeguarding Your Assets in a Cyber World",
  email: "tagcorp@theatinolgroup.com",
  /** Optional; leave empty to hide phone. Use for click-to-call on mobile (e.g. "+1 234 567 8900"). */
  phone: "",
  domain: "https://theatinolgroup.com/",
  linkedInCompany: "https://www.linkedin.com/company/91166117",
  linkedInCEO: "https://www.linkedin.com/in/ayo-asekun",
  ceoName: "Ayo Asekun",
  /** Calendly (or Cal.com) URL for Book page – embed and link */
  calendarUrl: "https://calendly.com/mayowasamuel86/tag-consultation",
} as const;

/** Condensed “about” from client brief (About & Services). */
export const ABOUT_CONDENSED = [
  "At T.A.G. Corp., we pride ourselves on providing top-notch expertise and customized solutions to meet the unique needs of each of our clients.",
  "Our comprehensive suite of services includes IT consulting, secure architecturing, cybersecurity risk assessments, vulnerability assessments, incident response, and more. Whether you need help developing a cybersecurity strategy, implementing secure networks, or responding to a security incident, we have the expertise and experience to help you achieve your goals.",
  "At our company, we believe that cybersecurity is not just a compliance requirement, but an ongoing process that requires constant attention and monitoring. That's why we offer proactive monitoring and management services to help our clients stay ahead of the curve and keep their business safe from cyber threats.",
] as const;

/** About the Founder (client brief). */
export const FOUNDER_ABOUT =
  "Founded by Ayo Asekun, an experienced cloud security professional, with hands-on experience building Zero Trust, cloud security, and DevSecOps programs for growing &/or established organizations. Clients work directly with experienced leadership, ensuring practical guidance, clear communication, and solutions designed to scale. When you partner with T.A.G. Corp, you are in capable hands & know your security strategy is guided by proven experience.";

/** Use for tel: links so mobile devices can dial (strips spaces, keeps + and digits). */
export function getTelHref(phone: string): string {
  const tel = phone.replace(/[\s\-().]/g, "").replace(/^0+/, "");
  return `tel:${tel}`;
}

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "it-consulting",
    name: "IT Consulting",
    shortDesc:
      "Strategic guidance to align technology with your business goals and security posture.",
    slug: "it-consulting",
  },
  {
    id: "secure-architecturing",
    name: "Secure Architecturing",
    shortDesc:
      "Design and implement secure network and cloud architectures built for resilience.",
    slug: "secure-architecturing",
  },
  {
    id: "risk-assessments",
    name: "Cybersecurity Risk Assessments",
    shortDesc:
      "Identify and prioritize risks so you can focus resources where they matter most.",
    slug: "risk-assessments",
  },
  {
    id: "vulnerability-assessments",
    name: "Vulnerability Assessments",
    shortDesc:
      "Proactive discovery of weaknesses before they can be exploited.",
    slug: "vulnerability-assessments",
  },
  {
    id: "incident-response",
    name: "Incident Response",
    shortDesc:
      "Rapid, expert response when security incidents occur to minimize impact.",
    slug: "incident-response",
  },
  {
    id: "monitoring-management",
    name: "Proactive Monitoring & Management",
    shortDesc:
      "Ongoing monitoring and management to keep your business ahead of threats.",
    slug: "monitoring-management",
  },
] as const;

/** Hero "Focus Areas" panel (right side, Blackoak-style) */
export const HERO_FOCUS_ITEMS = [
  { title: "IT Consulting", short: "Strategy, architecture, compliance", icon: "💼" },
  { title: "Secure Architecture", short: "Zero Trust, cloud, hybrid", icon: "🏗️" },
  { title: "Risk & Vulnerability", short: "Assessments, prioritization", icon: "🔍" },
  { title: "Incident & Monitoring", short: "Response, proactive management", icon: "🛡️" },
] as const;

export const WHY_CHOOSE_US = [
  "Experienced team with hands-on Zero Trust, cloud security, and DevSecOps experience",
  "Tailored solutions designed for your unique needs and scale",
  "Fast response and clear communication from leadership",
  "Secure and reliable systems built on industry best practices",
] as const;
