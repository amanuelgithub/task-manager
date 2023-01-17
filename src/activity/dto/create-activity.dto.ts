import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ActivityStatusEnum } from '../entities/activity.entity';

export class CreateActivityDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  //   @IsNotEmpty()
  @IsEnum(ActivityStatusEnum)
  status: ActivityStatusEnum;

  @IsNotEmpty()
  @IsString()
  taskId: string;
}
