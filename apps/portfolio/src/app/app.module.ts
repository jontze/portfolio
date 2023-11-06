import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CardModule } from '@jontze/ui/card';
import { LandingComponent } from './landing.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroChevronDoubleDownSolid } from '@ng-icons/heroicons/solid';
import { FooterModule } from '@jontze/ui/footer';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CardModule,
    FooterModule,
    NgIconsModule.withIcons({
      heroChevronDoubleDownSolid,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
