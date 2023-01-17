import { Activity } from 'src/activity/entities/activity.entity';
import { Project } from 'src/project/entities/project.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  projectId: string;

  @ManyToOne(() => Project, (project) => project.tasks, { onDelete: 'CASCADE' })
  project: Project;

  @OneToMany(() => Activity, (activity) => activity.task, {
    eager: true,
    cascade: true,
  })
  activities: Activity[];
}
