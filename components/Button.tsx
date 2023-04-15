import { Icon } from "@iconify/react";

type Props = {
  disableShadow?: boolean;
  disabled?: boolean;
  variant?: "text" | "button",
  size?: "sm" | "md" | "lg",
  startIcon?: JSX.Element,
  endIcon?: JSX.Element
}

export default function Button({ disableShadow, disabled, variant, size, startIcon, endIcon,}: Props) {
  return (
    <button
      disabled={disabled ? true : false}
      style={{
        backgroundColor: disabled ? "#e0e0e0" : "blue",
        padding: "9px 16px",
        borderRadius: "5px",
        color: disabled ? "#9e9e9e" : "white",
        border: "none",
        boxShadow: disableShadow ? "none" : "-1px 10px 17px -11px rgba(0,0,0,0.75)",
        fontSize: "15px",
        display: "flex",
        alignItems: "center",
        gap: "2px",
        cursor: disabled ? "default" : "pointer"
      }}
    >
      <Icon icon="ic:sharp-add-shopping-cart" />
      Button
    </button>
  );
}
