import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  findAll(): Promise<Product> {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    const ProDuctS: Product[] = JSON.parse(raw);

    return this.findAll();
  }
}
