import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { HomeModule } from './home/home.module';
import { TruncateStringPipe } from './shared/truncate-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TruncateStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TruncateStringPipe]
})
export class AppModule { }
