import { PartialType } from '@nestjs/swagger';
import { CreateProductoDto } from './create-producto.dto.js';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {}
