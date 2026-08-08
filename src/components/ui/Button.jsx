import { forwardRef } from "react";
import { cn } from "../../utils";

export const Button = forwardRef(({ className, variant = "primary", size = "default", href, ...props }, ref) => {
  const Comp = href ? "a" : "button";

  const variants = {
    primary: "bg-ember text-white hover:bg-ember-dark border border-white/10 hover:border-white/30 transition-all",
    secondary: "bg-white/5 backdrop-blur-md text-offwhite hover:bg-white/10 border border-white/10 hover:border-white/20",
    outline: "bg-transparent backdrop-blur-sm text-offwhite border border-white/20 hover:border-white/40 hover:bg-white/5",
    ghost: "bg-transparent text-offwhite hover:bg-white/10 border border-transparent",
  };

  const sizes = {
    default: "h-12 px-6 py-3 text-base rounded-full",
    sm: "h-10 px-4 py-2 text-sm rounded-full",
    lg: "h-14 px-8 py-4 text-lg rounded-full",
    icon: "h-12 w-12 flex items-center justify-center rounded-full",
  };

  return (
    <Comp
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";
