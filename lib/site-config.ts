/**
 * Site Configuration - EDIT THIS FILE to customize your site
 * All metadata, OG images, and branding read from here automatically.
 */

export const siteConfig = {
  // Basic Info
  name: "Commerce Coaching Hub by Sheetal Sarda",
  tagline: "25+ Years of Excellence in Commerce Education",
  description:
    "Expert commerce coaching for Classes 9-12, B.Com, CA/CS Foundation with 25+ years of teaching experience. Concept-based learning, personal attention, and proven results in Malda. Built with Kleap - the AI website builder.",

  // Site URL (replaced automatically on deploy)
  url: process.env.NEXT_PUBLIC_URL || "https://cch.sheetalsarda.kleap.io",

  // Layout: navbar is hidden by default. Set to true for marketing/landing sites.
  showNavbar: true,

  // Navigation links (only used when showNavbar is true)
  navLinks: [
    { title: "About", link: "#about" },
    { title: "Courses", link: "#courses" },
    { title: "Why Choose Us", link: "#why-choose" },
    { title: "Testimonials", link: "#testimonials" },
    { title: "Contact", link: "#contact" }
  ] as { title: string; link: string }[],

  // SEO Keywords
  keywords: ["keyword1", "keyword2", "keyword3"],

  // Author/Company
  author: "Your Name",
  company: "Your Company",

  // Social
  twitter: "@yourtwitter",

  // OG Image: set to a generated image URL for rich link previews
  ogImage: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/7813/images/1771308101971-sheetal-sarda-educator.jpg",

  // Theme colors for OG image (fallback when ogImage is empty)
  ogBackground: "#020022",
  ogAccent1: "#1a1a4e",
  ogAccent2: "#2d1b4e",
};

export type SiteConfig = typeof siteConfig;
