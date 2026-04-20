import ProductCategoryPage from "../components/ProductCategoryPage";

const lines = [
  {
    title: "Pão de Queijo Premium",
    subtitle: "Linha Gostinho Mineiro",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2025/10/Gostinho-Mineiro-Pao-de-queijo-.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2025/10/Gostinho-Mineiro-Pao-de-Queijo-Premium-.png",
    description: "Versão premium com textura macia, sabor marcante e mix de gramaturas para atender balcão, padaria e freezer.",
    ingredients:
      "Fécula de mandioca, ovo, óleo de soja, queijo tipo minas curado, polvilho azedo, composto lácteo, sal, corante artificial: amarelo tartrazina (INS 102).",
    highlights: ["Linha premium", "Boa recompra", "Mix versátil"],
    specs: [
      { label: "Gramaturas", value: "30g, 55g, 70g e 100g" },
      { label: "Embalagens", value: "400g, 800g, 1kg e 5kg" },
      { label: "Alérgicos", value: "Contém ovo e derivados de leite e soja. Contém lactose. Não contém glúten." },
    ],
  },
  {
    title: "Pão de Queijo Gostinho Gostoso",
    subtitle: "Linha Gostinho Gostoso",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2025/10/Gostinho-Mineiro-Pao-de-Queijo-Gostinho-Gostoso-.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2025/10/Gostinho-Mineiro-Pao-de-Queijo-Premium-.png",
    description: "Linha com amplitude de tamanhos para atender diferentes momentos de consumo e operações com alto giro.",
    ingredients:
      "Fécula de mandioca, ovo, óleo de soja, queijo tipo minas curado, polvilho azedo, composto lácteo, sal, corante artificial: amarelo tartrazina (INS 102).",
    highlights: ["Maior variedade", "Alto giro", "Linha ampla"],
    specs: [
      { label: "Gramaturas", value: "15g, 25g, 30g, 40g, 55g, 70g, 90g e 100g" },
      { label: "Embalagens", value: "400g, 800g, 1kg e 5kg" },
      { label: "Alérgicos", value: "Contém ovo e derivados de leite e soja. Contém lactose. Não contém glúten." },
    ],
  },
  {
    title: "Pão de Queijo Ímpar",
    subtitle: "Linha Ímpar",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2025/10/Gostinho-Mineiro-Pao-de-Queijo-impar-.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2025/10/Gostinho-Mineiro-Pao-de-Queijo-Premium-.png",
    description: "Versão pensada para operações que precisam de padrão de fornecimento com bom rendimento por embalagem.",
    ingredients:
      "Fécula de mandioca, ovo, óleo de soja, queijo tipo minas curado, polvilho azedo, composto lácteo, sal, corante artificial: amarelo tartrazina (INS 102).",
    highlights: ["Padrão constante", "Rendimento", "Foco operacional"],
    specs: [
      { label: "Gramaturas", value: "15g, 25g, 30g, 40g, 55g, 70g e 100g" },
      { label: "Embalagens", value: "1kg e 5kg" },
      { label: "Alérgicos", value: "Contém ovo e derivados de leite e soja. Contém lactose. Não contém glúten." },
    ],
  },
  {
    title: "Pão de Queijo Forno Quente",
    subtitle: "Linha Forno Quente",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2025/10/Gostinho-Mineiro-Pao-de-Queijo-impar-.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2025/10/Gostinho-Mineiro-Pao-de-Queijo-Premium-.png",
    description: "Linha preparada para rotina operacional com gramaturas práticas e fornecimento em embalagens maiores.",
    ingredients:
      "Fécula de mandioca, ovo, óleo de soja, queijo tipo minas curado, polvilho azedo, composto lácteo, sal, corante artificial: amarelo tartrazina (INS 102).",
    highlights: ["Rotina diária", "Boa exposição", "Embalagem econômica"],
    specs: [
      { label: "Gramaturas", value: "15g, 25g, 30g, 55g, 80g e 100g" },
      { label: "Embalagens", value: "1kg e 5kg" },
      { label: "Alérgicos", value: "Contém ovo e derivados de leite e soja. Contém lactose. Não contém glúten." },
    ],
  },
  {
    title: "Pão de Queijo Sem Lactose",
    subtitle: "Linha especial",
    image: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-de-queijo-sem-lactose-1.png",
    nutritionImage: "https://gostinhomineiro.com.br/wp-content/uploads/2026/03/Pao-de-queijo-zero-lactose.png",
    description: "Alternativa sem lactose para ampliar o sortimento com um produto adaptado a demandas específicas.",
    ingredients:
      "Fécula de mandioca, ovo, água, óleo de soja, amido modificado, queijo minas sem lactose, sal, aromatizante sintético idêntico ao de queijo.",
    highlights: ["Sem lactose", "Sortimento ampliado", "Pronto para freezer"],
    specs: [
      { label: "Gramaturas", value: "25g" },
      { label: "Embalagens", value: "400g" },
      {
        label: "Alérgicos",
        value:
          "Contém glúten. Não contém lactose. Alérgicos: contém ovo e derivados de leite e soja. Pode conter trigo, aveia e cevada.",
      },
    ],
  },
];

const preparationSteps = [
  "Pré-aqueça o forno a 200°C ou na posição do médio.",
  "Distribua os pães de queijo em uma assadeira untada, deixando um espaço de 2 cm entre eles.",
  "Leve ao forno e asse por aproximadamente 30 minutos.",
  "Retire do forno quando os pães de queijo estiverem dourados.",
];

export default function PaoDeQueijoPage() {
  return (
    <ProductCategoryPage
      heroTitle="Pães de queijo para padarias, mercados e food service"
      heroDescription="Linhas Premium, Gostinho Gostoso, Ímpar, Forno Quente e versão Sem Lactose em diferentes gramaturas e embalagens."
      heroImage={lines[0].image}
      heroLabel="Linha de pão de queijo"
      lines={lines}
      prepTitle="Forno elétrico ou forno convencional"
      prepDescription="Sequência organizada a partir da página oficial da linha de pão de queijo."
      preparationSteps={preparationSteps}
    />
  );
}
