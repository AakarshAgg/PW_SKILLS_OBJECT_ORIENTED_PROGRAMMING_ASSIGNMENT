function Product(name,category,price,stock){
this.name=name,
this.category=category,
this.price=price,
this.stock=stock
}

function Inventory(){
  this.arr=[]
}

Inventory.prototype.addProduct=function(obj){
    if(obj instanceof Product){
    this.arr.push(obj)
  console.log(`Added ${obj.name} to the inventory.`)
    }else{
        console.log("Invalid Product. Please enter a valid product object")
    }
}
Inventory.prototype.deleteProduct=function(productName){
    let index=this.arr.findIndex((product)=>product.name==productName)
    this.arr.splice(index,1)
   console.log(`Deleted ${productName} from the inventory.`)
}

const inventory=new Inventory()

const product1=new Product("Laptop","Electronics",899,10)
const product2= new Product("Book","Books",20,50)

inventory.addProduct(product1)
inventory.addProduct(product2)


inventory.deleteProduct("Laptop")
