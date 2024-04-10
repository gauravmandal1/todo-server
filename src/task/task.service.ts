import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Task ,Status} from 'src/Task/Task.entity';
import * as md5 from 'md5';
import { CreateTaskDto } from './task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    let newTask = new Task();
    newTask.status = Status.TODO ;
    newTask.description = createTaskDto.description;
    newTask.title = createTaskDto.title;
    newTask = this.taskRepository.create(newTask);
    await this.taskRepository.save(newTask);
    return newTask
  }

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find({});
  }

  async updateTask(id: number,updateData: Partial<Task>): Promise<Task> {
    await this.taskRepository.update(id, updateData);
    return this.taskRepository.findOne({
      where:{
        id
      }
    });
  }
}
