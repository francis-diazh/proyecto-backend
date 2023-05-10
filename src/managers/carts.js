import fs from "fs"
import manager from "../managers/script.js"

class CartManager{
    constructor(path){
        this.carts=[]
        this.path=path
        this.init(path)
    }
    init(path){
        let file = fs.existsSync(path)
        if(!file){
            fs.writeFileSync(path,'[]')
                console.log('file created at path: '+this.path)
                return 201
        }else{
            this.carts = JSON.parse(fs.readFileSync(path,'UTF-8'))
            return 200
        }
    }
    async add_cart() {
        try {
            let data = { products: [] }
            if (this.carts.length>0) {
                let next_id = this.carts[this.carts.length-1].id+1
                data.id = next_id
            } else {
                data.id = 1
            }
            this.carts.push(data)
            let data_json = JSON.stringify(this.carts,null,2)
            await fs.promises.writeFile(this.path,data_json)
            console.log('id´s created cart: '+data.id)
            return 201
        } catch(error) {
            console.log(error)
            return null
        }
    }
     getCarts() {
        try{
            return this.carts
        } catch(error) {
            // console.log(error)
            return 'getCarts: error'
        }
    }
    getCartsById(id) {
        let search = this.carts.find(each=>each.id===id)
        if(search){
            console.log(search)
            return search
        }else{
            return "Not found"
        }
        
    }
    async update_cart(id,data) {
        try {
            let one = this.getCartsById(id)
            for (let prop in data) {
                one[prop] = data[prop]
            }
            console.log(data)
            let data_json = JSON.stringify(this.carts,null,2)
            await fs.promises.writeFile(this.path,data_json)
            console.log('updated cart: '+id)
            return 200
        } catch(error) {
            console.log(error)
            return null
        }
    }
     async update_cart(cid, pid, x) {
            try {
            let auxCart = getCartsById(cid);
            let auxProducts = manager.getProducts();
            let auxProduct = manager.getProductsById(pid);
            if (auxProduct.stock > x) {
                
                auxCart.products.push({
                id: auxProduct.id,
                title: auxProduct.title,
                units: x
                });
            }
        
            for (let index = 0; index < auxProducts.length; index++) {
                let element = auxProducts[index];
                if (pid === element.id) {
                auxProducts[index].stock = element.stock - x;
                manager.updateProduct(pid, element);
                }
            }
            // this.carts.push(auxCart);
            let data_json = JSON.stringify(this.carts, null, 2);
            await fs.promises.writeFile(this.path, data_json);
            return 200;
            } catch (error) {
            console.log(error);
            return null;
            }
        }
    async destroy_cart(id) {
        try {
            let one = this.carts.find(each=>each.id===id)
            if (one) {
                this.carts = this.carts.filter(each=>each.id!==id)
                let data_json = JSON.stringify(this.carts,null,2)
                await fs.promises.writeFile(this.path,data_json)
                console.log('delete cart: '+id)
                return 200
            }
            console.log('not found')
            return null
        } catch(error) {
            console.log(error)
            return null
        }
    }
        async delete_cart(cid, pid, x) {
        try {
            let auxCart = this.getCartsById(cid);
            let auxCartProduct = findProduct(auxCart, pid, x);
            let auxProducts = manager.getProducts();
            console.log(auxProducts);
            let auxProduct = manager.getProductById(pid);
            function findProduct(auxCart, pid, x) {
                let foundProduct = auxCart.products.find(product => product.id === pid);
                if (foundProduct) {
                    foundProduct.units -= x;
                }
                return foundProduct;
                } 
        
            for (let index = 0; index < auxProducts.length; index++) {
                let element = auxProducts[index];
                if (pid === element.id) {
                auxProducts[index].stock = element.stock + x;
                manager.updateProduct(pid, element);
                }
            }
            let data_json = JSON.stringify(this.carts, null, 2);
            await fs.promises.writeFile(this.path, data_json);
            return 200;
            } catch (error) {
            console.log(error);
            return null;
        }
    }


}
let cart =new CartManager('./src/data/carts.json')
async function carrito(){
    await cart.addCart({pid:5,quantity:5})
    //await cart.getCarts()
   // await cart.getCartsById(2)
}
// carrito()

export default cart
