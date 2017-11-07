import { Component } from '@angular/core';
import { FileUploaderModule } from 'ng4-file-upload/file-uploader.module';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { ImageUploadModule } from 'angular2-image-upload';

// Refer : https://aberezkin.github.io/ng2-image-upload/#/readme

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  image: any;

  constructor(private http: HttpClient) {
  }

  onUploadFinished(event) {
    // const pic = new FormData();
    // this.image = $event.file;
    // console.log($event);
    // this.image = $event.src;
    // console.log('hello', this.image );

     setTimeout(() => {
       this.image = event.file;
     }, 1000);

     const pic = new FormData(this.image);
     pic.append('file' , this.image);
     console.log('event',  this.image);
     console.log('image', pic.get('picture'));

    this.http.post('http://192.9.220.84:8080/dms/grouppicture/savenew', {
     title: 'images on the way',
     processData: false,
     contentType: false,
     crossDomain: true,
     type: 'POST',
     async: false,
     cache: false,
     timeout: 600000,
     headers: { 'Content-Type': 'multipart/form-data'},
     data: pic
   })
     .subscribe(
       res => {
         console.log(res);
       },
       err => {
         console.log('Error occured');
       }
     );
   }
}
