import ProductCategoryPage from "../components/ProductCategoryPage";

const sharedAllergens =
  "Contém glúten / contém lactose. Alérgicos: contém ovo, leite e derivados de trigo e soja. Pode conter aveia e cevada.";

const lines = [
  {
    title: "Pão de Batata",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/pao-de-batata.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-de-batata-.png",
    description: "Massa macia para ampliar o mix de confeitaria e panificação congelada com foco em rendimento e praticidade.",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, açúcar, batata desidratada, margarina, sal, ovo, leite, emulsificantes: polisorbato 80, ésteres de mono e diglicerídeos de ácidos graxos, merolhadores de farinha: ácido ascórbico, azodicarbonamida e conservante propionato de calcio.",
    highlights: ["Massa macia", "Linha versátil", "Boa exposição"],
    specs: [
      { label: "Embalagens", value: "1kg e 3,5kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
  {
    title: "Pão de Hot Dog",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-hot-dog-1.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-hot-dog.png",
    description: "Linha prática para operações que precisam de padronização no pão de lanche e reposição frequente.",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, açúcar, margarina, fubá, sal, ovo, emulsificantes: polisorbato 80, ésteres de mono e diglicerídeos de ácidos graxos, merolhadores de farinha: ácido ascórbico, azodicarbonamida e conservante propionato de calcio.",
    highlights: ["Formato de lanche", "Padrão constante", "Reposição rápida"],
    specs: [
      { label: "Embalagens", value: "1kg e 3,5kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
  {
    title: "Pão de Hambúrguer",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-de-hambu.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-hot-dog.png",
    description: "Opção para compor linhas de sanduíche com padronização de produção e fornecimento congelado.",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, açúcar, margarina, fubá, sal, ovo, emulsificantes: polisorbato 80, ésteres de mono e diglicerídeos de ácidos graxos, merolhadores de farinha: ácido ascórbico, azodicarbonamida e conservante propionato de calcio.",
    highlights: ["Linha sanduíche", "Mix operacional", "Padrão de lote"],
    specs: [
      { label: "Embalagens", value: "1kg e 3,5kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
  {
    title: "Pão de Milho",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/PAO-DE-MILHO-.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-hot-dog.png",
    description: "Produto para ampliar sortimento com apelo de sabor regional e visual diferenciado na vitrine.",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, açúcar, margarina, fubá, sal, ovo, emulsificantes: polisorbato 80, ésteres de mono e diglicerídeos de ácidos graxos, merolhadores de farinha: ácido ascórbico, azodicarbonamida e conservante propionato de calcio.",
    highlights: ["Sabor regional", "Mix ampliado", "Boa vitrine"],
    specs: [
      { label: "Embalagens", value: "1kg e 3,5kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
  {
    title: "Rosca Trançada",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/roca-trancada.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-hot-dog.png",
    description: "Item de confeitaria para ampliar variedade com apresentação diferenciada e boa presença no balcão.",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, açúcar, margarina, fubá, sal, ovo, emulsificantes: polisorbato 80, ésteres de mono e diglicerídeos de ácidos graxos, merolhadores de farinha: ácido ascórbico, azodicarbonamida e conservante propionato de calcio.",
    highlights: ["Apresentação forte", "Linha de confeitaria", "Diferenciação"],
    specs: [
      { label: "Embalagens", value: "1kg e 3,5kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
  {
    title: "Rosca Húngara",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Rosca-hungara-.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/roca-hungara-.png",
    description: "Linha doce para enriquecer a confeitaria com produto de alto apelo visual e sabor adocicado.",
    ingredients:
      "Farinha de trigo enriquecida com ferro e ácido fólico, água, açúcar, leite, margarina, amido de milho, sal, ovo, coco ralado, aromatizante, corantes artificiais: amarelo crepúsculo, tartrazina, emulsificantes: polisorbato 80, ésteres de mono e diglicerídeos de ácidos graxos, merolhadores de farinha: ácido ascórbico, azodicarbonamida e conservante propionato de calcio.",
    highlights: ["Confeitaria doce", "Apelo visual", "Mais variedade"],
    specs: [
      { label: "Embalagens", value: "1kg e 3,5kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
];

export default function MassasDocesPage() {
  return (
    <ProductCategoryPage
      heroTitle="Massas doces e pães especiais para ampliar o mix da vitrine"
      heroDescription="Linha com opções para confeitaria, lanches e exposição diária, baseada nas referências oficiais da categoria Massa Doce."
      heroImage={lines[0].image}
      heroLabel="Linha de massas doces"
      lines={lines}
    />
  );
}
