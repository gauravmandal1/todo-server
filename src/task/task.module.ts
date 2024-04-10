import { Module, forwardRef } from '@nestjs/common';
import { TaskController } from './Task.controller';
import { TaskService } from './Task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/Task/Task.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}