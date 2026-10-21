import type { IconType } from "react-icons";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
  FaBriefcase,
  FaFacebookF,
} from "react-icons/fa6";

export type ContactLink = {
  label: string;
  href: string;
  icon: IconType;
  /** Short hint shown under the label */
  hint: string;
  external?: boolean;
};

export const profile = {
  name: "Md Raiyan Alam",
  handle: "@mdraiyanalam95",
};

export const callLink: ContactLink = {
  label: "Call me",
  href: "tel:+8801722465849",
  icon: FaPhone,
  hint: "One tap, no number to copy",
};

export const quickLinks: (ContactLink & { tone: "wa" | "mail" })[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/mdraiyanalam95",
    icon: FaWhatsapp,
    hint: "Chat now",
    external: true,
    tone: "wa",
  },
  {
    label: "Email",
    href: "mailto:mdraiyanalam95@gmail.com",
    icon: FaEnvelope,
    hint: "Write to me",
    tone: "mail",
  },
];

export const profileLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mdraiyanalam/",
    icon: FaLinkedinIn,
    hint: "linkedin.com/in/mdraiyanalam",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/mdraiyanalam",
    icon: FaGithub,
    hint: "github.com/mdraiyanalam",
    external: true,
  },
  {
    label: "Portfolio",
    href: "https://mdraiyanalam.github.io/mdraiyanalam/",
    icon: FaGlobe,
    hint: "mdraiyanalam.github.io",
    external: true,
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/users/mdraiyanalam/",
    icon: FaBriefcase,
    hint: "Hire me on Fiverr",
    external: true,
  },
  {
    label: "Spark.Play",
    href: "https://www.facebook.com/sparks.play.bd",
    icon: FaFacebookF,
    hint: "facebook.com/sparks.play.bd",
    external: true,
  },
];
