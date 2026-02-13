import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [ProjectsModule],
  controllers: [TasksController],
  providers: [],
})
export class AppModule {}
