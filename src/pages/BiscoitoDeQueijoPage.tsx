import ProductCategoryPage from "../components/ProductCategoryPage";

const sharedIngredients =
  "Fécula de mandioca, polvilho doce, leite, margarina, queijo minas, ovo, óleo de soja, sal, amido de milho e corantes artificiais amarelo tartrazina e amarelo crepúsculo.";

const sharedAllergens =
  "Contém ovo e derivados de leite e soja. Pode conter trigo, aveia e cevada. Contém lactose / contém glúten.";

const lines = [
  {
    title: "Biscoito de Queijo Tradicional",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Gostinho-Mineiro-1-.png",
    nutritionImage:
      "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Biscoito-de-Queijo-Gostinho-Mineiro-tradicional-Bobina-1kg.png",
    description: "Versão tradicional com textura crocante e formato clássico para exposição rápida em balcão e freezer.",
    ingredients: sharedIngredients,
    highlights: ["Clássico mineiro", "Formato tradicional", "Giro rápido"],
    specs: [
      { label: "Gramatura", value: "25g" },
      { label: "Embalagens", value: "1kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
  {
    title: "Biscoito Tradicional Meia Lua",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Meia-Lua-GM-1.png",
    nutritionImage:
      "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Biscoito-de-Queijo-Gostinho-Mineiro-tradicional-Bobina-1kg.png",
    description: "Formato meia lua para ampliar o visual da linha com a mesma base de sabor e praticidade operacional.",
    ingredients: sharedIngredients,
    highlights: ["Meia lua", "Mesmo padrão", "Boa recompra"],
    specs: [
      { label: "Gramatura", value: "40g" },
      { label: "Embalagens", value: "1kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
  {
    title: "Biscoito 4 Queijos Palito",
    subtitle: "Linha Gostinho Gostoso",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Gostinho-Mineiro-Biscoito-4-queijos-1-1.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Gostinho-Mineiro-1-Biscoito-4-queijos-.png",
    description: "Perfil mais intenso da linha 4 queijos em formato palito para diferenciar o mix de congelados.",
    ingredients: sharedIngredients,
    highlights: ["Linha 4 queijos", "Formato palito", "Mais variedade"],
    specs: [
      { label: "Gramatura", value: "40g" },
      { label: "Embalagens", value: "1kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
  {
    title: "Biscoito 4 Queijos Meia Lua",
    subtitle: "Linha Gostinho Gostoso",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Gostinho-Mineiro-Biscoito-4-queijos-3.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Gostinho-Mineiro-1-Biscoito-4-queijos-.png",
    description: "Versão meia lua da linha 4 queijos com foco em exposição diferenciada e ticket maior por unidade.",
    ingredients: sharedIngredients,
    highlights: ["4 queijos", "Meia lua", "Mix premium"],
    specs: [
      { label: "Gramatura", value: "60g" },
      { label: "Embalagens", value: "2kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
  {
    title: "Biscoito Suíço",
    subtitle: "Linha Gostinho Gostoso",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Gostinho-Mineiro-Suico-.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Gostinho-Mineiro-1-Biscoito-4-queijos-.png",
    description: "Opção com maior variedade de gramaturas para compor balcão, cafeteria e operações com mix ampliado.",
    ingredients: sharedIngredients,
    highlights: ["Gramaturas amplas", "Linha versátil", "Boa exposição"],
    specs: [
      { label: "Gramatura", value: "40g, 80g e 120g" },
      { label: "Embalagens", value: "1kg e 5kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
  {
    title: "Palito de Queijo",
    subtitle: "Linha Gostinho Gostoso",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Gostinho-Mineiro-Palito-.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2025/11/Gostinho-Mineiro-1-Biscoito-4-queijos-.png",
    description: "Formato palito com apelo de consumo imediato para compor linhas de lanche, cafeteria e conveniência.",
    ingredients: sharedIngredients,
    highlights: ["Consumo rápido", "Formato palito", "Linha gostosa"],
    specs: [
      { label: "Gramatura", value: "70g" },
      { label: "Embalagens", value: "1kg" },
      { label: "Alérgicos", value: sharedAllergens },
    ],
  },
];

const preparationSteps = [
  "Pré-aqueça o forno a 200°C ou na posição do médio.",
  "Distribua os biscoitos de queijo em uma assadeira untada, deixando um espaço de 2 cm entre eles.",
  "Leve ao forno e asse por aproximadamente 30 minutos.",
  "Retire do forno quando os biscoitos de queijo estiverem dourados.",
];

export default function BiscoitoDeQueijoPage() {
  return (
    <ProductCategoryPage
      heroTitle="Biscoitos de queijo para ampliar variedade e giro"
      heroDescription="Linha tradicional, meia lua, versões 4 queijos, suíço e palito para balcão, cafeteria e freezer."
      heroImage={lines[0].image}
      heroLabel="Linha de biscoito de queijo"
      lines={lines}
      prepTitle="Forno elétrico ou forno convencional"
      prepDescription="Passos organizados a partir da página oficial da linha de biscoitos de queijo."
      preparationSteps={preparationSteps}
    />
  );
}
