export const siteConfig = {
  name: 'Practical AI Workflows',
  shortName: 'Practical AI Workflows',
  title: 'Practical AI Workflows for Small Businesses',
  description:
    'Practical AI workflows for small businesses. Respond faster, miss fewer leads, reduce admin work, and improve process consistency using the tools you already have.',
  url: 'https://751zaid-rgb.github.io/practical-ai-workflows-site',
  basePath: '/practical-ai-workflows-site',
  locale: 'en-US',
  ogImage: '/og-card.svg',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/industries', label: 'Industries' },
    { href: '/trust-and-safety', label: 'Trust and Safety' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  primaryCta: {
    href: '/contact',
    label: 'Get a workflow audit',
  },
  secondaryCta: {
    href: '/how-it-works',
    label: 'See how it works',
  },
  contact: {
    email: 'hello@practicalaiworkflows.com',
    formMode: 'mailto',
    formAction: '',
    responseTime: 'Most inquiries get a response within 1 business day.',
  },
  analytics: {
    provider: '',
    domain: '',
  },
} as const;

export type SiteConfig = typeof siteConfig;
