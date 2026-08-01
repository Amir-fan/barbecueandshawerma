import { cn } from "../../utils";

export function Section({ className, children, id, containerClass, ...props }) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative", className)} {...props}>
      <div className={cn("max-w-7xl mx-auto px-6 md:px-12 relative z-10", containerClass)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ title, subtitle, className, align = "left" }) {
  return (
    <div className={cn(
      "mb-16 md:mb-24 flex flex-col gap-3", 
      align === "center" && "items-center text-center",
      className
    )}>
      {subtitle && (
        <span className="font-display tracking-[0.2em] text-ember uppercase text-sm md:text-base font-medium">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl font-display text-offwhite uppercase">
        {title}
      </h2>
    </div>
  );
}
