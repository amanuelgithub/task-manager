import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from 'src/activity/entities/activity.entity';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
    private projectService: ProjectService,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const { projectId } = createTaskDto;

    const project = await this.projectService.findOne(projectId);

    const task = this.tasksRepository.create(createTaskDto);
    task.project = project;

    return this.tasksRepository.save(task);
  }

  async findActivitiesForTask(taskId: string): Promise<Activity[]> {
    const task = await this.tasksRepository.findOne({
      where: { id: taskId },
    });

    if (!task.activities) {
      throw new NotFoundException('Task not found');
    }

    return task.activities;
  }

  async remove(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Task Does not exist');
    }
  }
}
