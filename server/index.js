import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Начальные товары
let products = [
    {
        id: 1,
        imageSrc: "../public/img/item1.png",
        imageAlt: "item1",
        title: "КАМЕРА «ЧТО-ТО»",
        price: 5000,
        description: "много описания много описания много описания много описания много описания"
    },
    {
        id: 2,
        imageSrc: "../public/img/item2.png",
        imageAlt: "item2",
        title: "ВИДЕОКАМЕРА «ЧТО-ТО»",
        price: 6000,
        description: "много описания много описания много описания много описания много описания"
    }
];

//получить все товары
app.get("/api/products", (req, res) => {
    res.json(products);
});

//добавление
app.post("/api/products", (req, res) => {
    const newProduct = req.body;

    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const productWithId = { 
        ...newProduct, 
        id: newId,
        imageAlt: newProduct.imageAlt || newProduct.title
    };

    products.push(productWithId);        
    res.json(productWithId);
});

//удаление
app.delete("/api/products/:id", (req, res) => {
   
    const id = parseInt(req.params.id);

    const initialLength = products.length;
    products = products.filter(product => product.id !== id);

    if (products.length < initialLength) {
        res.json({ message: "Товар удален", id: id });
    } else {
        res.status(404).json({ message: "Товар не найден" });
    }
});

// Запускаем сервер
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});