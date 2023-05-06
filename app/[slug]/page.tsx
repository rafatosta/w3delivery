import NavBar from "@/components/navbar";

async function getData(slug: string) {
  const res = await fetch(`http://localhost:3000/api/company/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const companiesResponse = getData(params.slug);
  const [company] = await Promise.all([companiesResponse]);

  return (
    <div>
      <NavBar data={company} />
      <p>{company.settings.primaryColor}</p>
      <p> {company.name}</p>
    </div>
  );
}
