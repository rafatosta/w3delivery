import { getCompanies } from "@/lib/company";
import { InferGetServerSidePropsType } from "next";

export default function Home({
  data: companies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center gap-8">
      <div>Empresas cadastradas: {companies.length}</div>
      <div className="flex flex-col items-center justify-center gap-2 w-screen">
        <p className="text-xl font-bold">Lista de Empresas</p>
        <div className="bg-white flex flex-col rounded-lg p-4 gap-6 w-1/2">
          {companies.map((c, i) => {
            return (
              <a
                key={`${c.slug}-${i}`}
                href={`/${c.slug}`}
                className="hover:text-[blue] hover:font-bold"
              >
                {c.name} - {c.slug}
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const companies = await getCompanies();

  return {
    props: { data: companies },
  };
}
