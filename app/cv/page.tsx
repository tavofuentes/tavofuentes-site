import CVPanel from "@/components/CVPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CVPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <CVPanel />

      <Footer />
    </main>
  );
}
