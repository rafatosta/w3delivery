import { PrismaClient } from "@prisma/client";
import { clientsData } from "./seed/clients";

import { productsData } from "./seed/products";

const prisma = new PrismaClient();

async function run() {
  /* apaga as tabelas do banco */
  await prisma.socialMedia.deleteMany();
  await prisma.typePayment.deleteMany();
  await prisma.imageProduct.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.phone.deleteMany();
  await prisma.client.deleteMany();
  await prisma.settings.deleteMany();
  await prisma.company.deleteMany();

  /* Empresa 1 */
  const company = await prisma.company.create({
    data: {
      name: "Dictum Corporation",
      slug: "dictum_corp",
      phone: {
        create: [
          { number: "1-261-761-3134" },
          { number: "1-413-487-6624", isWhatsapp: true },
        ],
      },
      socialMedia: {
        create: [
          {
            name: "instagram",
            url: "https://www.instagram.com/DictumCorporation",
          },
          {
            name: "facebook",
            url: "https://www.facebook.com/DictumCorporation",
          },
        ],
      },
      typePayment: {
        create: [
          { icon: "pix", description: "pix" },
          { icon: "money", description: "dinheiro" },
        ],
      },
      address: "Ap #486-7147 Nisi Street",
      addressMap: "-11.0774530048, 117.0991168512",
      client: {
        create: clientsData,
      },
      settings: {
        create: {
          primaryColor: "#8c1c03",
          secondaryColor: "#f24c3d",
          tertiaryColor: "#f2b705",
          imagePerfil: "dictum_corp_perfil.jpg",
          imageBanner: "dictum_corp_banner.jpg",
        },
      },
      category: {
        create: [{ name: "Especiais" }, { name: "Janta" }],
      },
    },
  });

  // BEBIDA
  const bebida = await prisma.category.create({
    data: {
      name: "Bebidas",
      companyId: company.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Coca Cola",
      description: "Colca em lata",
      price: "3.50",
      imageSrc:
        "https://img.freepik.com/fotos-gratis/cola-fresca-bebida-em-vidro_144627-16201.jpg?w=740&t=st=1684957838~exp=1684958438~hmac=b4d0869475f6c3786df04908d3d8ffb356a5a421c0fa04966407c408d29bd20a",
      imageAlt: "Coca em lata",
      companyId: company.id,
      categoryId: bebida.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Cerveja",
      description: "Cerveja em lata",
      price: "4.50",
      imageSrc:
        "https://img.freepik.com/fotos-gratis/vista-frontal-de-copos-de-cerveja-com-trigo_23-2148755010.jpg?w=740&t=st=1684957080~exp=1684957680~hmac=22406e9418055efc8de1c540f5fa142d1f8ba87ea91a9f6ce4e8f6b8891cbd80",
      imageAlt: "Cerveja em lata de qualquer marca",
      companyId: company.id,
      categoryId: bebida.id,
    },
  });

  // PIZZA
  const pizza = await prisma.category.create({
    data: {
      name: "Pizza",
      companyId: company.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Calabresa",
      description: "Pizza de calabresa",
      price: "33.50",
      imageSrc:
        "https://img.freepik.com/fotos-gratis/feche-a-pizza-italiana-sobre-o-queijo-cole-o-foco-seletivo-generativo-ai_1258-153063.jpg?w=1380&t=st=1684957942~exp=1684958542~hmac=31f38a0703b8d663203f526819399e0b88bb7749ae62ab97cad588f2305b9bcd",
      imageAlt: "",
      companyId: company.id,
      categoryId: pizza.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Suprema",
      description: "Pizza de calabresa",
      price: "53.50",
      imageSrc:
        "https://img.freepik.com/fotos-gratis/close-up-de-pizza-de-calabresa-com-granulado-de-gergelim_141793-2045.jpg?w=1380&t=st=1684958276~exp=1684958876~hmac=d4e69e5eb559c7a352a6de0e0db28d684c4801244d6daddb3807b70addb100bc",
      imageAlt: "",
      companyId: company.id,
      categoryId: pizza.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "4 Queijos",
      description: "Pizza de calabresa",
      price: "23.50",
      imageSrc:
        "https://img.freepik.com/fotos-gratis/queijo-georgiano-khachapuri-imeruli-comida-tradicional-da-georgia-khachapuri-quente_114579-140.jpg?w=740&t=st=1684958299~exp=1684958899~hmac=af4f734c558b0811e6d16fc75bdbd23b561858610e7cd3925ef679b8ee70cc99",
      imageAlt: "",
      companyId: company.id,
      categoryId: pizza.id,
    },
  });

  // ALMOÇO
  const almoco = await prisma.category.create({
    data: {
      name: "Almoço",
      companyId: company.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Filé com fritas",
      description: "Filé com fritas, faroda e salada.",
      price: "42.00",
      imageSrc:
        "https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=996&t=st=1684964175~exp=1684964775~hmac=19e9812366301de48b693b06f05a87914b2592867ad3737971153c915c8ea2ef",
      imageAlt: "",
      companyId: company.id,
      categoryId: almoco.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Gororoba",
      description:
        "Feijão, arroz, ovos, salada, farofa e o que tiver de sobra.",
      price: "142.00",
      imageSrc:
        "https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg?w=996&t=st=1684964240~exp=1684964840~hmac=048f12b8927d7af360a62fda2b99909e58b9e71127c69d330d9b73c14415e779",
      imageAlt: "",
      companyId: company.id,
      categoryId: almoco.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Feijão e arroz",
      description: "arranjo-com-deliciosa-comida-brasileira",
      price: "42.00",
      imageSrc:
        "https://img.freepik.com/fotos-gratis/arranjo-com-deliciosa-comida-brasileira_23-2148739193.jpg?w=1380&t=st=1684964586~exp=1684965186~hmac=888f4729a3a073356a3e8a97a4a6009538861a93f9a6ad162bd47207de2ab669",
      imageAlt: "",
      companyId: company.id,
      categoryId: almoco.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Macarrão",
      description:
        "fettuccine-de-macarrao-a-bolonhesa-com-molho-de-tomate-em-tigela-branca",
      price: "12.00",
      imageSrc:
        "https://img.freepik.com/fotos-gratis/fettuccine-de-macarrao-a-bolonhesa-com-molho-de-tomate-em-tigela-branca_2829-20035.jpg?w=1380&t=st=1684964522~exp=1684965122~hmac=2f7b85ca4bde0ad4658f88d86da025bb2a1d7878ee54917cbaf4b29e55564ee2",
      imageAlt: "",
      companyId: company.id,
      categoryId: almoco.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Filé com fritas 2",
      description: "Filé com fritas, faroda e salada.",
      price: "42.00",
      imageSrc:
        "https://img.freepik.com/fotos-gratis/porcao-de-bife-grelhado-jantar-refeicao_1172-322.jpg?w=1380&t=st=1684964684~exp=1684965284~hmac=f73e07ab025733333e1b25a6c9651e17591dab9f9247866311d1c26ebf89fc65",
      imageAlt: "",
      companyId: company.id,
      categoryId: almoco.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Gororoba 2",
      description:
        "Feijão, arroz, ovos, salada, farofa e o que tiver de sobra.",
      price: "142.00",
      imageSrc:
        "https://img.freepik.com/fotos-premium/linguica-assada-e-grelhada-porco-defumado-servido-quente-com-arroz-e-feijao-farofa-salada-de-tomate-e-batata-frita-comida-tipica-mineira-almoco-brasileiro_72932-3263.jpg?w=1380",
      imageAlt: "",
      companyId: company.id,
      categoryId: almoco.id,
    },
  });

  /* EMPRESA 2 */
  await prisma.company.create({
    data: {
      name: "Curabitur Massa LLC",
      slug: "curabitur",
      phone: { create: [{ number: "(248) 656-1587" }] },
      socialMedia: {
        create: [
          {
            name: "instagram",
            url: "https://www.instagram.com/Curabitur",
          },
        ],
      },
      address: "521-3835 Tellus St.",
      addressMap: "87.7638416384, -16.6061502464",
      client: {
        create: clientsData,
      },
      settings: {
        create: {
          primaryColor: "#5f413e",
          secondaryColor: "#73b25b",
          tertiaryColor: "#f2b705",
          imagePerfil: "",
          imageBanner: "",
        },
      },
      category: {
        create: [
          { name: "Tipo 1" },
          { name: "Tipo 2" },
          { name: "Tipo 3" },
          { name: "Tipo 4" },
        ],
      },
    },
  });

  /* Empresa 3 */
  const c = await prisma.company.create({
    data: {
      name: "Nunc Corp.",
      slug: "nunc_corp",
      phone: { create: [{ number: "(563) 340-1951" }] },
      socialMedia: {
        create: [
          {
            name: "instagram",
            url: "https://www.instagram.com/NuncCorp",
          },
        ],
      },
      address: "Ap #440-8083 Ultrices. Ave",
      addressMap: "25.9914186752, -112.6303266816",
      settings: {
        create: {
          primaryColor: "#f2d2b6",
          secondaryColor: "#bf925a",
          tertiaryColor: "#f2b705",
          imagePerfil: "",
          imageBanner: "",
        },
      },
    },
  });

  await prisma.client.create({
    data: {
      name: "Quynn Barker",
      phone: "(263) 739-8165",
      email: "lacus.etiam@aol.ca",
      password: "73875U",
      companyId: c.id,
    },
  });
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
