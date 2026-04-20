import ProductCategoryPage from "../components/ProductCategoryPage";

const lines = [
  {
    title: "Pão Francês Tradicional",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-Frances-2-1-1.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-frances-GG-.png",
    description: "Produção padronizada com gramaturas e tempos de fermentação para atender operação diária com consistência.",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, fermento biológico, sal, amido de milho, estabilizante lactado de cálcio e acidulante acído ascorbico.",
    highlights: ["Padrão diário", "Fermentação escalonada", "Boa produtividade"],
    specs: [
      { label: "Gramatura", value: "50g e 70g" },
      { label: "Fermentação", value: "6h, 12h e 18h" },
      { label: "Embalagens", value: "1kg e 7kg" },
      {
        label: "Alérgicos",
        value: "Contém glúten. Não contém lactose. Alérgicos: contém derivados de trigo. Pode conter soja, centeio, aveia e cevada.",
      },
    ],
  },
  {
    title: "Pão Francês Integral",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-frances-integral-.png",
    nutritionImage:
      "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-Frances-06h-com-fermentacao-Natural-Bobina-7kg-.png",
    description: "Versão integral para ampliar o mix com perfil diferenciado e rotina de fermentação mais curta.",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, farinha de trigo integral, farinha de centeio integral, sal, fermento biológico, amido de milho, açúcar, açúcar mascavo, cacau em pó, gordura vegetal, aromatizante, emulsificante mono e diglicerídeos de ácidos graxos, estabilizante lactado de cálcio, acidulante acído ascorbico e enzima alfa-amilase.",
    highlights: ["Versão integral", "Mix ampliado", "Fermentação prática"],
    specs: [
      { label: "Gramatura", value: "50g e 70g" },
      { label: "Fermentação", value: "6h e 12h" },
      { label: "Embalagens", value: "1kg e 7kg" },
      {
        label: "Alérgicos",
        value: "Contém glúten. Não contém lactose. Alérgicos: contém derivados de trigo e centeio. Pode conter soja, aveia e cevada.",
      },
    ],
  },
  {
    title: "Pão Francês Fermentação Natural",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-Frances-2-1-2.png",
    nutritionImage:
      "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-Frances-06h-com-fermentacao-Natural-Bobina-7kg-1-1.png",
    description: "Linha com fermentação natural para operações que valorizam processo, padronização e fornecimento em maior volume.",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, fermento biológico, sal, amido de milho, estabilizante lactado de cálcio e acidulante acído ascorbico.",
    highlights: ["Fermentação natural", "Fornecimento em escala", "Padronização"],
    specs: [
      { label: "Gramatura", value: "50g" },
      { label: "Fermentação", value: "6h e 12h" },
      { label: "Embalagens", value: "1kg e 7kg" },
      {
        label: "Alérgicos",
        value: "Contém glúten. Não contém lactose. Alérgicos: contém derivados de trigo. Pode conter soja, centeio, aveia e cevada.",
      },
    ],
  },
];

const preparationSteps = [
  "Coloque o produto em assadeira própria para pão francês untada com desmoldante.",
  "Deixe o pão descongelar e fermentar em armário de crescimento durante o tempo indicado para o tipo de produto.",
  "Observe a temperatura ambiente, porque ela influencia o tempo de fermentação para mais ou para menos.",
  "Pré-aqueça o forno entre 170°C e 200°C.",
  "Faça o corte no produto e asse em forno a vapor por aproximadamente 15 minutos.",
];

export default function PaoFrancesPage() {
  return (
    <ProductCategoryPage
      heroTitle="Pães franceses com padronização de peso, miolo e fermentação"
      heroDescription="Linhas tradicional, integral e fermentação natural com embalagens de 1kg e 7kg para diferentes rotinas de produção."
      heroImage={lines[0].image}
      heroLabel="Linha de pão francês"
      lines={lines}
      prepTitle="Fermentação e assamento"
      prepDescription="Orientações baseadas na página oficial do pão francês tradicional."
      preparationSteps={preparationSteps}
    />
  );
}
