import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 tracking-tight hover:opacity-90 transition-opacity"
        >
          Koli<span className="text-gray-800">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative py-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
            >
              {item.name}
              {/* Hover & Active Underline Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2.5px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Toggle (Pure CSS Hidden Checkbox) */}
        <div className="md:hidden flex items-center">
          <label htmlFor="menu-toggle" className="cursor-pointer p-2 text-gray-600 hover:text-gray-900">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </label>
        </div>
      </nav>

      {/* Hidden Checkbox for Mobile Toggle */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      {/* Mobile Menu Dropdown (Controlled via CSS Peer) */}
      <div className="hidden peer-checked:block md:hidden bg-white border-b border-gray-200 px-6 pt-2 pb-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
}