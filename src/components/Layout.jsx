import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Introduction' },
  { to: '/why', label: 'Why Meter Choice' },
  { to: '/science', label: 'Science' },
  { to: '/claims', label: 'Claim vs. Fact' },
  { to: '/action', label: 'Take Action' },
  { to: '/references', label: 'References' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-navy-800 via-gold-500 to-navy-800" />

      {/* Navigation */}
      <header className="bg-navy-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center group-hover:bg-gold-400 transition-colors">
                <Shield className="w-6 h-6 text-navy-900" />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold font-serif leading-tight">Meter Choice</div>
                <div className="text-xs text-navy-300 tracking-wider uppercase">for Pennsylvanians</div>
              </div>
            </NavLink>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gold-500 text-navy-900'
                        : 'text-navy-200 hover:text-white hover:bg-navy-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-navy-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-navy-700">
            <nav className="px-4 py-3 space-y-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gold-500 text-navy-900'
                        : 'text-navy-200 hover:text-white hover:bg-navy-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-navy-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-navy-900" />
                </div>
                <span className="text-white font-serif font-bold">Meter Choice for PA</span>
              </div>
              <p className="text-sm leading-relaxed">
                Protecting Health, Preserving Rights, Providing Options
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <a href="mailto:pasafetech@gmail.com" className="text-sm hover:text-gold-400 transition-colors block">pasafetech@gmail.com</a>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Connect</h4>
              <a href="https://www.pasafetech.org" target="_blank" rel="noopener noreferrer" className="text-sm text-gold-400 hover:text-gold-300 transition-colors block mt-1">
                www.pasafetech.org
              </a>
            </div>
          </div>
          <div className="border-t border-navy-700 mt-8 pt-8 text-center text-xs text-navy-500">
            PA Senate Bill 600 &mdash; Meter Choice for Pennsylvanians
          </div>
        </div>
      </footer>
    </div>
  )
}
