import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
// import { HTTP } from '@angular/core';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor(private httpclient: HttpClient, private http: HTTP) {
   }

     getAnimals(){
    return this.httpclient.get("http://demo0253989.mockable.io/curso-ionic-list");

  }
}
