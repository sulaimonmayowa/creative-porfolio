import Link from 'next/link';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sulaimon-mayowa/' },
  { label: 'GitHub', href: 'https://github.com/sulaimonmayowa' },
  { label: 'Twitter', href: 'https://x.com/sulaimonmayowaA' },
  { label: 'Email', href: 'mailto:a.sulaimonmayowa@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="w-full py-16 md:py-[100px] bg-surface border-t border-on-surface/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center">
        <Link
          href="/"
          className="font-display text-display-lg-mobile md:text-display-lg font-bold text-on-surface mb-6 md:mb-8 uppercase"
        >
          SULAIMON<span className="text-primary">.</span>
        </Link>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-on-surface-variant text-body-md text-sm md:text-body-md">
          &copy; {new Date().getFullYear()} Sulaimon Mayowa .A. | Web Developer
          &amp; AI Automation Specialist
        </p>
      </div>
    </footer>
  );
}
