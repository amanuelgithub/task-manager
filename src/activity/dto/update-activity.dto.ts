import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ActivityStatusEnum } from '../entities/activity.entity';

export class UpdateActivityDto {
  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(ActivityStatusEnum)
  status: ActivityStatusEnum;
}
