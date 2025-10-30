export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 relative">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <rect x="16" y="4" width="8" height="32" fill="currentColor" className="text-amber-400" />
                  <rect x="4" y="16" width="32" height="8" fill="currentColor" className="text-amber-400" />
                  <circle cx="20" cy="20" r="6" fill="currentColor" className="text-amber-300" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">The Addis</h3>
            </div>
            <p className="text-background/70 text-sm">
              Where Ethiopian heritage meets refined luxury in the heart of Addis Ababa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Dining
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>+251 11 123 4567</li>
              <li>reservations@theaddis.com</li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <p>&copy; 2025 The Addis. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
