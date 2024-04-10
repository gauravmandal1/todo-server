import { Task ,Status} from 'src/Task/Task.entity';

export class CreateTaskDto {
    title: string;
    description:string;
    status: Status;
}
