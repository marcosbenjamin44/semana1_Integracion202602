import { Injectable, NotFoundException } from '@nestjs/common';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable()
export class ProductosService {
  private readonly productos: Producto[] = [
    { id: 1, nombre: 'Teclado mecanico', precio: 45.90 },
    { id: 2, nombre: 'Mouse inalambrico', precio: 19.50 },
    { id: 3, nombre: 'Monitor 24 pulgadas', precio: 129.99 },
  ];

  findAll(): Producto[] {
    return this.productos;
  }

  findOne(id: number): Producto {
    const producto = this.productos.find((p) => p.id === id);
    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    return producto;
  }
}