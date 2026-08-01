import { Section, SectionHeading } from "./ui/Section";
import { restaurant } from "../data/restaurant";

export function AboutSection() {
  return (
    <Section id="about" className="bg-[#0f0f0f]" containerClass="md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Images */}
        <div className="lg:col-span-6 relative h-[500px] md:h-[700px] w-full">
          {/* Main Image */}
          <div className="absolute top-0 left-8 right-0 bottom-12 md:left-12 md:right-0 z-10 bg-charcoal-dark border border-white/5 overflow-hidden rounded-[4rem]">
            <img 
              src="https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80" 
              alt="Grill Fire" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80"
            />
          </div>
          
          {/* Secondary smaller image */}
          <div className="absolute bottom-[-5%] left-[-5%] md:bottom-0 md:left-0 w-[60%] h-[50%] z-20 bg-[#0f0f0f] p-3 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80" 
                alt="Shawarma Preparation" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-90 grayscale-[20%]"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <SectionHeading 
            title="طعام شهي. حصص كريمة." 
            subtitle="قصتنا" 
            className="mb-4"
          />
          
          <div className="font-body text-offwhite/60 font-light text-xl space-y-8 leading-relaxed">
            <p>
              يجمع <span className="text-offwhite font-medium">{restaurant.name}</span> بين المشاوي على الفحم، الشاورما الطازجة، والبرغر اللذيذ في أجواء مريحة على شاطئ جبلة.
            </p>
            <p>
              نؤمن بالنكهة الجريئة، التحضير الطازج، والطبخ بصدق. سواء كنت تشتهي سندويشة شاورما سريعة أو منئل مشاوي كامل للعائلة، مطبخنا يقدم لك جودة يمكنك تذوقها.
            </p>
            <p className="pr-6 border-r-2 border-ember text-offwhite/80">
              لا نساوم على الجودة. طعام ساخن وطازج يُقدم بضيافة واثقة على الساحل السوري.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
