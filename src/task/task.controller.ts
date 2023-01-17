import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { Activity } from 'src/activity/entities/activity.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createTaskDto);
  }

  @Get(':taskId/activities')
  findActivitiesForTask(@Param('taskId') taskId: string): Promise<Activity[]> {
    return this.taskService.findActivitiesForTask(taskId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
