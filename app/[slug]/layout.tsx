import NavBar from "@/components/navbar";

async function getData(slug: string) {
  const res = await fetch(`http://localhost:3000/api/company/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function CompanyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const company = await getData(params.slug);

  return (
    <>
      <NavBar data={company} />
      <main>{children}</main>
    </>
  );
}
