import { Exclude } from 'class-transformer';
import { Order } from 'src/orders/entities/order.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Resume } from '@/resume/entities/resume.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  @Exclude()
  password?: string;

  @Column({ nullable: true })
  @Exclude()
  passwordraw?: string;

  @Column({ nullable: true })
  @Exclude()
  resetToken?: string;

  @OneToMany(() => Resume, (resume) => resume.user)
  resumes: Resume[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @Column()
  provider: 'email' | 'google';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  whatsappName: string;

  @Column({ nullable: true })
  whatsappNumber: string;

  @Column({ nullable: true })
  lastSessionSelection: string;

  @Column({ nullable: true })
  currentSession: string;

  @Column({ nullable: true })
  previewUrl: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  lastCvDetails: string;

  @Column({ nullable: true })
  lastjobDescription: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}