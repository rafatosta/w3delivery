import { PrismaClient } from "@prisma/client";
import { clientsData } from "./seed/clients";

import { productsData } from "./seed/products";

const prisma = new PrismaClient();

async function run() {
  /* apaga as tabelas do banco */
  await prisma.socialMedia.deleteMany();
  await prisma.typePayment.deleteMany();
  await prisma.imageProduct.deleteMany();
  await prisma.category.deleteMany();
  await prisma.product.deleteMany();
  await prisma.phone.deleteMany();
  await prisma.client.deleteMany();
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
      product: {
        create: productsData,
      },
      settings: {
        create: {
          primaryColor: "#8c1c03",
          secondaryColor: "#f24c3d",
          tertiaryColor: "#f2b705",
          imagePerfil: "",
          imageBanner: "",
        },
      },
    },
  });

  // Criação das categorias
  const bebida = await prisma.category.create({
    data: {
      name: "Bebidas",
      companyId: company.id,
    },
  });

  // criação dos produtos
  await prisma.product.create({
    data: {
      name: "Coca Cola",
      description: "Colca em lata",
      price: "3.50",
      companyId: company.id,
      categoryId: bebida.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Cerveja",
      description: "Cerveja em lata",
      price: "4.50",
      companyId: company.id,
      categoryId: bebida.id,
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
          primaryColor: "#8c1c03",
          secondaryColor: "#f24c3d",
          tertiaryColor: "#f2b705",
          imagePerfil: "",
          imageBanner: "",
        },
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
          primaryColor: "#8c1c03",
          secondaryColor: "#f24c3d",
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
