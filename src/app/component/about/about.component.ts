import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public pagesService: PagesService) { }

  ngOnInit(): void {
  }

}
