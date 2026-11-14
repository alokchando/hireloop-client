
import Link from "next/link";

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
];

export default function NavbarLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
