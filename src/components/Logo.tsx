import logoImg from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  heightClass?: string;
}

export function Logo({ className = "", variant = "light", heightClass = "h-11" }: LogoProps) {
  // In dark variant (footer), apply CSS filter to make the logo entirely white for perfect readability
  const filterClass = variant === "dark" ? "brightness-0 invert opacity-95" : "";

  return (
    <div className={`flex items-center group ${className}`}>
      <img
        src={logoImg}
        alt="AmaVille Escola"
        className={`${heightClass} w-auto object-contain transition-all duration-500 group-hover:scale-105 ${filterClass}`}
        width={325}
        height={305}
      />
    </div>
  );
}
