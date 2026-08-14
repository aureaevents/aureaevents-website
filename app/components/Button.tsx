import { Link } from "react-router";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  id?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-cobalt-900 text-white hover:bg-cobalt-600 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-cobalt-900 border-2 border-cobalt-900 hover:bg-cobalt-900 hover:text-white",
  ghost: "bg-transparent text-cobalt-700 hover:bg-cobalt-50",
  gold: "bg-gold-500 text-cobalt-900 hover:bg-gold-400 shadow-md hover:shadow-lg hover:-translate-y-0.5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  type = "button",
  className = "",
  onClick,
  disabled = false,
  id,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full tracking-wide uppercase btn-transition ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} id={id}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        id={id}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
}
