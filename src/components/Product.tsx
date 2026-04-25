interface ProductProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    price: number;
    description: string;
    onDelete?: () => void;
}

export const Product = (props: ProductProps) => {
    const { imageSrc, imageAlt, title, price, description, onDelete } = props;

    return (
        <div className="relative flex flex-col justify-center items-center w-[367px] h-[485px] rounded-[30px] bg-[#E0FBFF] mx-[30px] cursor-pointer">
            {onDelete && (
                <button
                    onClick={() => {
                        onDelete();
                    }}
                    className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center text-[#032C7A] font-[Comic_Sans_MS] text-[20px] font-bold  transition-colors"
                >
                    ✕
                </button>
            )}
            <img
                src={imageSrc}
                alt={imageAlt}
                className="w-[274px] h-[277px] mx-[46px] my-0"
            />
            <h1 className="text-[#032C7A] font-[Comic_Sans_MS] text-[20px] font-bold leading-[24px] text-left w-[310px] m-[5px]">
                {title}
            </h1>
            <h1 className="text-[#032C7A] font-[Comic_Sans_MS] text-[20px] font-bold leading-[24px] text-left w-[310px] m-[5px]">
                {price} р.
            </h1>
            <p className="text-[#032C7A] font-[Comic_Sans_MS] text-[13px] font-bold leading-[16px] text-left w-[310px]">
                {description}
            </p>
        </div>
    );
};