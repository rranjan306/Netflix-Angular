import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WidgetWeatherMainComponent } from './components/widget-weather-main/widget-weather-main.component';
import { HumanizeUnixTimePipe } from './pipes/humanize-unix-time.pipe';
import { HomeComponent } from './components/home/home.component';
import { FrequentlyAskedQuestionsComponent } from './components/frequently-asked-questions/frequently-asked-questions.component';
import { DisplayDirective } from './directives/display.directive';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetWeatherMainComponent,
    HumanizeUnixTimePipe,
    HomeComponent,
    FrequentlyAskedQuestionsComponent,
    DisplayDirective,
    GetStartedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
