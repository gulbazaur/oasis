import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

const navLinks = [
  { path: '/', title: 'OASIS Spielersperre' },
  { path: '/oasis-sperren-lassen-online', title: 'OASIS Sperren Lassen Online' },
  { path: '/oasis-spielersperre-aufheben', title: 'OASIS Spielersperre Aufheben' },
  { path: '/oasis-sperre-auch-im-ausland', title: 'OASIS Sperre im Ausland' },
  { path: '/online-casino-ohne-oasis', title: 'Online Casino ohne OASIS' },
  { path: '/oasis-lotto', title: 'OASIS Lotto' },
  { path: '/online-casino-trotz-oasis-sperre', title: 'Online Casino trotz OASIS Sperre' },
  { path: '/oasis-storung', title: 'OASIS Störung' },
  { path: '/oasis-24-stunden-sperre-aufheben', title: 'OASIS 24 Stunden Sperre Aufheben' },
  { path: '/online-casino-ohne-oasis-mit-paysafecard', title: 'Online Casino ohne OASIS mit Paysafecard' },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">OASIS Info</Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Menu size={24} />
            </button>

            {/* Desktop Dropdown */}
            <div className="hidden md:block relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
              >
                <span>Menü</span>
                <ChevronDown size={20} className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-blue-900 z-50`}>
              <ul className="space-y-2 p-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="block hover:text-blue-200 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Über uns</h3>
              <p>Informationsportal über das OASIS Spielersperrsystem in Deutschland.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <p>Bei Fragen zum OASIS System kontaktieren Sie bitte die zuständige Behörde.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} OASIS Info. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}