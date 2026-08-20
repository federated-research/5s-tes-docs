import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { FooterLogo } from "@/components/FooterLogo";
import Image from "next/image";

export const metadata = {
  title: "Five Safes TES Documentation",
  openGraph: {
    siteName: "Five Safes TES Documentation",
    type: "website",
    locale: "en_UK",
  },
  keywords: [
    "five safes",
    "five safes TES documentation",
    "TES",
    "five safes TES",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  description: "Five Safes TES Documentation",
  manifest: "/meta/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/meta/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/meta/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/meta/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/meta/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

const navbar = (
  <Navbar
    logo={<div className="flex items-center gap-2">
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <b>Five Safes TES</b>
    </div>}
  />
);
const footer = (
  <Footer>
    {" "}
    <FooterLogo />
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Banner storageKey="weave-docs-banner">
          <a href="https://docs.federated-research.com/" target="_blank">
            ❗ Documentation for Pattern and Weave has been moved to the new site❗ Go there →
          </a>
        </Banner>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          editLink={false}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
