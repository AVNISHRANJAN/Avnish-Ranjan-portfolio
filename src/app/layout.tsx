import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const siteUrl = "https://avnish.dev";
const ogImage = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Avnish Ranjan | DevOps & Automation Engineer",
    template: "%s | Avnish Ranjan",
  },
  description:
    "DevOps Engineer with hands-on experience in CI/CD pipelines, Kubernetes orchestration, and cloud infrastructure on AWS. Building scalable, zero-downtime delivery systems with Terraform and Docker.",
  keywords: [
    "DevOps Engineer",
    "CI/CD Automation",
    "Kubernetes",
    "Docker",
    "AWS",
    "Terraform",
    "GitHub Actions",
    "Infrastructure as Code",
    "ArgoCD",
    "Cloud Infrastructure",
    "Avnish Ranjan",
  ],
  authors: [{ name: "Avnish Ranjan", url: siteUrl }],
  creator: "Avnish Ranjan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Avnish Ranjan | DevOps & Automation Engineer",
    description:
      "DevOps Engineer building resilient CI/CD pipelines, Kubernetes infrastructure, and cloud-native delivery systems on AWS.",
    url: siteUrl,
    siteName: "Avnish Ranjan",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Avnish Ranjan – DevOps & Automation Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avnish Ranjan | DevOps & Automation Engineer",
    description:
      "DevOps Engineer building resilient CI/CD pipelines, Kubernetes infrastructure, and cloud-native delivery systems on AWS.",
    images: [ogImage],
    creator: "@avnishranjan", // replace with your actual handle or remove if none
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Providers>
          <Preloader />
          <CustomCursor />
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}