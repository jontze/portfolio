import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FooterModule } from '@jontze/ui/footer';
import { ProjectsModule } from '@jontze/feature/projects';
import { ParticleTextModule } from '@jontze/ui/particle-text';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LandingComponent } from './landing.component';
import { IconModule } from '@jontze/ui/icon';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    IconModule,
    FooterModule,
    ProjectsModule,
    ParticleTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
