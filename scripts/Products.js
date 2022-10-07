import { getProducts } from "./database.js"

const products = getProducts()

// this section creates a product name+price pop-up when product is moused over
document.addEventListener(
    "mouseover",
    (MouseEvent) => {
        const itemMoused = MouseEvent.target

        if (itemMoused.id.startsWith("product")){
            const [,productId] = itemMoused.id.split("--")
            for (const product of products) {
                if (product.id === parseInt(productId)){
                    window.alert(`${product.name} is $${product.price}`)
                    
                }
            }
        }
    }
)



// this section writes hmtl script for product menu display
export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}
