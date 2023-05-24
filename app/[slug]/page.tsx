import ProductList from "@/components/product_list";
import { TypeCategory } from "@/lib/category";

async function getData(slug: string) {
  const res = await fetch(`http://localhost:3000/api/company/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getDataCategories(slug: string) {
  const res = await fetch(`http://localhost:3000/api/company/${slug}/category`,{
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const companiesResponse = getData(params.slug);
  const categoriesResponse = getDataCategories(params.slug);

  const [company, categories] = await Promise.all([
    companiesResponse,
    categoriesResponse,
  ]);

  return (
    <div className="w-screen">
      {categories.map((data: TypeCategory) => (
        <ProductList data={data} />
      ))}
    </div>
  );
}
