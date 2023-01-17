import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    const activity = this.activityRepository.create(createActivityDto);

    return await this.activityRepository.save(activity);
  }

  async update(
    id: string,
    updateActivityDto: UpdateActivityDto,
  ): Promise<Activity> {
    const activity = await this.activityRepository.findOne({ where: { id } });

    if (!activity) {
      throw new NotFoundException('Activity not found');
    }

    const { description, status } = updateActivityDto;

    activity.description = description;
    activity.status = status;

    return await this.activityRepository.save(activity);
  }

  async remove(id: string): Promise<void> {
    const result = await this.activityRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Activity not found');
    }
  }
}
