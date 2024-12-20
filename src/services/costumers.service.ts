import { Injectable, NotFoundException } from '@nestjs/common';
import {
  ActualizarCostumerDto,
  CrearCostumerDto,
} from 'src/dtos/costumers.dtos';
import { Costumer } from 'src/entities/costumer.entity';

@Injectable()
export class CostumersService {
  private counterId = 1;
  private costumers: Costumer[] = [
    {
      id: 1,
      nombre: 'nombre 1',
      apellido: 'apellido 1',
      telefono: '+569989898',
    },
  ];

  findAll() {
    return this.costumers;
  }

  findOne(id: number) {
    const costumer = this.costumers.find((item) => item.id === id);
    if (!costumer) {
      throw new NotFoundException(`Costumer #${id} not found`);
    }
    return costumer;
  }

  create(payload: CrearCostumerDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newCostumer = {
      id: this.counterId,
      ...payload,
    };
    this.costumers.push(newCostumer);
    return newCostumer;
  }

  update(id: number, payload: ActualizarCostumerDto) {
    const costumer = this.findOne(id);
    if (costumer) {
      const index = this.costumers.findIndex((item) => item.id === id);
      this.costumers[index] = {
        ...costumer,
        ...payload,
      };
      return this.costumers[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.costumers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Costumers #${id} not found`);
    }
    this.costumers.splice(index, 1);
    return true;
  }
}
