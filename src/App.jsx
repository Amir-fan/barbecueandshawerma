import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MenuCategories } from "./components/MenuCategories";
import { QualitySection } from "./components/QualitySection";
import { FullMenu } from "./components/FullMenu";
import { LocationSection } from "./components/LocationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuCategories />
        <QualitySection />
        <FullMenu />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
