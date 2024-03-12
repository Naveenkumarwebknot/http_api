import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { Todo, TodoSchema } from './todos/todo.entity';
import mongodbConfig from './mongodb.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: mongodbConfig,
    }),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class AppModule {}
 