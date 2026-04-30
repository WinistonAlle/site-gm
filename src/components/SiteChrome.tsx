import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  href: string;
};

function SiteLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const isInternalRoute = href.startsWith("/") || href.startsWith("#");

  if (!isInternalRoute) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  const to = href.startsWith("#") ? `/${href}` : href;
  return (
    <Link to={to} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

function SocialIcons() {
  return (
    <>
      <a
        href="https://www.instagram.com/gostinhomineiro.oficial/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.7A4.05 4.05 0 0 0 3.7 7.75v8.5a4.05 4.05 0 0 0 4.05 4.05h8.5a4.05 4.05 0 0 0 4.05-4.05v-8.5a4.05 4.05 0 0 0-4.05-4.05h-8.5Zm8.95 1.55a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Z" />
        </svg>
      </a>
      <a
        href="https://www.facebook.com/gostinhomineirobsb/?locale=pt_BR"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.8 22v-8.2h2.8l.5-3.2h-3.3V8.8c0-.9.3-1.6 1.7-1.6h1.8V4.3c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.7v1.7H8v3.2h2.8V22h3Z" />
        </svg>
      </a>
      <a
        href="https://br.linkedin.com/company/gostinho-mineiro-bsb"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.2 8.6a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM4.7 19.8V10h3v9.8h-3Zm5 0V10h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3 0 3.6 2 3.6 4.6v5.5h-3v-4.9c0-1.2 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v5h-3.1Z" />
        </svg>
      </a>
      <a
        href="https://www.youtube.com/channel/UC9U2chZnaH600fvoTUFjdCA"
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21.3 7.4c-.2-.9-.9-1.5-1.8-1.8C17.8 5 12 5 12 5s-5.8 0-7.5.6c-.9.3-1.6.9-1.8 1.8C2 9.1 2 12 2 12s0 2.9.7 4.6c.2.9.9 1.5 1.8 1.8 1.7.6 7.5.6 7.5.6s5.8 0 7.5-.6c.9-.3 1.6-.9 1.8-1.8.7-1.7.7-4.6.7-4.6s0-2.9-.7-4.6ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
        </svg>
      </a>
    </>
  );
}

export function SiteNav({
  navItems,
  ctaHref = "#contato",
  ctaLabel = "Falar com especialista",
  homeAsAnchor = false,
}: {
  navItems: NavItem[];
  ctaHref?: string;
  ctaLabel?: string;
  homeAsAnchor?: boolean;
}) {
  const locationHref = homeAsAnchor ? "#unidade" : "/#unidade";

  return (
    <div className="shell">
      <nav className="nav glass reveal">
        <div className="nav-links nav-left">
          {navItems.map((item) => (
            <SiteLink key={item.href} href={item.href} className="btn btn-ghost small nav-link-pill">
              {item.label}
            </SiteLink>
          ))}
          <SiteLink href={locationHref} className="btn btn-ghost small nav-link-pill nav-locate">
            Localização
          </SiteLink>
        </div>

        {homeAsAnchor ? (
          <SiteLink href="#topo" className="brand" ariaLabel="Gostinho Mineiro">
            <img src="/gm-assets/Logo-site-Gostinho-Mineiro.png" alt="Gostinho Mineiro" />
          </SiteLink>
        ) : (
          <Link to="/" className="brand" aria-label="Gostinho Mineiro">
            <img src="/gm-assets/Logo-site-Gostinho-Mineiro.png" alt="Gostinho Mineiro" />
          </Link>
        )}

        <div className="nav-right">
          <div className="top-socials" aria-label="Redes sociais">
            <SocialIcons />
          </div>
          <a href={ctaHref} className="btn btn-primary small">
            {ctaLabel}
          </a>
        </div>

        <div className="mobile-nav-links" aria-label="Navegação rápida">
          {navItems.map((item) => (
            <SiteLink key={item.href} href={item.href} className="btn btn-ghost small nav-link-pill">
              {item.label}
            </SiteLink>
          ))}
          <SiteLink href={locationHref} className="btn btn-ghost small nav-link-pill">
            Localização
          </SiteLink>
          <a href={ctaHref} className="btn btn-primary small mobile-nav-cta">
            {ctaLabel}
          </a>
        </div>
      </nav>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer reveal">
      <div className="footer-edge" aria-hidden="true" />
      <div className="shell footer-grid">
        <article className="footer-brand">
          <div className="logo-pop">
            <img src="/gm-assets/Logo-site-Gostinho-Mineiro.png" alt="Gostinho Mineiro" />
          </div>
        </article>

        <article className="footer-links">
          <h4>Links</h4>
          <Link to="/">Início</Link>
          <Link to="/#produtos">Produtos</Link>
          <Link to="/#contato">Contato</Link>
        </article>

        <article className="footer-contact">
          <h4>Fale com a gente</h4>
          <p><a href="tel:+5561985941557">(61) 98594-1557</a></p>
          <p>SDMC Q 5 - Ceilândia, Brasília - DF</p>
          <p>Seg. a sex.: 8h30 às 16h</p>
          <div className="socials">
            <SocialIcons />
          </div>
        </article>
      </div>

      <div className="shell footer-bottom">
        <span>desenvolvido por Winiston Alle</span>
      </div>
    </footer>
  );
}

export function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/5561985941557"
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com especialista no WhatsApp"
    >
      <span className="floating-whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M20 11.9a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4A8 8 0 1 1 20 11.9Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9.4c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .6.5.2.5.7 1.6.8 1.8.1.2.1.4 0 .6l-.4.5c-.1.2-.3.3-.1.6.3.5.8 1.1 1.4 1.5.7.5 1.2.7 1.7.9.2.1.4 0 .5-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.3.1.5.2.5.5 0 .3-.2 1-.7 1.4-.5.4-1 .5-1.4.5-.4 0-1-.1-2.4-.7-1.7-.7-2.8-2-3-2.3-.2-.2-.7-.9-1-1.8-.4-.9-.4-1.7-.4-1.9 0-.2.1-.5.4-.9.2-.2.5-.6.7-.6Z" fill="currentColor" />
        </svg>
      </span>
      <span>Falar com especialista</span>
    </a>
  );
}
