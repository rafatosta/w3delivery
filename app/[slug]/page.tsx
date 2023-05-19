
async function getData(slug: string) {
  const res = await fetch(`http://localhost:3000/api/company/${slug}`);
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
      dados da página
    </div>
  );
}
