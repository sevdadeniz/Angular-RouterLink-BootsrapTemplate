import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  pagesHome:string='Anasayfa';
  pagesAbout:string='Hakkımızda';
  pagesContact:string='İletişim';
  pagesTeam:string='Ekibimiz';

  apiUrl:string ='https://jsonplaceholder.typicode.com/'


  constructor(

    private http:HttpClient
  ) { }

    GetUser(){
      return this.http.get(this.apiUrl + "users")
    }




}
