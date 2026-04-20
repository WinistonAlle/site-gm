import { useEffect } from "react";
import { FloatingWhatsapp, SiteFooter, SiteNav } from "../components/SiteChrome";

const broaLines = [
  {
    title: "Broa de Fubá",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Broa-1-1-1.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Broa-de-fuba-tabela.png",
    description:
      "Textura macia, sabor tradicional e ótimo giro para padarias, mercados e operações de food service que precisam de um item reconhecido pelo consumidor.",
    ingredients:
      "Água, ovo, bebida láctea, óleo de soja, farinha de trigo enriquecida com ferro e ácido fólico, fubá de milho, açúcar, erva-doce e sal.",
    highlights: ["Sabor tradicional", "Boa recompra", "Linha versátil"],
    specs: [
      { label: "Gramatura", value: "35g e 70g" },
      { label: "Embalagens", value: "1kg e 5kg" },
      {
        label: "Alérgicos",
        value:
          "Contém glúten e lactose. Alérgicos: contém ovo, leite e derivados de leite, trigo e soja. Pode conter aveia e cevada.",
      },
    ],
  },
  {
    title: "Broa de Fubá Temperada",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Broa-2-1-1.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Broa-de-fuba-temperada.png",
    description:
      "Versão com perfil mais intenso, pensada para ampliar variedade no balcão e entregar um produto com mais personalidade na exposição.",
    ingredients:
      "Água, ovo, bebida láctea, óleo de soja, farinha de trigo enriquecida com ferro e ácido fólico, fubá de milho, sal, mortadela defumada, pimenta calabresa e pimenta-do-reino.",
    highlights: ["Perfil marcante", "Mais variedade", "Diferenciação no balcão"],
    specs: [
      { label: "Gramatura", value: "35g e 70g" },
      { label: "Embalagens", value: "1kg e 5kg" },
      {
        label: "Alérgicos",
        value:
          "Contém glúten e lactose. Alérgicos: contém ovo, leite e derivados de leite, trigo e soja. Pode conter aveia e cevada.",
      },
    ],
  },
];

const preparationSteps = [
  "Pré-aqueça o forno a 200°C ou na posição do médio.",
  "Distribua as broas em uma assadeira untada, deixando um espaço de 2 cm entre elas.",
  "Leve ao forno e asse por aproximadamente 30 minutos.",
  "Retire do forno quando as broas estiverem douradas.",
];

export default function BroaPage() {
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

        <section className="hero-story product-hero-story" aria-label="Linha de broas">
          <span className="hero-story-blob" aria-hidden="true" />
          <div
            className="hero-story-banner reveal"
            style={{ backgroundImage: `url(${broaLines[0].image})` }}
          >
            <div className="hero-story-overlay">
              <h1>Broas para padarias e mercados</h1>
              <p>
                Broa de Fubá e Broa Temperada. Gramaturas de 35g e 70g. Embalagens de 1kg e 5kg.
              </p>
              <a href="https://wa.me/5561985941557" className="hero-story-cta" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section broa-section">
          <div className="shell">
            <div className="broa-grid broa-grid-single">
              {broaLines.map((line, index) => (
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
                      <div className="broa-nutrition-box">
                        <div className="broa-nutrition-head">
                          <small>Informações nutricionais</small>
                          <span>Imagem original da referência</span>
                        </div>
                        <img src={line.nutritionImage} alt={`Tabela nutricional de ${line.title}`} loading="lazy" />
                      </div>
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

        <section className="section prep-section">
          <div className="shell">
            <div className="prep-card glass reveal">
              <div className="prep-head">
                <p className="eyebrow">Modo de preparo</p>
                <h2>Forno elétrico ou forno convencional</h2>
                <p>
                  Sequência baseada na página de referência da broa, organizada aqui em um formato mais limpo.
                </p>
              </div>

              <div className="prep-grid">
                {preparationSteps.map((step, index) => (
                  <article className={`prep-step reveal d${(index % 4) + 1}`} key={step}>
                    <span className="prep-step-number">{index + 1}</span>
                    <p>{step}</p>
                  </article>
                ))}
              </div>

              <div className="prep-video reveal d2">
                <iframe
                  title="Modo de preparo da broa"
                  src="https://www.youtube.com/embed/bnlFJGYATpI"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
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
