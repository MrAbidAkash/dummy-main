
import "@/styles/index.scss";

import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/assets/img/favicon.png" />
        <meta name="description" content="Leads360 - Your path to scalable growth and digital transformation. Empowering small businesses with comprehensive digital solutions including Digital Marketing Strategy & Execution, Marketing CRM Implementation & Optimization, and Business Systems & Automation." />
        <meta name="keywords" content="digital transformation, small business, digital marketing, CRM implementation, business automation, SEO, social media marketing, scalable growth" />
        <meta name="author" content="Leads360" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        <title>Leads360 - Digital Transformation Company for Small Businesses</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
