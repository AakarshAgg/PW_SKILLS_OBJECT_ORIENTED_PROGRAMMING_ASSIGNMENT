class Temperature{
    constructor(){
        this._celsius=0,
        this._fahrenheit=32
    }
    get getCelsius(){
        return this._celsius
}
    set setCelsius(value){
     if(value<0){
        throw new Error("Please enter a postive value")
     }
     this._celsius=value
     this._fahrenheit=32+(9/5*value)
    }

    get getFahrenheit(){
    return this._fahrenheit
    }

    set setFarenheit(value){
        if(value<0){
            throw new Error("Please enter a postive value")
         }
         this._fahrenheit=value
         this._celsius=(value-32)*5/9
    }
}

const temperature=new Temperature()

console.log(`Initial Celcius: ${temperature.getCelsius}°C`)
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`)

temperature.setCelsius=25
console.log(`Celsius: ${temperature.getCelsius}°C`)
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`)

temperature.setFarenheit=68;
console.log(`Celsius: ${temperature.getCelsius}°C`)
console.log(`Fahrenheit:${temperature.getFahrenheit}°F`)