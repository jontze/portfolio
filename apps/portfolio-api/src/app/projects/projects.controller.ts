import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ProjectsService } from './projects.service';

@Controller('projects')
@UseInterceptors(CacheInterceptor)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error('Missing GITHUB_TOKEN env variable');
    }
    return this.projectsService.findAll('jontze', token);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }
}
