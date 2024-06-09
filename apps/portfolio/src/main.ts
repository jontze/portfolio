import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import {
  ConfigService,
  provideConfig,
  setRemoteConfig,
} from '@jontze/ng-remote-config';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import {
  provideProjectsApi,
  withApiConfig,
} from '@jontze/data-access/projects-api';

fetch('/assets/config.json')
  .then((res) => res.json())
  .then((config) => setRemoteConfig(config))
  .then(() =>
    bootstrapApplication(AppComponent, {
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideAnimations(),
        provideHttpClient(),
        provideRouter(appRoutes),
        provideConfig(),
        provideProjectsApi(
          withApiConfig({
            useFactory: (configService: ConfigService) => ({
              url: configService.getConfig<{ projectsApiUrl: string }>()
                .projectsApiUrl,
            }),
            deps: [ConfigService],
          })
        ),
      ],
    })
  )
  .catch((err) => console.error(err));
