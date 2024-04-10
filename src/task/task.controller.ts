import {Controller,
    Get,
    Post,
    Body,
    Param,
    Res,
    Req,
    HttpStatus,
    Patch,
  } from '@nestjs/common';
import { Response } from 'express';
import { TaskService } from './Task.service';
import { Task } from './Task.entity';
import { CreateTaskDto } from './task.dto';
  
  @Controller('task')
  export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Patch('/:id')
    async updateTask(@Param('id') id: number, @Body() updateTaskDto: Partial<Task>,@Res() res: Response, @Req() req:Request):Promise<any> {
      let updatedTask = this.taskService.updateTask(id, updateTaskDto);
      if (updateTaskDto){
        res.status(HttpStatus.OK).send(updatedTask);
      }
      else{
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          message: 'An error occurred while updating the task',
        })
      };
    }
  
    @Post('')
    async create(@Body() createTaskDto: CreateTaskDto, @Res() res: Response, @Req() req:Request): Promise<any> {
      let newTask = await this.taskService.create(createTaskDto);
      return res.status(HttpStatus.CREATED).send(newTask);
    }

    @Get('/getallTask')
    async getAllTask(@Res() res: Response):Promise<any>{
      let tasks = await this.taskService.getTasks()
      return res.status(HttpStatus.CREATED).send(tasks);
    }
  }
  