import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { ActivityModule } from './activity/activity.module';
import { Project } from './project/entities/project.entity';
import { Task } from './task/entities/task.entity';
import { Activity } from './activity/entities/activity.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'task-manager',
      entities: [Project, Task, Activity],
      synchronize: true,
    }),
    ProjectModule,
    TaskModule,
    ActivityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
