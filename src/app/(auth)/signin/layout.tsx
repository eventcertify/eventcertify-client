import { Metadata } from "next";
import Page from "./page";   // Import your Demo's page

// Get the base URL from the environment variable or default to localhost for development
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: 'Sign in - EventCertify',
  description: "Sign in to EventCertify to access events, manage your profile, and explore the latest updates. Join the Data Science Club at HIT!",
  // Essential meta tags
  viewport: "width=device-width, initial-scale=1",
  // Open Graph meta tags for social media
  openGraph: {
    title: 'Sign in - EventCertify',
    description: "Sign in to EventCertify to access events, manage your profile, and explore the latest updates. Join the Data Science Club at HIT!",
    url: `${baseUrl}/signin`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/ds-img.svg`,  // Path to your image in the public folder
        width: 1200,
        height: 630,
        alt: "Sign in to EventCertify",
      },
    ],
  },
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: 'Sign in - EventCertify',
    description: "Sign in to EventCertify and stay connected with the Data Science Club at HIT.",
    images: [`${baseUrl}/images/ds-img.svg`],  // Path to the image for Twitter
  },
  // Additional meta tags
  robots: "index, follow",
  themeColor: "#0A0A23", // Adjust based on EventCertify's branding color
};

export default function PageLayout(){
  return(<Page />)
};
