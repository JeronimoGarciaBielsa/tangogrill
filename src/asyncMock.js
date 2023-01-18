const products = [
    {id: '1', name: 'Tango', img: 'https://scontent.fblq3-1.fna.fbcdn.net/v/t39.30808-6/323890584_570363657860501_7133522037968733890_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=dVSnCMCForEAX-LdF4h&_nc_ht=scontent.fblq3-1.fna&oh=00_AfD8sx6T46XVmGswtJvk58hcyE_ADzKW6SqQlWW8tCCeQw&oe=63CBDFBD', description: 'Descripcion de Tango', price: 450, stock: 20, category: 'parrillas'}, 
    {id: '2', name: 'Tromen', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_727492-MLA40352265317_012020-F.webp', description: 'Descripcion de Tangüito', price: 300, stock: 15, category: 'parrillas'}, 
    {id: '3', name: 'Chacarero', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_707046-MLA47983948398_102021-F.webp', description: 'Descripcion de Gaucho', price: 40, stock: 12, category: 'parrillas'},
    {id: '4', name: 'Cuyana', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_620659-MLA50157369253_062022-F.webp', description: 'Descripcion de Cuyana', price: 35, stock: 13, category: 'tablas'},
    {id: '5', name: 'Patagonia', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_924900-MLA42117973382_062020-F.webp', description: 'Descripcion de Patagonia', price: 40, stock: 8, category: 'tablas'},
    {id: '6', name: 'Kit Asador', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_924325-MLA46232025461_062021-F.webp', description: 'Descripcion de Kit Asador', price: 45, stock: 9, category: 'accesorios'},
    {id: '7', name: 'Kit TangoGrill', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_957326-MLA53248388538_012023-F.webp', description: 'Descripcion de Kit TangoGrill', price: 70, stock: 7, category: 'accesorios'},
    {id: '8', name: 'Gaucho', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_855235-MLA50111913768_052022-F.webp', description: 'Descripcion de Gaucho', price: 30, stock: 12, category: 'cuchillos'},
    {id: '9', name: 'Pampeano', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_603285-MLA48733364781_012022-F.webp', description: 'Descripcion de Pampeano', price: 35, stock: 16, category: 'cuchillos'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products.filter( prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}