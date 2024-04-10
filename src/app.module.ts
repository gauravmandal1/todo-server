import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module'
import { Task } from './Task/Task.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: "127.0.0.1",
        port: 3306,
        username: 'root',
        password: '',
        database: 'test',
        entities: [Task],
        synchronize: true,
        autoLoadEntities: true,
      }),TaskModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
