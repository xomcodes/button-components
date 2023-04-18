import { Icon } from "@iconify/react";

type Props = {
  disableShadow?: boolean;
  disabled?: boolean;
  variant?: "text" | "button";
  size?: "sm" | "md" | "lg";
  startIcon?: string;
  endIcon?: string;
  color?: "default" | "primary" | "secondary" | "danger";
};

export default function Button({
  disableShadow,
  disabled,
  variant,
  size,
  startIcon,
  endIcon,
  color,
}: Props) {
  return (
    <button
      disabled={disabled ? true : false}
      style={{
        background:
          variant === "text"
            ? "none"
            : disabled
            ? "#e0e0e0"
            : color === "default"
            ? "#e0e0e0"
            : color === "secondary"
            ? "#465b64"
            : color === "danger"
            ? "#d3302f"
            : "#2961ff",
        padding:
          size === "sm"
            ? "9px 16px"
            : size === "md"
            ? "11px 18px"
            : "13px 20px",
        borderRadius: "5px",
        color: disabled || variant === "text" ? "#9e9e9e" : "white",
        border: "none",
        boxShadow:
          variant === "text"
            ? "none"
            : disableShadow
            ? "none"
            : "-1px 10px 17px -11px rgba(0,0,0,0.75)",
        fontSize: "15px",
        display: "flex",
        alignItems: "center",
        flexDirection: !startIcon ? "row-reverse" : "row",
        gap: "2px",
        cursor: disabled ? "default" : "pointer",
      }}
    >
      {variant === "text" || (!startIcon && !endIcon) ? (
        ""
      ) : (
        <Icon icon={startIcon || endIcon} />
      )}
      Button
    </button>
  );
}
