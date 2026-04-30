import { useEffect } from "react";
import { FloatingWhatsapp, SiteFooter, SiteNav } from "./SiteChrome";

type ProductLine = {
  title: string;
  subtitle: string;
  image: string;
  nutritionImage?: string;
  description: string;
  ingredients: string;
  highlights: string[];
  specs: Array<{ label: string; value: string }>;
};

type ProductCategoryPageProps = {
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroLabel: string;
  lines: ProductLine[];
  prepTitle?: string;
  prepDescription?: string;
  prepVideo?: string;
  preparationSteps?: string[];
};

function formatList(items: string[]) {
  if (items.length <= 1) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`;
}

function summarizePackaging(values: string[]) {
  const sizes = values.flatMap((value) => value.match(/\d+(?:,\d+)?\s*(?:kg|g)/gi) ?? []);
  const uniqueSizes = Array.from(new Set(sizes.map((size) => size.replace(/\s+/g, ""))));
  return formatList(uniqueSizes) || values.join(" | ") || "Consulte a equipe";
}

export default function ProductCategoryPage({
  heroTitle,
  heroDescription,
  heroImage,
  heroLabel,
  lines,
  prepTitle,
  prepDescription,
  prepVideo,
  preparationSteps = [],
}: ProductCategoryPageProps) {
  const lineCount = lines.length;
  const packagingSet = Array.from(
    new Set(
      lines
        .flatMap((line) => line.specs)
        .filter((spec) => spec.label === "Embalagens")
        .map((spec) => spec.value),
    ),
  );
  const packagingSummary = summarizePackaging(packagingSet);
  const highlightSet = Array.from(new Set(lines.flatMap((line) => line.highlights))).slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gm product-page">
      <header className="hero product-page-hero" id="topo">
        <SiteNav
          navItems={[
            { label: "Voltar ao início", href: "/" },
            { label: "Contato", href: "/#contato" },
          ]}
          ctaHref="https://wa.me/5561985941557"
          ctaLabel="Quero esse produto"
        />

        <section className="hero-story product-hero-story" aria-label={heroLabel}>
          <span className="hero-story-blob" aria-hidden="true" />
          <div className="hero-story-banner" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-story-overlay">
              <h1>{heroTitle}</h1>
              <p>{heroDescription}</p>
              <a href="https://wa.me/5561985941557" className="hero-story-cta" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section product-summary-section">
          <div className="shell">
            <div className="product-summary-shell glass reveal">
              <div className="product-summary-copy">
                <p className="eyebrow">Resumo da linha</p>
                <h2>{heroTitle}</h2>
                <p>{heroDescription}</p>
                <div className="product-summary-actions">
                  <a href="#linhas" className="btn btn-ghost">
                    Ver produtos
                  </a>
                  <a href="https://wa.me/5561985941557" className="btn btn-primary" target="_blank" rel="noreferrer">
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="product-summary-visual" aria-hidden="true">
                <span className="product-summary-visual-glow" />
                <img src={heroImage} alt="" loading="lazy" />
              </div>

              <div className="product-summary-metrics" aria-label="Resumo comercial da linha">
                <article className="product-summary-metric-main">
                  <small>Linhas disponíveis</small>
                  <strong>{lineCount}</strong>
                  <span>opções comerciais para diferentes rotinas de venda</span>
                </article>
                <article>
                  <small>Embalagens</small>
                  <strong>{packagingSummary}</strong>
                </article>
                <article>
                  <small>Destaques</small>
                  <div className="product-summary-chips">
                    {highlightSet.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section broa-section">
          <div className="shell">
            <div className="broa-grid broa-grid-single" id="linhas">
              {lines.map((line, index) => (
                <article className={`broa-card glass-soft reveal d${(index % 2) + 1}`} key={line.title}>
                  <div className="broa-card-head">
                    <div>
                      <p className="broa-kicker">{line.subtitle}</p>
                      <h2>{line.title}</h2>
                    </div>
                    <span className="broa-badge">Linha ativa</span>
                  </div>

                  <p className="broa-card-text">{line.description}</p>

                  <div className="broa-highlight-row">
                    {line.highlights.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="broa-detail-panels">
                    <div className="broa-media-row">
                      <div className="broa-product-shot">
                        <img src={line.image} alt={line.title} loading="lazy" />
                      </div>

                      {line.nutritionImage ? (
                        <div className="broa-nutrition-box">
                          <div className="broa-nutrition-head">
                            <small>Imagem de embalagem</small>
                            <span>Referência oficial</span>
                          </div>
                          <img src={line.nutritionImage} alt={`Embalagem de ${line.title}`} loading="lazy" />
                        </div>
                      ) : null}
                    </div>

                    <div className="broa-info-column broa-info-column-centered">
                      <div className="broa-ingredient-box">
                        <small>Ingredientes</small>
                        <p>{line.ingredients}</p>
                      </div>

                      <div className="broa-accordion">
                        {line.specs.map((spec) => (
                          <details key={spec.label}>
                            <summary>{spec.label}</summary>
                            <p>{spec.value}</p>
                          </details>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {preparationSteps.length || prepVideo ? (
          <section className="section prep-section">
            <div className="shell">
              <div className="prep-card glass reveal">
                <div className="prep-head">
                  <p className="eyebrow">Modo de preparo</p>
                  <h2>{prepTitle ?? "Modo de preparo em vídeo"}</h2>
                  {prepDescription ? <p>{prepDescription}</p> : null}
                </div>

                {preparationSteps.length ? (
                  <div className="prep-grid">
                    {preparationSteps.map((step, index) => (
                      <article className={`prep-step reveal d${(index % 4) + 1}`} key={step}>
                        <span className="prep-step-number">{index + 1}</span>
                        <p>{step}</p>
                      </article>
                    ))}
                  </div>
                ) : null}

                {prepVideo ? (
                  <div className="prep-video reveal d2">
                    <iframe
                      title={`Modo de preparo de ${heroTitle}`}
                      src={prepVideo}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <SiteFooter />
      <FloatingWhatsapp />
    </div>
  );
}
