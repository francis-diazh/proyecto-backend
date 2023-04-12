class ProductManager{
    constructor(){
        this.products = []
    }
getProducts(){
console.log(this.products)
return this.products
}

getProductById(product_id){
    let one = this.products.find(e => e.id === product_id);
    if(one){
        console.log(one)
        return one
    }
    console.log("not found")
    return null
}

addProduct({title,description,price,thumbnail,stock}){
    let id = 0
    if(this.products.length===0){
        id = 1 
    }else{
        let lastProducts = this.products[this.products.length-1]
        id=lastProducts.id + 1
    }
    let product={ title,description,price,thumbnail,stock,id }
    this.products.push(product)
}
    }


let product= new ProductManager()
product.addProduct({title:"Remera",description:"Talle L",price: 150,thumbnail:"img1",stock:10 })
product.addProduct({title:"Buzo Hoodie",description:"Talle M",price:null ,thumbnail:"img2",stock:15 })
product.addProduct({title:"Pantalon",description:"Talle XL",price: 100,thumbnail:"img3",stock:20 })
product.getProducts()
product.getProductById(1)
product.getProductById(5)