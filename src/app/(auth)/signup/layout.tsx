import { Metadata } from "next";
import Page from "./page";   // Import your Sign Up page

// Get the base URL from the environment variable or default to localhost for development
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: 'Sign up - EventCertify',
  description: "Create an account with EventCertify to participate in events, explore resources, and stay updated with the Data Science Club at HIT.",
  // Essential meta tags
  viewport: "width=device-width, initial-scale=1",
  // Open Graph meta tags for social media
  openGraph: {
    title: 'Sign up - EventCertify',
    description: "Create an account with EventCertify to participate in events, explore resources, and stay updated with the Data Science Club at HIT.",
    url: `${baseUrl}/signup`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/ds-img.svg`,  // Path to your image in the public folder
        width: 1200,
        height: 630,
        alt: "Sign up for EventCertify",
      },
    ],
  },
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: 'Sign up - EventCertify',
    description: "Join EventCertify and access exclusive resources and events hosted by the Data Science Club at HIT.",
    images: [`${baseUrl}/images/ds-img.svg`],  // Path to the image for Twitter
  },
  // Additional meta tags
  robots: "index, follow",
  themeColor: "#0E1116", // Adjust based on EventCertify's branding color
};

export default function PageLayout(){
  return(<Page />)
};
