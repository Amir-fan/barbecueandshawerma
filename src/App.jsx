import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MenuCategories } from "./components/MenuCategories";
import { QualitySection } from "./components/QualitySection";
import { FullMenu } from "./components/FullMenu";
import { LocationSection } from "./components/LocationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { LanguageSelectionScreen } from "./components/LanguageSelectionScreen";
import { WhatsAppSticky } from "./components/WhatsAppSticky";
import { CartWidget } from "./components/CartWidget";
import { CartDrawer } from "./components/CartDrawer";

export default function App() {
  return (
    <>
      <LanguageSelectionScreen />
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
      <WhatsAppSticky />
      <CartWidget />
      <CartDrawer />
    </>
  );
}
