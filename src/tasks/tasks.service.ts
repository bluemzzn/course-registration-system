import { TasksData, ProjectData } from "./tasks.interface";
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService{
    private data: TasksData;
    constructor(data: TasksData){
        this.data = data;
    }


}