type SizeType = "small" | "middle";
type ColorType = "primary" | "secondary";

interface InputProps {
  size: SizeType;
  color: ColorType;
  inputId: string;
  title?: string;
  placeholder?: string;
  value?: string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const { size, color, inputId, title, placeholder, value, onChange } = props;

  const defaultClass = "rounded-[10px] px-4 py-2 border mt-[10px]";
  const labelClass =
    "text-[#032C7A] font-[Comic Sans MS] font-bold text-[25px]";

  const classes = {
    colors: {
      primary: {
        border: "border-[#032C7A]",
        text: "text-[#032C7A]",
        background: "bg-[#E0FBFF]",
      },
      secondary: {
        border: "border-[#888]",
        text: "text-[#555]",
        background: "bg-[#fff]",
      },
    },
    sizes: {
      small: "w-[140px] h-[35px] text-[20px] font-[Comic Sans MS]",
      middle: "w-[400px] h-[50px] text-[20px] font-[Comic Sans MS]",
    },
  };

  return (
    <div>
      {title && (
        <label htmlFor={inputId} className={labelClass}>
          {title}
        </label>
      )}
      <input
        type="text"
        id={inputId}
        className={
          defaultClass +
          " " +
          classes.sizes[size] +
          " " +
          classes.colors[color].background +
          " " +
          classes.colors[color].border
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
