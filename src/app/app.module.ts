import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ImageUploadModule } from 'angular2-image-upload';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ImageUploadModule.forRoot()
  ],
  exports: [ImageUploadModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
