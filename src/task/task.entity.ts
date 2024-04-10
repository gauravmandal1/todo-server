import { Entity, Column, Index, PrimaryGeneratedColumn } from "typeorm";

export enum Status {
  TODO = "todo",
  IN_PROGRESS = "inProgress",
  COMPLETE = "complete"
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Index("ind_status")
  @Column({ type: "enum", enum: Status, default: Status.TODO })
  status: Status;

  @Column({
    length:100,
    default:null
  })
  title:string;

  @Column({
    length:500,
    default:null
  })
  description:string;
}