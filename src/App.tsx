import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

const spotlightPanels = [
  {
    image: "/gm-assets/Gostinho-Mineiro-2-.png",
    alt: "Receita mineira autêntica",
    title: "Receita mineira autêntica",
    text: "Sabor reconhecido pelo consumidor com textura, aroma e padrão que fortalecem a recompra no ponto de venda.",
    cta: "Conheça o portfólio",
  },
  {
    image: "/gm-assets/Gostinho-Mineiro-3-.png",
    alt: "Produção em escala",
    title: "Produção em escala",
    text: "Estrutura preparada para atender padarias, supermercados, distribuidores e food service com consistência.",
    cta: "Conheça o processo",
  },
  {
    image: "/gm-assets/Gostinho-Mineiro-5-.png",
    alt: "Alta rentabilidade no ponto de venda",
    title: "Alta rentabilidade no ponto de venda",
    text: "Mix pensado para gerar giro, ampliar variedade e aumentar valor percebido nas vitrines e freezers.",
    cta: "Ver linhas de produtos",
  },
  {
    image: "/gm-assets/Gostinho-Mineiro-7-.png",
    alt: "Suporte comercial e mix inteligente",
    title: "Suporte comercial e mix inteligente",
    text: "Nosso time orienta o mix ideal para cada perfil de operação, canal e momento de venda.",
    cta: "Falar com especialista",
  },
];

const products = [
  { name: "Pão de Queijo", image: "/gm-assets/Gostinho-Mineiro-Pao-de-queijo-.png" },
  { name: "Biscoito de Queijo", image: "/gm-assets/Gostinho-Mineiro-biscoito-de-queijo-.png" },
  { name: "Pão Francês", image: "/gm-assets/Gostinho-Mineiro-Pao-frances-.png" },
  { name: "Massas Doces", image: "/gm-assets/Gostinho-Mineiro-Massa-doce-.png" },
  { name: "Broas", image: "/gm-assets/Gostinho-Mineiro-Broa-.png" },
  { name: "Salgados", image: "/gm-assets/Gostinho-Mineiro-salgados.png" },
];

const animatedStats = [
  {
    value: 7000,
    suffix: "",
    label: "empresas atendidas",
    formatter: (value: number) => new Intl.NumberFormat("pt-BR").format(value),
  },
  {
    value: 9000,
    suffix: "",
    label: "toneladas produzidas por ano",
    formatter: (value: number) => new Intl.NumberFormat("pt-BR").format(value),
  },
  {
    value: 120,
    suffix: "",
    label: "produtos no portfolio",
    formatter: (value: number) => value.toString(),
  },
];

function AnimatedStat({
  value,
  suffix,
  label,
  formatter,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  formatter: (value: number) => string;
  delay?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const statRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = statRef.current;
    if (!element) return;

    let animationFrame = 0;
    let startTime = 0;
    let timeoutId = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1400, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;

        timeoutId = window.setTimeout(() => {
          animationFrame = window.requestAnimationFrame(animate);
        }, delay);

        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(timeoutId);
    };
  }, [delay, value]);

  return (
    <article className="glass-dark reveal" ref={statRef}>
      <strong>
        <span className="stat-value">{formatter(displayValue)}</span>
        <span className="stat-suffix">{suffix}</span>
      </strong>
      <span>{label}</span>
    </article>
  );
}

function App() {
  const [activeSpotlight, setActiveSpotlight] = useState(2);
  const spotlightStripRef = useRef<HTMLDivElement | null>(null);
  const spotlightPanelRefs = useRef<Array<HTMLElement | null>>([]);
  const [spotlightFootStyle, setSpotlightFootStyle] = useState<{ marginLeft?: string; width?: string }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateSpotlightFootPosition = () => {
      if (window.innerWidth <= 980) {
        setSpotlightFootStyle({});
        return;
      }

      const strip = spotlightStripRef.current;
      const activePanel = spotlightPanelRefs.current[activeSpotlight];
      if (!strip || !activePanel) return;

      const stripRect = strip.getBoundingClientRect();
      const panelRect = activePanel.getBoundingClientRect();

      setSpotlightFootStyle({
        marginLeft: `${Math.max(0, panelRect.left - stripRect.left)}px`,
        width: `${panelRect.width}px`,
      });
    };

    updateSpotlightFootPosition();
    window.addEventListener("resize", updateSpotlightFootPosition);
    return () => window.removeEventListener("resize", updateSpotlightFootPosition);
  }, [activeSpotlight]);

  return (
    <div className="gm">
      <header className="hero" id="topo">
        <div className="shell">
          <nav className="nav glass reveal">
            <div className="nav-links nav-left">
              <a href="#unidade" className="btn btn-ghost small nav-link-pill nav-locate">
                Localização
              </a>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="btn btn-ghost small nav-link-pill">
                  {item.label}
                </a>
              ))}
            </div>

            <a href="#topo" className="brand" aria-label="Gostinho Mineiro">
              <img src="/gm-assets/Logo-site-Gostinho-Mineiro.png" alt="Gostinho Mineiro" />
            </a>

            <div className="nav-right">
              <div className="top-socials" aria-label="Redes sociais">
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
              </div>
              <a href="#contato" className="btn btn-primary small">
                Falar com especialista
              </a>
            </div>
          </nav>
        </div>

        <section className="hero-story" aria-label="Receita e tradição">
          <span className="hero-story-blob" aria-hidden="true" />

          <div className="hero-story-banner">
            <div className="hero-story-overlay">
              <h1>Uma linha completa de produtos para o seu negócio vender mais</h1>
              <p>
                Mais variedade e consistência para padarias, supermercados, distribuidores e food service.
              </p>
              <a href="https://wa.me/5561985941557" className="hero-story-cta" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section spotlight" id="destaques">
          <div className="shell">
            <h2>Conheça os diferenciais da Gostinho Mineiro</h2>

            <div className="spotlight-strip" ref={spotlightStripRef}>
              {spotlightPanels.map((panel, index) => (
                <article
                  key={panel.image}
                  className={`spotlight-panel p${index + 1} ${activeSpotlight === index ? "is-active" : ""}`}
                  aria-label={panel.alt}
                  ref={(element) => {
                    spotlightPanelRefs.current[index] = element;
                  }}
                  onMouseEnter={() => setActiveSpotlight(index)}
                  onFocus={() => setActiveSpotlight(index)}
                  onClick={() => setActiveSpotlight(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveSpotlight(index);
                    }
                  }}
                  tabIndex={0}
                >
                  <img src={panel.image} alt={panel.alt} loading="lazy" />
                </article>
              ))}
            </div>

            <div className="spotlight-foot" style={spotlightFootStyle}>
              <p>{spotlightPanels[activeSpotlight].text}</p>
              <a href="#contato">{spotlightPanels[activeSpotlight].cta}</a>
            </div>
          </div>
        </section>

        <section className="hero-story hero-story-secondary" aria-label="Produção e qualidade">
          <div
            className="hero-story-banner"
            style={{ backgroundImage: 'url("/gm-assets/Gostinho-Mineiro-5-.png")' }}
          >
            <div className="hero-story-overlay">
              <h1>Produção em escala com padrão de qualidade</h1>
              <p>
                Estrutura preparada para atender redes, distribuidores e operações de food
                service com previsibilidade, consistência e segurança no fornecimento.
              </p>
              <h3>Parceria comercial para crescer junto com o cliente</h3>
              <p>
                Da definição de mix ao suporte comercial, ajudamos sua empresa a vender mais
                com praticidade no dia a dia.
              </p>
              <a href="#contato" className="hero-story-cta">
                Atendimento comercial
              </a>
            </div>
          </div>
        </section>

        <section className="section products" id="produtos">
          <div className="shell">
            <h2 className="reveal d1">Uma linha completa para atender diferentes perfis de negócio</h2>

            <div className="product-grid">
              {products.map((item, index) => (
                <article className={`product-card glass reveal d${(index % 4) + 1}`} key={item.name}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <h3>{item.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="numeros">
          <div className="shell">
            <div className="numbers-box reveal">
              <h2 className="reveal d2">Uma operacao preparada para atender o mercado com escala</h2>
              <div className="numbers-grid">
                {animatedStats.map((stat, index) => (
                  <AnimatedStat
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    formatter={stat.formatter}
                    delay={index * 140}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contato">
          <div className="shell contact-grid">
            <div className="contact-copy reveal d1">
              <p className="eyebrow">Atendimento comercial</p>
              <h2>Vamos conversar sobre o seu negócio?</h2>
              <p className="contact-intro">
                Nossa equipe está pronta para atender padarias, supermercados, distribuidores
                e operações de food service com um mix alinhado ao seu perfil.
              </p>

              <div className="contact-list glass reveal d2">
                <h3>Nossos canais de atendimento</h3>
                <div className="contact-points">
                  <article>
                    <small>WhatsApp comercial</small>
                    <p><a href="https://wa.me/5561985941557" target="_blank" rel="noreferrer">(61) 98594-1557</a></p>
                  </article>
                  <article>
                    <small>Telefone</small>
                    <p><a href="tel:+5561985941557">(61) 98594-1557</a></p>
                  </article>
                  <article>
                    <small>Horário</small>
                    <p>Seg-Sex: 8h30 as 16h | Sab: 8h30 as 13h</p>
                  </article>
                </div>
                <div className="contact-quick-actions">
                  <a href="https://wa.me/5561985941557" className="btn btn-primary" target="_blank" rel="noreferrer">
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form glass reveal d3" onSubmit={(e) => e.preventDefault()}>
              <header className="form-head">
                <h3>Envie sua mensagem</h3>
                <p>Retornamos em breve com o melhor atendimento comercial para sua operação.</p>
              </header>
              <label>
                Nome
                <input placeholder="Escreva seu nome" />
              </label>
              <label>
                Empresa
                <input placeholder="Qual é o nome da sua empresa" />
              </label>
              <div className="two-cols">
                <label>
                  Contato
                  <input placeholder="Qual é o seu número" />
                </label>
                <label>
                  E-mail
                  <input placeholder="E-mail" />
                </label>
              </div>
              <label>
                Mensagem
                <textarea placeholder="Conte um pouco sobre seu negócio e seu interesse" rows={5} />
              </label>
              <div className="form-submit">
                <span>Resposta média em até 1 dia útil.</span>
                <button type="submit" className="btn btn-primary">
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="section unit-section" id="unidade">
          <div className="shell unit-grid">
            <div className="unit-map reveal d1">
              <iframe
                title="Mapa da unidade Brasilia"
                src="https://www.google.com/maps?q=SDMC%20Q%205%20Ceilandia%20Brasilia%20DF&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="unit-copy reveal d2">
              <h2>Onde nos encontrar</h2>
              <p className="unit-intro">
                Nossa unidade em Brasília está pronta para receber quem deseja localizar a marca com facilidade
                e encontrar o endereço da operação.
              </p>

              <div className="unit-cards">
                <article className="unit-card glass">
                  <small>Endereço</small>
                  <p>SDMC Q 5 - Ceilândia, Brasília - DF</p>
                </article>
                <article className="unit-card glass unit-card-wide">
                  <small>Horário</small>
                  <p>Seg-Sex: 8h30 as 16h | Sab: 8h30 as 13h</p>
                </article>
              </div>

              <div className="unit-actions">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=SDMC+Q+5+Ceilandia+Brasilia+DF"
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

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
            <a href="#topo">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#contato">Contato</a>
            <a href="#numeros">Nossos números</a>
          </article>

          <article className="footer-contact">
            <h4>Fale com a gente</h4>
            <p><a href="tel:+5561985941557">(61) 98594-1557</a></p>
            <p>SDMC Q 5 - Ceilândia, Brasília - DF</p>
            <p>Seg-Sex: 8h30 as 16h</p>
            <div className="socials">
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
            </div>
          </article>
        </div>

        <div className="shell footer-bottom">
          <span>desenvolvido por Winiston Alle</span>
        </div>
      </footer>

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
    </div>
  );
}

export default App;
