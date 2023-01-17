import { Task } from 'src/task/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Task, (task) => task.project, {
    eager: true,
    cascade: true,
  })
  tasks: Task[];
}
