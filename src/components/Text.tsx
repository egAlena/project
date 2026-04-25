type SizeType = "small" | "middle";
type ColorType = "primary" | "secondary";

interface TextProps {
  size: SizeType;
  color: ColorType;
  text: string;
}

export const Text = (props: TextProps) => {
  const { size, color, text } = props;

  const defaultClass = "font-[Comic Sans MS]";

  const classes = {
    colors: {
      primary: "text-[#032C7A]",
      secondary: "text-[#032C7A]",
    },
    sizes: {
      small: "text-[25px]",
      middle: "text-[30px] font-bold",
    },
  };

  return (
    <div>
      <p
        className={
          defaultClass + " " + classes.colors[color] + " " + classes.sizes[size]
        }
      >
        {text}
      </p>
    </div>
  );
};
