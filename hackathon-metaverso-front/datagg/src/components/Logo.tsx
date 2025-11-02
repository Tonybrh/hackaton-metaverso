import logoImage from "../assets/logo.png";

interface LogoProps {
  variant?: "light" | "dark";
  size?:
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "navbar"
    | "hero";
  className?: string;
}

export function Logo({
  variant = "light",
  size = "medium",
  className = "",
}: LogoProps) {
  const sizeClasses = {
    small: "h-6",
    medium: "h-8",
    large: "h-10",
    xlarge: "h-12",
    navbar: "h-14",
    xxlarge: "h-18",
    hero: "h-16",
  };

  // Aplica filtro para versão clara em fundos escuros com sombra difusa
  const filterStyle =
    variant === "light"
      ? {
          filter:
            "brightness(0) saturate(100%) invert(85%) sepia(15%) saturate(500%) hue-rotate(200deg) brightness(105%) contrast(101%) drop-shadow(0 2px 8px rgba(179, 170, 255, 0.3))",
        }
      : {};

  return (
    <img
      src={logoImage}
      alt="DataGG"
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
      style={filterStyle}
    />
  );
}
