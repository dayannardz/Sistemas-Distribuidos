import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './entities/product.entity.js';
import {v4 as Uuidv4} from 'uuid';

@Injectable()
export class ProductsService {
  private products : Product [] = [];
  
  create(createProductDto: CreateProductDto) {
    const {name, description, price} = createProductDto;
    const newProduct = new Product(Uuidv4(), name, price, description);
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) : Product{
   const product  = this.products.find((product) => product.id == id);

   if(!product){
  throw new  NotFoundException(`Product with${id} not found`)
   }
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const {name,description,price} = updateProductDto
    const product = this.findOne(id);
    product.updateWith({name, description, price});
    return product;
  }

  remove(id: string){
    const product = this.findOne(id);
    this.products = this.products.filter((product) => product.id !== id);

    //return `This action removes a #${id} product`;

    return {
      status: 200,
      msg: "Producto eliminado con exito",
      product: product
    };
  }

  //Hacer el remove 
}
