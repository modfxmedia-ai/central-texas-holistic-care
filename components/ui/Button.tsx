"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type MotionButtonProps = Omit<HTMLMotionProps<"button">, "children">;
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends MotionButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  children?: ReactNode;
  type?: NativeButtonProps["type"];
}

const VARIANT: Record<ButtonVariant, string> = {
  primary:
    "bg-[#2D5016] text-white shadow-md shadow-[#2D5016]/20 hover:bg-[#1a3a0a] hover:shadow-xl",
  secondary:
    "bg-[#FAF6EE] text-[#1a3a0a] shadow-sm border border-[#2D5016]/10 hover:bg-white hover:border-[#2D5016]/30",
  outline:
    "border border-[#2D5016]/30 bg-transparent text-[#1a3a0a] hover:border-[#2D5016] hover:bg-[#f0f5eb]",
  ghost:
    "bg-transparent text-[#1a3a0a] hover:bg-[#f0f5eb]/60",
};

const SIZE: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    loading = false,
    leadingIcon,
    trailingIcon,
    className,
    disabled,
    children,
    type = "button",
    ...rest
  },
  ref
) {
  const isDisabled = disabled || loading;
  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={isDisabled}
      whileHover={isDisabled ? undefined : { y: -2, scale: 1.02 }}
      whileTap={isDisabled ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5016] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6EE] disabled:cursor-not-allowed disabled:opacity-60",
        VARIANT[variant],
        SIZE[size],
        className
      )}
      {...rest}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        leadingIcon && <span className="-ml-1 flex">{leadingIcon}</span>
      )}
      <span>{children}</span>
      {trailingIcon && !loading && <span className="-mr-1 flex">{trailingIcon}</span>}
    </motion.button>
  );
});

export default Button;
