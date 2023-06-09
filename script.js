const fs = require('fs')

class ProductManager{
    constructor(path){
        this.products=[]
        this.path=path
        this.init(path)
    }
    init(path){
        let file = fs.existsSync(path)
        if(!file){
            fs.writeFileSync(path,'[]')
                console.log('file created at path: '+this.path)
                return 'file created at path: '+this.path
        }else{
            this.products = JSON.parse(fs.readFileSync(path,'UTF-8'))
            console.log('data recovered')
            return 'data recovered'
        }
    }
    async addProduct({title,description,price,thumbnail,stock}){
        try {
            let one=0;
            let data = { title,description,price,thumbnail,stock }
            for(const value in data){
                if(data[value]===""){
                one=1;} 
                }
            if(one===0){
                if (this.products.length>0) {
                    let next_id = this.products[this.products.length-1].id+1
                    data.id = next_id
                } else {
                data.id = 1
                }
            this.products.push(data)
            let data_json = JSON.stringify(this.products,null,2)
            await fs.promises.writeFile(this.path,data_json)
            console.log('id´s created product: '+data.id)
            return 'id´s product: '+data.id
        }else{
            console.log('Incompleto')
            return 'Incompleto'
        }
        } catch(error) {
            console.log(error)
            return 'addProduct: error'
        }
    }
    async getProducts() {
        try{
           if(this.products.length){
            return this.products
           }else{
            return 'Not found'
           }     
        }catch(error){
            return 'getProducts:error'
        }  
    }
    async getProductById(id) {
        try{
        let search = this.products.find(each=>each.id===id)
        if(search){
            return search
        }else{
            return "Not found"
        }}
        catch(error){
            return 'getProductById: error'
        }
    }
    async updateProduct(id,data) {
        try {
            let search = await this.getProductById(id)
             if(search==="Not found"){
                console.log("Not found")
             }else{
                for (let prop in data) {
                    search[prop] = data[prop]
                }
                 let data_json = JSON.stringify(this.products,null,2)
                 await fs.promises.writeFile(this.path,data_json)
                console.log('updateProduct: done , '+id)
                 return 'updated product: '+id
             }} 
             catch(error) {
                console.log(error)
                return 'updateProduct: error'
            }
         }
    async deleteProduct(id) {
        try {
            let search =await this.getProductById(id)
            if(search==="Not found"){
                return "Not found"
             }else{
            this.products = this.products.filter(each=>each.id!==id)
            console.log(this.products)
            let data_json = JSON.stringify(this.products,null,2)
           await fs.promises.writeFile(this.path,data_json)
            console.log('deleteProduct: '+id)
            return 'deleteProduct: '+id
        } }catch(error) {
            console.log(error)
            return 'error: deleting product'
        }
    }
    
}
async function manager() {
    let manager = new ProductManager('./products.json')
    await manager.addProduct({ title:'Remera',description:'Talle L',price:5000,thumbnail:"img1",stock:10 });
    await manager.addProduct({ title:'Buzo Hoodie',description:'Talle M',price:8000,thumbnail:"img2",stock:20 });
    await manager.addProduct({ title:'Pantalon cargo',description:'Talle XL',price:6400,thumbnail:"img3",stock:5 });
    await manager.addProduct({ title:'Piluso',description:'Unisex',price:1000,thumbnail:"img4",stock:10 });
    await manager.addProduct({ title:'Medias 3/4',description:'Unico',price:900,thumbnail:"img5",stock:80 });
    await manager.addProduct({ title:'Rompeviento',description:'Talle S',price:2500,thumbnail:"img6",stock:80 });
    await manager.addProduct({ title:'Short',description:'Algodon',price:1800,thumbnail:"img7",stock:10 });
    await manager.addProduct({ title:'Bermuda',description:'Con bolsillos',price:2000,thumbnail:"img8",stock:10 });
    await manager.addProduct({ title:'Remera oversize',description:'Color negro',price:4000,thumbnail:"img9",stock:50 });
    await manager.addProduct({ title:'Guantes',description:'Colores varios',price:700,thumbnail:"img10",stock:10 });

    // await manager.getProducts()
    // await manager.getProductById(1)
    await manager.updateProduct(10,{ title:'Remera Over' })
    // // await manager.deleteProduct(10)
    // // await manager.getProducts()

   
}
manager()