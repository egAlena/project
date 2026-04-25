import React from "react";

type SizeType = "small" | "middle";
type ColorType = "primary" | "secondary";

interface ButtonProps {
  size: SizeType;
  color: ColorType;
  disabled: boolean;
  title?: string;
  onClick: () => void;
  children?: React.JSX.Element;
}

export const Button = (props: ButtonProps) => {
  const { size, color, disabled, title, onClick, children } = props;
  const defaultClass =
    "flex items-center justify-center rounded-[30px] px-4 py-2";

  const disabledClass = "bg-[#686868] text-[#000000] cursor-not-allowed";
  const classes = {
    colors: {
      primary: {
        button: "bg-[#E0FBFF]",
        text: "text-[#032C7A] font-bold text-center",

      },
      secondary: {
        button: "bg-[#E0FBFF] border-[5px] border-[#032C7A] shadow-[0_4px_10px_#032C7A]",
        text: "text-[#032C7A]",
      },
    },
    sizes: {
      small: "rounded-[100px] w-[140px] h-[140px]",
      middle: "rounded-[30px]  text-[25px] font-[Comic_Sans_MS] w-[250px] h-[80px]",
    }
  };
  return (
    <button
      className={
        defaultClass +
        " " +
        classes.sizes[size] +
        " " +
        (disabled ? disabledClass : classes.colors[color].button)
      } 
      onClick={onClick}
      disabled={disabled}
    >
      {/* <span className={classes.colors[color].text}>{title}</span> */}
      {title && <span className={classes.colors[color].text}>{title}</span>}
      {children}
    </button>
  );
};
