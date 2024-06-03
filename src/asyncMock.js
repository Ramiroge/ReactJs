const products = [
    {
        nombre: "Chocolate con Leche",
        cacao: "40%", 
        leche: "Leche Tradicional", 
        imagen: "https://acdn.mitiendanube.com/stores/003/236/931/products/chocolate-con-leche21-ce255c0e584758ec4816899752187190-1024-1024.webp", 
        categoria: "Con Leche", 
        precio: "2000", 
        stock: "25", 
        id: "LAT"
    },
    {
        nombre: "Chocolate Blanco con Vainilla Natural",  
        cacao: "30%", 
        leche: "Leche Tradicional", 
        imagen: "https://acdn.mitiendanube.com/stores/003/236/931/products/chocolate-blanco-con-vainilla-natural21-b290518d96e888c0a816899751055748-640-0.webp", 
        categoria: "Con Leche", 
        precio: "2100", 
        stock: "25", 
        id: "BLA"
    },
    {
        nombre: "Chocolate Amargo con Almendras & Sal Marina",  
        cacao: "73%", 
        leche: "Sin Leche", 
        imagen: "https://acdn.mitiendanube.com/stores/003/236/931/products/chocolate-amargo-cacao-73-plant-based-almendras-sal-marina21-d924303c55f18e684616899751842109-640-0.webp", 
        categoria: "Amargos", 
        precio: "2400", 
        stock: "25", 
        id: "ALM73"
    },
    {
        nombre: "Chocolate Orgánico Amargo",  
        cacao: "73%", 
        leche: "Sin Leche", 
        imagen: "https://acdn.mitiendanube.com/stores/003/236/931/products/chocolate-organico-amargo-cacao-73-plant-based31-6c7ab2cdd406866fea16899750928053-640-0.webp", 
        categoria: "Amargos", 
        precio: "2300", 
        stock: "25", 
        id: "AMA"
    },
    {
        nombre: "Chocolate Amargo al 80",  
        cacao: "80%", 
        leche: "Sin Leche", 
        imagen: "https://acdn.mitiendanube.com/stores/003/236/931/products/chocolate-amargo-cacao-80-plant-based-sin-azucar11-d504209a254896cd0716940159910474-640-0.webp", 
        categoria: "Amargos", 
        precio: "2900", 
        stock: "25", 
        id: "80"
    },
    {
        nombre: "Chocolate Amargo al 100",  
        cacao: "100%", 
        leche: "Sin Leche", 
        imagen: "https://acdn.mitiendanube.com/stores/003/236/931/products/chocolate-organico-extra-amargo-cacao-100-plant-based-sin-azucar11-36c188ed948ca8f49616940178428852-640-0.webp", 
        categoria: "Amargos", 
        precio: "3000", 
        stock: "25", 
        id: "100"
    },
    {
        nombre: "Chocolate con Leche de Coco Plant Based, Con Flakes de Arroz",  
        cacao: "39%", 
        leche: "Leche de Coco", 
        imagen: "https://acdn.mitiendanube.com/stores/003/236/931/products/chocolate-con-leche-de-coco-plant-based-flakes-de-arroz-sin-azucar11-0205976308caff0c7c16940159530164-640-0.webp", 
        categoria: "Veganos", 
        precio: "2800", 
        stock: "25", 
        id: "LCARROZ"
    },
    {
        nombre: "Chocolate con Leche de Coco, Plant Based, Con Granos de Café Molidos",  
        cacao: "35%", 
        leche: "Leche de Coco", 
        imagen: "https://acdn.mitiendanube.com/stores/003/236/931/products/chocolate-con-leche-de-coco-plant-based-granos-de-cafe-sin-azucar11-14d86893058c627e2f16940159690861-640-0.webp", 
        categoria: "Veganos", 
        precio: "2800", 
        stock: "25", 
        id: "LCCAFE"
        
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}