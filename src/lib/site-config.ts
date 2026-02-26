export const SITE = {
  name: "The Atinol Group",
  legalName: "The Atinol Group Corp (T.A.G. Corp)",
  tagline: "Safeguarding Your Assets in a Cyber World",
  email: "tagcorp@theatinolgroup.com",
  domain: "https://theatinolgroup.com",
  linkedInCompany: "https://www.linkedin.com/company/91166117",
  linkedInCEO: "https://www.linkedin.com/in/ayo-asekun",
  ceoName: "Ayo Asekun",
  /** Replace with your Calendly/Cal.com URL for Book page calendar option */
  calendarUrl: "#",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book Consultation" },
  { href: "/#contact", label: "Contact" },
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

export const WHY_CHOOSE_US = [
  "Experienced team with hands-on Zero Trust, cloud security, and DevSecOps experience",
  "Tailored solutions designed for your unique needs and scale",
  "Fast response and clear communication from leadership",
  "Secure and reliable systems built on industry best practices",
] as const;
