import ProductCategoryPage from "../components/ProductCategoryPage";

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

export default function BroaPage() {
  return (
    <ProductCategoryPage
      heroTitle="Broas para padarias e mercados"
      heroDescription="Broa de Fubá e Broa Temperada em gramaturas de 35g e 70g, com embalagens de 1kg e 5kg."
      heroImage={broaLines[0].image}
      heroLabel="Linha de broas"
      lines={broaLines}
      prepTitle="Preparo da broa em vídeo"
      prepDescription="Assista ao preparo recomendado para a linha de broas."
      prepVideo="https://www.youtube.com/embed/bnlFJGYATpI"
    />
  );
}
