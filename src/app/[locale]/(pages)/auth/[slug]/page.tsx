import Login from "@/_Components/Auth/Login/Login";
import Register from "@/_Components/Auth/Register/Register";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import formBg from "../../../../../../public/images/formsBg.webp";

const pageComponents = {
  register: Register,
  login: Login,
} as const;

type Slug = keyof typeof pageComponents;

interface AuthPageProps {
  params: Promise<{
    slug: Slug;
  }>;
}

export async function generateMetadata({
  params,
}: AuthPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug,
  };
}

const AuthPage = async ({ params }: AuthPageProps) => {
  const { slug } = await params;

  const PageComponent = pageComponents[slug];
  if (!PageComponent) return notFound();

  return (
    <>
      <div className="relative min-h-screen w-full py-20 flex items-center justify-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={formBg}
            alt="Authentication background"
            fill
            sizes="100vw"
            className="object-cover object-top"
            quality={80}
            placeholder="blur"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Gradient at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent
            z-0"
        />

        <PageComponent />
      </div>
    </>
  );
};

export default AuthPage;
