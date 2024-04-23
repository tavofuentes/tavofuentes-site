import ExperiencePanel from "@/components/ExperiencePanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <ExperiencePanel />
      <Footer />

      {/* <p className="mt-12 inconsolata text-sm">
        Design by
        <a
          className="underline decoration-solid"
          href="https://www.karlavilla.com"
          target="_blank"
        >
          Karla Villa
        </a>
      </p> */}
    </main>
  );
}
