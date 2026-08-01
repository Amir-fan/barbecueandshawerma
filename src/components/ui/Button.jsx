import { forwardRef } from "react";
import { cn } from "../../utils";

export const Button = forwardRef(({ className, variant = "primary", size = "default", href, ...props }, ref) => {
  const Comp = href ? "a" : "button";
  
  const variants = {
    primary: "bg-ember text-white hover:bg-ember-dark border border-transparent",
    secondary: "bg-[#1f1f1f] text-offwhite hover:bg-[#2a2a2a] border border-white/10",
    outline: "bg-transparent text-offwhite border border-ember hover:bg-ember/10",
    ghost: "bg-transparent text-offwhite hover:bg-white/5 border border-transparent",
  };
  
  const sizes = {
    default: "h-12 px-6 py-3 text-base",
    sm: "h-10 px-4 py-2 text-sm",
    lg: "h-14 px-8 py-4 text-lg",
    icon: "h-12 w-12 flex items-center justify-center",
  };

  return (
    <Comp
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display uppercase tracking-wider transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember disabled:pointer-events-none disabled:opacity-50",
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
