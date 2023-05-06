import { Company } from "@/lib/company";

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
                key={`${company?.slug}`}
                href={`/${company?.slug}`}
                className="hover:font-extrabold flex flex-row  items-center gap-4 p-4 rounded-xl"
                style={{ backgroundColor: company?.settings?.secondaryColor }}
              >
                <img
                  className="block h-12 w-12 rounded-full"
                  src={`/images/${
                    company?.settings?.imagePerfil
                      ? company?.settings?.imagePerfil
                      : "default_perfil.png"
                  }`}
                  alt="Your Company"
                />
                <div>
                  {company?.name} - {company?.slug}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
