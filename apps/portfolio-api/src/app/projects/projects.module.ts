import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register({ ttl: 5 * 60 * 1000 /* 5 minutes */ })],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
