import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private readonly todoModel: Model<Todo>) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findById(id).exec();
  }

  async create(todoData: Partial<Todo>): Promise<Todo> {
    const createdTodo = new this.todoModel(todoData);
    return createdTodo.save();
  }
}
