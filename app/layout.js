import './globals.css';
import NetworkToggle from '@/components/ui/NetworkToggle';

export const metadata = {
  title: {
    default: 'Sulaimon Mayowa .A. | Web Developer & AI Automation Specialist',
    template: '%s | Sulaimon Mayowa .A.',
  },
  description:
    'I help startups and SMEs automate operations, increase efficiency, and scale revenue using custom web applications and AI-driven automation systems.',
  keywords: [
    'web developer',
    'AI automation',
    'React',
    'Next.js',
    'WordPress',
    'portfolio',
    'Sulaimon Mayowa',
  ],
  authors: [{ name: 'Sulaimon Mayowa .A.' }],
  openGraph: {
    title: 'Sulaimon Mayowa .A. | Web Developer & AI Automation Specialist',
    description:
      'I help startups and SMEs automate operations, increase efficiency, and scale revenue using custom web applications and AI-driven automation systems.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logos/sm-favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logos/sm-favicon.png" type="image/png" />
      </head>
      <body className="font-body antialiased" style={{ fontFamily: "'Inter', sans-serif" }} suppressHydrationWarning>
        {children}
        <NetworkToggle />
      </body>
    </html>
  );
}
