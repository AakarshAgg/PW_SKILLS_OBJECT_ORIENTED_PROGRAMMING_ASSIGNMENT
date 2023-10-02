class Shape{
    constructor(){
    }
    calculateArea(){
    
    }
    calculatePerimeter(){
   
    }
}
class Circle extends Shape{
    constructor(radius){
        super()
        this.radius=radius
    }
    calculateArea(){
       return Math.PI*this.radius**2
    }
    calculatePerimeter(){
       return 2*Math.PI*this.radius
    }
}
class Rectangle extends Shape{
    constructor(value1,value2){
        super("Rectangle")
        this.value1=value1,
        this.value2=value2
    }
    calculateArea(){
     return this.value1*this.value2
    }
    calculatePerimeter(){
    return 2*(this.value1+this.value2)    
    }
}

class Triangle extends Shape{
    constructor(side1,side2,side3){
        super()
        this.side1=side1
        this.side2=side2
        this.side3=side3
    }
    calculateArea(){
        let s=(this.side1+this.side2+this.side3)/2
        return Math.sqrt(s*(s-this.side1)*(s-this.side2)*(s-this.side3))
    }
    calculatePerimeter(){
        return this.side1+this.side2+this.side3
    }
}

const circle=new Circle(5)
console.log(`Circle-Area:${circle.calculateArea()},Primeter: ${circle.calculatePerimeter()}`)

const rectangle=new Rectangle(4,5)
console.log(`Rectangle - Area: ${rectangle.calculateArea()},Perimeter: ${rectangle.calculatePerimeter()}`)

const triangle=new Triangle(8,6,5)
console.log(`Triangle-Area:${triangle.calculateArea()},Primeter:${triangle.calculatePerimeter()}`)