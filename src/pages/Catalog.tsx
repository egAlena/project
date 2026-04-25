import { useState } from "react";
import { Product } from "../components/Product.tsx";
import { Button } from "../components/Button.tsx";
import { Input } from "../components/Input.tsx";

interface ProductType {
    id: number;
    imageSrc: string;
    imageAlt: string;
    title: string;
    price: number;
    description: string;
}

const Catalog = () => {
    const [products, setProducts] = useState<ProductType[]>([
        {
            id: 1,
            imageSrc: "../public/img/item1.png",
            imageAlt: "item1",
            title: "КАМЕРА “ЧТО-ТО”",
            price: 5000,
            description: "много описания много описания много описания много описания много описания"
        },

        {
            id: 2,
            imageSrc: "../public/img/item2.png",
            imageAlt: "item2",
            title: "ВИДЕОКАМЕРА “ЧТО-ТО”",
            price: 6000,
            description: "много описания много описания много описания много описания много описания"
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: "",
        imageSrc: ""
    });

    const handleDeleteProduct = (id: number) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewProduct({
            title: "",
            price: "",
            description: "",
            imageSrc: ""
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setNewProduct(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleAddProduct = () => {
        if (newProduct.title && newProduct.price && newProduct.description && newProduct.imageSrc) {
            const newId = Math.max(...products.map(p => p.id), 0) + 1;
            const productToAdd: ProductType = {
                id: newId,
                imageSrc: newProduct.imageSrc,
                imageAlt: newProduct.title,
                title: newProduct.title,
                price: parseFloat(newProduct.price),
                description: newProduct.description
            };
            setProducts(prev => [...prev, productToAdd]);
            handleCloseModal();
        } else {
            alert("Пожалуйста, заполните все поля");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[50px] font-bold font-[Comic_Sans_MS] text-[#032C7A] ">Каталог</h1>
                <Button
                color="primary"
                size="middle"
                title="Добавить товар"
                disabled={false}
                onClick={handleOpenModal}
                >
                </Button>
            </div>
            

            <p className="text-center mb-4 text-gray-600 font-[Comic_Sans_MS]">
                Всего товаров: {products.length}
            </p>
            
            {products.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500 text-lg font-[Comic_Sans_MS]">Нет доступных товаров</p>
                </div>
            ) : (
                <div className="flex flex-wrap gap-6 justify-center">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            imageSrc={product.imageSrc}
                            imageAlt={product.imageAlt}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            onDelete={() => handleDeleteProduct(product.id)}
                        />
                    ))}
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-[#ABC4FF] rounded-[20px] p-10 w-[90%] max-w-[500px] h-[90%]">
                        <h2 className="text-[28px] font-bold font-[Comic_Sans_MS] text-[#032C7A] mb-6 text-center">
                            Добавление товара
                        </h2>

                        <div className="flex flex-col space-y-5">
                            <Input
                                size="middle"
                                color="primary"
                                inputId="title"
                                title="Название товара"
                                placeholder="Введите название"
                                value={newProduct.title}
                                onChange={handleInputChange}
                            />
                            
                            <Input
                                size="middle"
                                color="primary"
                                inputId="price"
                                title="Цена"
                                placeholder="Введите цену"
                                value={newProduct.price}
                                onChange={handleInputChange}
                            />
                            
                            <Input
                                size="middle"
                                color="primary"
                                inputId="description"
                                title="Описание"
                                placeholder="Введите описание"
                                value={newProduct.description}
                                onChange={handleInputChange}
                            />
                            
                            <Input
                                size="middle"
                                color="primary"
                                inputId="imageSrc"
                                title="Путь к изображению"
                                placeholder="Например: ../public/img/item3.png"
                                value={newProduct.imageSrc}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex gap-4 mt-6">
                            <Button
                                color="primary"
                                size="middle"
                                title="Добавить"
                                disabled={false}
                                onClick={handleAddProduct}
                            />

                            <Button
                                color="primary"
                                size="middle"
                                title="Отмена"
                                disabled={false}
                                onClick={handleCloseModal}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Catalog;