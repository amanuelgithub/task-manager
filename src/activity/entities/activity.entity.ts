import { Task } from 'src/task/entities/task.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  status: ActivityStatusEnum;

  @Column()
  taskId: string;

  @ManyToOne(() => Task, (task) => task.activities, { onDelete: 'CASCADE' })
  task: Task;
}

export enum ActivityStatusEnum {
  NOT_STARTED = 'NOT_STARTED',
  INPROGRESS = 'INPROGRESS',
  COMPLETED = 'COMPLETED',
}
