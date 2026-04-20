import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FloatingWhatsapp, SiteFooter, SiteNav } from "../components/SiteChrome";

const navItems = [
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

const spotlightPanels = [
  {
    image: "/gm-assets/Gostinho-Mineiro-2-.png",
    alt: "Receita mineira autêntica",
    text: "Sabor reconhecido pelo consumidor com textura, aroma e padrão que fortalecem a recompra no ponto de venda.",
    cta: "Ver produtos",
    href: "#produtos",
  },
  {
    image: "/gm-assets/Gostinho-Mineiro-3-.png",
    alt: "Produção em escala",
    text: "Estrutura preparada para atender padarias, supermercados, distribuidores e food service com consistência.",
    cta: "Falar no WhatsApp",
    href: "https://wa.me/5561985941557",
  },
  {
    image: "/gm-assets/Gostinho-Mineiro-5-.png",
    alt: "Alta rentabilidade no ponto de venda",
    text: "Linha pensada para gerar giro, ampliar variedade e aumentar valor percebido nas vitrines e freezers.",
    cta: "Ver produtos",
    href: "#produtos",
  },
  {
    image: "/gm-assets/Gostinho-Mineiro-7-.png",
    alt: "Suporte comercial e seleção inteligente",
    text: "Nosso time orienta a seleção ideal de produtos para cada perfil de operação, canal e momento de venda.",
    cta: "Falar com especialista",
    href: "https://wa.me/5561985941557",
  },
];

const products = [
  { name: "Pão de Queijo", image: "/gm-assets/Gostinho-Mineiro-Pao-de-queijo-.png", href: "/pao-de-queijo" },
  { name: "Biscoito de Queijo", image: "/gm-assets/Gostinho-Mineiro-biscoito-de-queijo-.png", href: "/biscoito-de-queijo" },
  { name: "Pão Francês", image: "/gm-assets/Gostinho-Mineiro-Pao-frances-.png", href: "/pao-frances" },
  { name: "Massas Doces", image: "/gm-assets/Gostinho-Mineiro-Massa-doce-.png", href: "/massas-doces" },
  { name: "Broas", image: "/gm-assets/Gostinho-Mineiro-Broa-.png", href: "/broa" },
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
    label: "produtos no portfólio",
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

export default function HomePage() {
  const [activeSpotlight, setActiveSpotlight] = useState(2);
  const numbersBoxRef = useRef<HTMLDivElement | null>(null);
  const [numbersParallaxStyle, setNumbersParallaxStyle] = useState<{ transform?: string }>({});

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
    let frame = 0;

    const updateNumbersParallax = () => {
      frame = 0;
      const box = numbersBoxRef.current;
      if (!box) return;

      const rect = box.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const travelRange = viewportHeight + rect.height;
      const progress = (viewportHeight - rect.top) / travelRange;
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const amplitude = window.innerWidth <= 640 ? 12 : 22;
      const translateY = (0.5 - clampedProgress) * amplitude * 2;

      setNumbersParallaxStyle({
        transform: `translate3d(0, ${translateY.toFixed(2)}px, 0)`,
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateNumbersParallax);
    };

    updateNumbersParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="gm">
      <header className="hero" id="topo">
        <SiteNav navItems={navItems} homeAsAnchor />

        <section className="hero-story" aria-label="Receita e tradição">
          <span className="hero-story-blob" aria-hidden="true" />

          <div className="hero-story-banner">
            <div className="hero-story-overlay">
              <h1>Pão de queijo, broas, massas e pães para o seu negócio vender mais</h1>
              <p>
                Produção padronizada para padarias, supermercados, distribuidores e food service com giro, variedade e consistência.
              </p>
              <div className="hero-cta-row">
                <a href="#produtos" className="hero-story-cta hero-story-cta-secondary">
                  Ver produtos
                </a>
                <a href="https://wa.me/5561985941557" className="hero-story-cta" target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </div>
              <div className="hero-proof-strip" aria-label="Indicadores principais">
                <span>+120 SKUs</span>
                <span>+7.000 empresas atendidas</span>
                <span>atendimento B2B</span>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section spotlight" id="destaques">
          <div className="shell">
            <h2>Gostinho Mineiro</h2>

            <div className="spotlight-strip">
              {spotlightPanels.map((panel, index) => (
                <article
                  key={panel.image}
                  className={`spotlight-panel p${index + 1} ${activeSpotlight === index ? "is-active" : ""}`}
                  aria-label={panel.alt}
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
                  <div className="spotlight-copy">
                    <p>{panel.text}</p>
                    <a
                      href={panel.href}
                      target={panel.href.startsWith("http") ? "_blank" : undefined}
                      rel={panel.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {panel.cta}
                    </a>
                  </div>
                </article>
              ))}
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
                Da escolha da linha ideal ao abastecimento da operação, apoiamos sua empresa com uma rotina comercial mais simples.
              </p>
              <a href="https://wa.me/5561985941557" className="hero-story-cta" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section products" id="produtos">
          <div className="shell">
            <h2 className="reveal d1">Uma linha completa para diferentes perfis de operação</h2>

            <div className="product-grid">
              {products.map((item, index) => (
                <article className={`product-card glass reveal d${(index % 4) + 1}`} key={item.name}>
                  {item.href ? (
                    <Link to={item.href} className="product-card-media" aria-label={`Ver detalhes de ${item.name}`}>
                      <img src={item.image} alt={item.name} loading="lazy" />
                    </Link>
                  ) : (
                    <img src={item.image} alt={item.name} loading="lazy" />
                  )}
                  <h3>{item.name}</h3>
                  {item.href ? <Link to={item.href} className="product-card-link">Ver detalhes</Link> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="numeros">
          <div className="shell">
            <div className="numbers-box reveal" ref={numbersBoxRef} style={numbersParallaxStyle}>
              <h2 className="reveal d2">Uma operação preparada para atender o mercado com escala</h2>
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
                Nossa equipe ajuda a montar o mix ideal para o seu canal, com foco em giro, padronização e rotina de abastecimento.
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
                    <p>Seg. a sex.: 8h30 às 16h | Sáb.: 8h30 às 13h</p>
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
                title="Mapa da unidade Brasília"
                src="https://www.google.com/maps?q=SDMC%20Q%205%20Ceil%C3%A2ndia%20Bras%C3%ADlia%20DF&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="unit-copy reveal d2">
              <h2>Onde nos encontrar</h2>
              <p className="unit-intro">
                Nossa unidade em Brasília facilita a localização da marca e o acesso ao endereço da operação.
              </p>

              <div className="unit-cards">
                <article className="unit-card glass">
                  <small>Endereço</small>
                  <p>SDMC Q 5 - Ceilândia, Brasília - DF</p>
                </article>
                <article className="unit-card glass unit-card-wide">
                  <small>Horário</small>
                  <p>Seg. a sex.: 8h30 às 16h | Sáb.: 8h30 às 13h</p>
                </article>
              </div>

              <div className="unit-actions">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=SDMC+Q+5+Ceil%C3%A2ndia+Bras%C3%ADlia+DF"
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

      <SiteFooter />
      <FloatingWhatsapp />
    </div>
  );
}
