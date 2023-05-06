import { Company } from "@prisma/client";

async function getData() {
  const res = await fetch("http://localhost:3000/api/company", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center gap-8">
      <div>Empresas cadastradas: {data.length}</div>
      <div className="flex flex-col items-center justify-center gap-2 w-screen">
        <p className="text-xl font-bold">Lista de Empresas</p>
        <div className="bg-white flex flex-col rounded-lg p-4 gap-6 w-1/2">
          {data.map((company: Company) => {
            return (
              <a
                key={`${company.slug}`}
                href={`/${company.slug}`}
                className="hover:text-[blue] hover:font-bold"
              >
                {company.name} - {company.slug}
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
