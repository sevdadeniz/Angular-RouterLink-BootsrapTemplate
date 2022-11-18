import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    public pagesService: PagesService
    ) { }

  ngOnInit(): void {    

  }


 

}
