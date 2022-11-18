import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public pagesService: PagesService) { }

  ngOnInit(): void {
  }

}
