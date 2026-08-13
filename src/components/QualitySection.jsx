import { Section } from "./ui/Section";
import { useLanguage } from "../context/LanguageContext";

export function QualitySection() {
  const { t, currentLanguage } = useLanguage();
  
  // Access the raw array or just map over 0,1,2,3
  const itemsCount = t('quality.items').length || 4;
  const items = Array.from({ length: itemsCount }).map((_, i) => ({
    num: `0${i + 1}`,
    title: t(`quality.items.${i}.title`),
    desc: t(`quality.items.${i}.desc`),
  }));

  return (
    <Section className="bg-[#050505] border-y border-white/5" containerClass="md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="lg:sticky lg:top-32 relative">
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-display text-offwhite uppercase tracking-tight leading-[1.1] mb-8" dangerouslySetInnerHTML={{ __html: t("quality.title").replace('الطعم', '<br/><span class="text-ember">الطعم</span>') }}>
          </h2>
          <p className="text-offwhite/50 font-body text-xl font-light max-w-md leading-relaxed">
            {t("quality.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {items.map((point) => (
            <div key={point.num} className="flex flex-col md:flex-row gap-6 md:gap-8 group bg-[#111] p-10 rounded-[3rem] border border-white/5 hover:border-ember/30 transition-colors duration-500 shadow-2xl">
              <span className="font-display text-6xl md:text-7xl text-transparent group-hover:text-ember transition-colors duration-500 font-bold leading-none" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                {point.num}
              </span>
              <div className="mt-2">
                <h3 className="font-display text-3xl text-offwhite uppercase tracking-tight mb-4 group-hover:text-ember transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-offwhite/50 font-body font-light text-lg leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
