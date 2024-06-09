import { InjectionToken } from '@angular/core';

export interface ProjectsApiConfig {
  url: string;
}

export const API_CONFIG_TOKEN = new InjectionToken<ProjectsApiConfig>(
  'API_CONFIG_TOKEN'
);
