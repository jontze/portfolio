import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  async findAll(username: string, token: string): Promise<Project[]> {
    const query = `
    query GetPinnedRepos($username: String!) {
      user(login: $username) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              createdAt
              updatedAt
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  `;

    const response = await axios({
      url: 'https://api.github.com/graphql',
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: {
        query,
        variables: {
          username,
        },
      },
    });

    const pinnedRepos = response?.data?.data?.user?.pinnedItems?.nodes;
    return pinnedRepos ?? [];
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }
}
