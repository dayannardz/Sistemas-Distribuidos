interface updateWitnoptions{
name?: string,
description?: string,
price?: number
}  


export class Product {
// entity Es un modelo de datos que nos permite definir la estructura de lo que vamos a almacenar en la bd


constructor(
    public id: String, 
    public name: String, 
    public price: number, 
    public description? : String
){}

updateWith({name, description, price}:updateWitnoptions ){
this.name = name ?? this.name;
this.description = description ?? this.description;
this.price = price ?? this.price;

}

}
