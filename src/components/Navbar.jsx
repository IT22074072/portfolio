export default function Navbar({
  navigationLinks,
  socialLinks,
  activeSection,
  isOpen,
  onToggle,
  onNavigate,
}) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <nav className="navbar" aria-label="Primary">
        <a className="navbar__brand" href="#home" onClick={onNavigate}>
          Dinithi Sanjana
        </a>

        <button
          type="button"
          className="navbar__toggle"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </button>

        <div
          className={isOpen ? "navbar__panel is-open" : "navbar__panel"}
          id="primary-navigation"
        >
          <ul className="navbar__links">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={
                    activeSection === link.href.slice(1)
                      ? "is-active"
                      : undefined
                  }
                  href={link.href}
                  onClick={onNavigate}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
