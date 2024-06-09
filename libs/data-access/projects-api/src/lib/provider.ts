import { FactoryProvider, Provider, ValueProvider } from '@angular/core';

import { API_CONFIG_TOKEN } from './token';
import { ProjectsService } from './services/projects.service';

export const enum ProjectsApiFeatureKind {
  ApiConfigFeature,
}

export interface ProjectsApiFeature<
  FeatureKind extends ProjectsApiFeatureKind
> {
  kind: FeatureKind;
  providers: Provider[];
}

export type ApiConfigFeature =
  ProjectsApiFeature<ProjectsApiFeatureKind.ApiConfigFeature>;

export type ProjectsApiFeatures = ApiConfigFeature;

export const provideProjectsApi = (
  ...features: ProjectsApiFeatures[]
): Provider => {
  return [ProjectsService, features.map((feature) => feature.providers)];
};

export const withApiConfig = (
  factoryProvider:
    | Omit<FactoryProvider, 'provide' | 'multi'>
    | Omit<ValueProvider, 'provide'>
): ApiConfigFeature => {
  return {
    kind: ProjectsApiFeatureKind.ApiConfigFeature,
    providers: [
      {
        provide: API_CONFIG_TOKEN,
        ...factoryProvider,
      },
    ],
  };
};
