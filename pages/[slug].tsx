import { getCompany } from "@/lib/company";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import NavBar from "@/components/navbar";

export default function HomeCompany({
  data: company,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const PRIMARY = company?.settings
    ? company?.settings?.primaryColor
    : "#010105";
  const SECONDARY = company?.settings?.secondaryColor;
  const TERTIARY = company?.settings?.tertiaryColor;

  const BANNER: string = `/images/${
    company?.settings?.imageBanner
      ? company?.settings?.imageBanner
      : "default_banner.png"
  }`;

  return (
    <div className="w-screen h-screen">
      <NavBar data={company} />
      <Image
        alt="Logo-marca"
        className="w-full"
        src={`/images/${company?.settings?.imageBanner}`}
        width={840}
        height={270}
        priority
      />
     
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = String(context.query.slug);

  const company = await getCompany(slug);

  return {
    props: { data: company },
  };
}
